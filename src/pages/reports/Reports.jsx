import { useState, useEffect } from "react";
import { Container_reports, Container_card, Report_area  } from "./ReportStyles"
// context 
import { useBetPool } from "../../context/BetPoolContext";
import {useRules} from "../../context/RulesContext";
import {useWinners} from "../../context/WinnerContex";
import {useResults} from "../../context/ResultsContext";
// icons 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faCirclePlus, faDownload } from "@fortawesome/free-solid-svg-icons";
// components
import Logo from "../../components/logo/Logo";
import { useNavigate } from "react-router-dom";
//utils
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf"; // Importar jsPDF para gerar o PDF
import  { getBets } from "./ReportData";
import {getUsers} from "./ReportData";

const Reports = () => {
    const navigate = useNavigate();
    const { winners } = useWinners();
    const { sorteios } = useResults();
    console.log(sorteios);

    const { rules } = useRules();
    const {jogos, jogoId, setJogoId, loading} = useBetPool();

    const [userREport, setUserReport] = useState([]);


    const isSameDay = (date1, date2) => {
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    };

    const jogo = jogos.find((jogo) => jogo?.id === jogoId );
    const rule = rules.find(rule => rule.jogo_id === jogoId);


    const captureReport = async () => {
        const modal = document.getElementById('relatorio');
    
        setTimeout(() => {
            html2canvas(modal, { scale: 3 }).then((canvas) => {
                canvas.toBlob(async (blob) => {
                    const imgData = await blobToBase64(blob);
                    const imgWidth = 290; // Largura no PDF
                    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Mantém a proporção
    
                    const pdf = new jsPDF('p', 'mm', [294, 397]);
                    let yPosition = 10; // Posição inicial
                    const pageHeight = 397 - 20; // Considerando margem
    
                    let currentY = 0; // Posição atual de corte da imagem
                    while (currentY < canvas.height) {
                        const sectionCanvas = document.createElement('canvas');
                        const ctx = sectionCanvas.getContext('2d');
    
                        sectionCanvas.width = canvas.width;
                        sectionCanvas.height = Math.min(canvas.height - currentY, pageHeight * (canvas.width / imgWidth));
    
                        ctx.drawImage(canvas, 0, currentY, sectionCanvas.width, sectionCanvas.height, 0, 0, sectionCanvas.width, sectionCanvas.height);
    
                        const sectionImg = sectionCanvas.toDataURL('image/png');
    
                        pdf.addImage(sectionImg, 'PNG', 2, yPosition, imgWidth, (sectionCanvas.height * imgWidth) / sectionCanvas.width);
    
                        currentY += sectionCanvas.height;
                        if (currentY < canvas.height) {
                            pdf.addPage();
                            yPosition = 10; // Resetando para nova página
                        }
                    }
    
                    // Salva o PDF
                    const pdfBlob = pdf.output('blob');
                    const pdfFile = new File([pdfBlob], "relatorio.pdf", { type: 'application/pdf' });
    
                    // Link para download
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(pdfBlob);
                    link.download = 'relatorio.pdf';
                    link.click();
    
                    // Compartilhamento de arquivo (se suportado)
                    if (navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
                        try {
                            await navigator.share({
                                files: [pdfFile],
                                title: "Relatório",
                                text: "Veja esse relatório!",
                            });
                        } catch (error) {
                            console.error("Erro ao compartilhar:", error);
                        }
                    } else {
                        console.log("Navegador não suporta compartilhamento de arquivos.");
                    }
                });
            }).catch((error) => {
                console.error("Erro ao capturar o modal:", error);
            });
        }, 300);
    };
    
    
    
    // Função para converter o Blob da imagem em base64
    const blobToBase64 = (blob) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    };

    useEffect(() => {
        const hendleBets = async () => {
            const getAllBets = await getBets(jogoId);
            const getAllUsers = await getUsers();

            const userReports = [];
            const userMap = new Map(getAllUsers.map(u => [u.id, u])); // Mapeia usuários por ID
            console.log(userMap);
            
            getAllBets.forEach(bt => {
                console.log("bt", bt);
                const user = userMap.get(bt.user_id);
            
                if (user) {
                    const newUserReport = {
                        ...user,
                        ticket: bt.ticket,
                        paymentStatus: bt.paymentStatus,
                        created: bt.created,
                        numbers: bt.numbers
                    };
            
                    // Só adiciona se ainda não existir no array
                    if (!userReports.some(u => u.id === newUserReport.id && u.ticket === newUserReport.ticket)) {
                        userReports.push(newUserReport);
                    }
                }
            });
            
            // Atualiza o estado de uma vez só
            setUserReport(userReports);
            console.log("envestigar", userReports);
            
        }

        hendleBets();
    }, [jogoId]);

    return (
        <Container_reports>
            <section className="container_cards" >
                {jogos.map((jogo) => (
                    <Container_card key={jogo.id}>
                        <div className="container">
                            <div className="container_top">
                                {jogo.isAcumuled && <h4  className="acumulado_text">Acumulado</h4>}
                                {jogo.status === "Pausado" && <h4 style={{backgroundColor: "#AF0000", color: "white"}}  className="acumulado_text">Finalizado !</h4>}
                                <div className="container_text">
                                    <h5>Premiação Estimada</h5>
                                    <h3>{jogo.award.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
                                    <p>{jogo.title}</p>
                                    <p className="description">{jogo.description}</p>
                                    <span className="primeio">{jogo.prizeQuantity} Prêmiação</span>
                                </div>
                                <FontAwesomeIcon icon={faDollarSign} className="icon" />
                            </div>
                            <div
                                // ref={elementRef}
                                className="container_bottom"
                                style={{ backgroundColor: jogo.color}}
                                onClick={() => {setJogoId(jogo.id), localStorage.setItem("jogoId", jogo.id)}} //getHeight()
                            >
                                {isSameDay(new Date(), new Date(jogo.drawDate.seconds * 1000)) && (
                                    jogo.status === "Pausado" && " " || <span>Hoje</span>
                                )}
                                <p>Ver Relatório</p>
                                <FontAwesomeIcon icon={faCirclePlus} />
                            </div>
                        </div>
                    </Container_card>
                ))}
            </section>
            <section className="report-container" id={"relatorio"}>
                <Report_area>
                    <div className="report-container-header">
                        <div className="logo">
                            <Logo  $width="110px"/>
                            <h2>BOLÃO DO MINEIRO</h2>
                        </div>
                        <div className="report-infos-bet">
                            <h3 style={{ backgroundColor: jogo?.color }}>{ jogo?.title }</h3>
                            <p> <span>{ jogo?.award.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>  EM PRÊMIOS  ➡️ { jogo?.prizeQuantity} PREMIAÇÕES</p>
                        </div>

                        <div className="report-infos-rules">
                            {rule?.rules?.length > 0 ? (
                                rule.rules.map((r, index) => (
                                    <div key={index} className="rule-card">
                                        <h3>PRÊMIO: {r?.pts} DEZENAS</h3>
                                        <p>Ganha ao Acertar {r?.pts} Dezenas.</p>
                                        {r?.prizeDraw === null ? (
                                            <p className="validate">Válido em Todos os Sorteios</p>
                                        ) : (
                                            <p className="validate">Válido no {r?.prizeDraw}º Sorteio</p>
                                        )}
                                        <p>{r?.money?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                        <p style={{ backgroundColor: jogo?.color }} className="btn-winners">
                                            Ver Ganhadores
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <div className="rule-not">
                                    <h3>Nenhum Prêmio Cadastrado</h3>
                                    <button
                                        onClick={() => { navigate("/createBetPool") }}
                                    >
                                        Cadastrar
                                    </button>
                                </div>
                            )}
                        </div>
                        
                        <section className="report-results">
                            { sorteios.length > 0 ? (
                                    sorteios.map((sorteio, index) => (
                                        <div className="result_box" key={index}>
                                            <div className="result_box_header">
                                                <h3>{sorteio.prizeDraw}º Sorteio</h3>
                                                <p>{new Date(sorteio.drawDate.seconds * 1000).toLocaleString()} - {sorteio.extraction}</p>
                                            </div>
                                            <div className="container_balls">
                                                {
                                                    sorteio.balls.map((ball, index) => (
                                                        <span 
                                                            key={index}
                                                            className="ball"
                                                        >
                                                            {ball}
                                                        </span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    rule?.rules?.length > 0 &&
                                    <p>Nenhum Resultado Encontrado</p>
                                )
                            }
                        </section>

                        <div className="report-container-footer">
                            <div className="participante-title" style={{ backgroundColor: jogo?.color }}>
                                <h3>TABELA DE PARTICIPANTES</h3>
                            </div>
                            <div className="participante-list-header">
                                <ul>
                                    <li>Número do Bilhete</li>
                                    <li>Apostador</li>
                                    <li>Cidade</li>
                                    <li>Dezenas</li>
                                    <li>Acertos</li>
                                    <li>Data da Compra</li>
                                    <li>Status</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Report_area>
                <div className="participante-list">
                    { userREport.length > 0 ? (
                            userREport.map((report, index) => (
                                <ul key={index}>
                                    <li>{report.ticket}</li>
                                    <li>{report.name.split(" ").slice(0, 2).join(" ")} ...</li>
                                    <li>{report.city} - {report.state}</li>
                                    <li className="numbers">
                                        {report.numbers.map((number, index) => 
                                            <span className="ball" key={index} 
                                                style={{ 
                                                    backgroundColor: sorteios.map(sorteio => sorteio.balls).flat().includes(number) ? "#AB0519" : "#fff", 
                                                    color: sorteios.map(sorteio => sorteio.balls).flat().includes(number) ? "#fff" : "#000", 
                                                }}
                                            >
                                                {number}
                                            </span>
                                        )}
                                    </li>
                                    <li className="acertos">
                                        {
                                            report.numbers.reduce((totalAcertos, number) => {
                                                const acertos = sorteios
                                                    .map(sorteio => sorteio.balls)
                                                    .flat()
                                                    .filter(ball => ball === number)
                                                    .length; // Conta quantas vezes o número aparece
                                                
                                                return totalAcertos + acertos; // Soma os acertos ao total
                                            }, 0) // Inicializa com 0
                                        }
                                    </li>
                                    <li>{new Date(report?.created?.seconds * 1000).toLocaleString()}</li>
                                    <li className="paid">Pago</li>
                                </ul>
                            ))
                        ) : (
                            rule?.rules?.length > 0 &&
                            <p>Nenhum Resultado Encontrado</p>
                        )
                    }
                </div>
            </section>
            <div 
                className="btn_download" 
                onClick={() => captureReport()}
            >
                <FontAwesomeIcon icon={faDownload} className="icon" />
                <p>Baixar Relatório</p>
            </div>
        </Container_reports>
    )
}

export default Reports;
