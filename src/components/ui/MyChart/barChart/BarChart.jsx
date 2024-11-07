import React, { useState } from 'react';
import { Container_BarChart } from './BarChartStyles';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2';
// components
import Select from '../../../select/Select';

// Registra os componentes necessários do Chart.js
    ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
    );

    const MyChartComponent = () => {
    // Dados simulados com os valores organizados por data para depósitos e retiradas
    const allData = {
        deposit: [
        { date: '2022-01-01', value: 200 },
        { date: '2023-01-02', value: 180 },
        { date: '2024-10-29', value: 75 },
        { date: '2024-10-30', value: 150 },
        { date: '2024-11-01', value: 250 },
        { date: '2024-11-03', value: 100 },
        { date: '2024-11-05', value: 300 },
        { date: '2024-11-07', value: 400 },
        ],
        withdrawal: [
        { date: '2022-01-01', value: 150 },
        { date: '2023-01-02', value: 140 },
        { date: '2024-10-29', value: 50 },
        { date: '2024-10-30', value: 120 },
        { date: '2024-11-01', value: 200 },
        { date: '2024-11-03', value: 80 },
        { date: '2024-11-05', value: 250 },
        { date: '2024-11-07', value: 350 },
        ]
    };

    const data = ["Últimos 7 dias","Últimos 15 dias","Mês atual","Todos os Meses", "Ano atual", "Todos os anos"] // Opções para o componente Select
    
    // Estado para armazenar o intervalo de tempo selecionado
    const [timeRange, setTimeRange] = useState('Últimos 7 dias');

    // Função para filtrar os dados com base no intervalo de tempo
    const filterData = (range) => {
        const now = new Date();
        const startDate = new Date()
        const endDate = new Date();

        switch (range) {
            case 'Últimos 7 dias':
            startDate.setDate(now.getDate() - 7);
            break;
        
            case 'Últimos 15 dias':
            startDate.setDate(now.getDate() - 15);
            break;
        
            case 'Mês atual':
            startDate.setFullYear(now.getFullYear());
            startDate.setMonth(now.getMonth());
            startDate.setDate(1);
            break;
        
            case 'Todos os Meses': {
            // Inicializa um objeto para acumular valores mensais
            const monthlyData = {
                deposit: Array(12).fill(0),
                withdrawal: Array(12).fill(0),
            };
        
            // Acumula os valores de depósitos e retiradas para cada mês do ano atual
            allData.deposit.forEach(item => {
                const date = new Date(item.date);
                if (date.getFullYear() === now.getFullYear()) {
                monthlyData.deposit[date.getMonth()] += item.value;
                }
            });
            
            allData.withdrawal.forEach(item => {
                const date = new Date(item.date);
                if (date.getFullYear() === now.getFullYear()) {
                monthlyData.withdrawal[date.getMonth()] += item.value;
                }
            });

            const mesesAbreviados = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

        
            // Converte os dados acumulados em um formato adequado para o gráfico
            return {
                deposit: monthlyData.deposit.map((value, index) => ({ date: mesesAbreviados[index], value })),
                withdrawal: monthlyData.withdrawal.map((value, index) => ({ date: mesesAbreviados[index], value })),
            };
            }
        
            case 'Ano atual': {
            const currentYear = now.getFullYear();
            const totalDeposit = allData.deposit
                .filter(item => new Date(item.date).getFullYear() === currentYear)
                .reduce((sum, item) => sum + item.value, 0);
            const totalWithdrawal = allData.withdrawal
                .filter(item => new Date(item.date).getFullYear() === currentYear)
                .reduce((sum, item) => sum + item.value, 0);
        
            return {
                deposit: [{ date: currentYear, value: totalDeposit }],
                withdrawal: [{ date: currentYear, value: totalWithdrawal }]
            };
            }
        
            case 'Todos os anos': {
            // Agrupa os valores por ano
            const yearlyData = {};
        
            allData.deposit.forEach(item => {
                const year = new Date(item.date).getFullYear();
                yearlyData[year] = yearlyData[year] || { deposit: 0, withdrawal: 0 };
                yearlyData[year].deposit += item.value;
            });
            
            allData.withdrawal.forEach(item => {
                const year = new Date(item.date).getFullYear();
                yearlyData[year] = yearlyData[year] || { deposit: 0, withdrawal: 0 };
                yearlyData[year].withdrawal += item.value;
            });
        
            // Converte o objeto anual em arrays de dados
            return {
                deposit: Object.keys(yearlyData).map(year => ({ date: `${year}`, value: yearlyData[year].deposit })),
                withdrawal: Object.keys(yearlyData).map(year => ({ date: `${year}`, value: yearlyData[year].withdrawal }))
            };
            }
        
            default:
            return allData;
        }
        // Filtra os dados com base na data
        return {
        deposit: allData.deposit.filter(item => new Date(item.date) >= startDate),
        withdrawal: allData.withdrawal.filter(item => new Date(item.date) >= startDate)
        };
    };

    // Função para formatar os dados para o gráfico
    const getChartData = (range) => {
        const filteredData = filterData(range);
        const labels = filteredData.deposit.map(item => item.date);
        const depositData = filteredData.deposit.map(item => item.value);
        const withdrawalData = filteredData.withdrawal.map(item => item.value);

        return {
        labels,
        datasets: [
            {
            label: 'Depósitos',
            data: depositData,
            backgroundColor: 'rgba(0, 255, 140, 0.5)',
            borderColor: 'rgba(0, 255, 140, 1)',
            borderWidth: 1,
            },
            {
            label: 'Retiradas',
            data: withdrawalData,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            }
        ]
        };
    };

    // Opções do gráfico
    const options = {
        responsive: true,
        maintainAspectRatio: false, // Desabilita o aspecto fixo
        plugins: {
        title: {
            display: true,
            text: 'Comparação de Depósitos e Retiradas'
        },
        tooltip: {
            enabled: true
        }
        },
        scales: {
        x: {
            title: {
            display: true,
            text: 'Data',
            font: {
                size:"14" // Ajusta o tamanho da fonte das datas
            }
            },
            ticks: {
            font: {
                size:"14" // Ajusta o tamanho da fonte das datas
            },
            maxRotation: 90, // Gira as datas para melhor visibilidade
            minRotation: 90, // Gira as datas para melhor visibilidade
            }
        },
        y: {
            title: {
            display: true,
            text: 'Valor (R$)',
            font: {
                size:"16", // Ajusta o tamanho da fonte dos valores
            }

            },
            beginAtZero: true
        }
        }
    };


  // Atualiza os dados do gráfico com base no intervalo de tempo selecionado
    const chartData = getChartData(timeRange);

    return (
        <Container_BarChart>

            <section>
                <div className='header-chart'>
                    <Select 
                        data={data} 
                        setValue={setTimeRange}
                    />
                    <h2>Gráfico de Depósitos e Retiradas</h2>
                </div>
                
                <div className='chart-container'>
                    <Chart className='chart' type="bar" data={chartData} options={options} />
                </div>
            </section>  
        </Container_BarChart>
    );
};

export default MyChartComponent;
