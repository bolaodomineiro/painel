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
        // Seleciona o modal pelo ID (alterar o ID 'relatorio' conforme necessário)
        const modal = document.getElementById('relatorio');
    
        // Captura a imagem do modal com html2canvas
        setTimeout(() => {
            html2canvas(modal).then((canvas) => {
                // Converte o canvas para um Blob (arquivo real de imagem)
                canvas.toBlob(async (blob) => {
                    const file = new File([blob], "screenshot.png", { type: "image/png" });
    
                    // Cria uma instância do jsPDF
                    const doc = new jsPDF('p', 'mm', [210, 297]);
    
                    // Adiciona a imagem capturada no topo do PDF
                    const imgData = await blobToBase64(blob);
                    doc.addImage(imgData, 'PNG', 2, 10, 207, 120, null, 'FAST'); // Ajuste as dimensões conforme necessário
    
                    let yOffset = 135; // Começa abaixo da image
    
                    // Adiciona a lista de participantes com estilo zebra
                    userREport.forEach((report, index) => {
                        const isZebra = index % 2 === 0; // Estilo zebra (alternar cores de fundo)
    
                        doc.setFillColor(isZebra ? 240 : 255, 240, 245); // Cor de fundo alternada
                        doc.rect(2, yOffset - 5, 207, 10, 'F'); // Desenha o fundo colorido da linha
                        
                        doc.setFont("helvetica", "bold"); // Define a fonte como Helvetica e estilo bold
                        doc.setFontSize(10);
                        doc.setTextColor(0, 0, 0); // Cor do texto
    
                        doc.text(report.ticket, 12, yOffset);
                        doc.text(report.name.split(" ").slice(0, 2).join(" ") + ' ...', 48, yOffset);
                        doc.text(`${report.city} - ${report.state}`, 93, yOffset);
                        doc.text(new Date(report?.created?.seconds * 1000).toLocaleString(), 130, yOffset);
                        doc.setTextColor(0, 128, 0); 
                        doc.text('Pago', 184, yOffset);
    
                        yOffset += 10; // Avança para a próxima linha
                    });
    
                    // Salva o PDF
                    const pdfBlob = doc.output('blob');
                    const pdfFile = new File([pdfBlob], "relatorio.pdf", { type: 'application/pdf' });
    
                    // Cria o link para download
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(pdfBlob);
                    link.download = 'relatorio.pdf';
                    link.click();
    
                    // Verifica se o navegador suporta o compartilhamento de arquivos
                    if (navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
                        try {
                            // Tenta compartilhar o arquivo de PDF
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
                const user = userMap.get(bt.user_id);
            
                if (user) {
                    const newUserReport = {
                        ...user,
                        ticket: bt.ticket,
                        paymentStatus: bt.paymentStatus,
                        created: bt.created,
                    };
            
                    // Só adiciona se ainda não existir no array
                    if (!userReports.some(u => u.id === newUserReport.id && u.ticket === newUserReport.ticket)) {
                        userReports.push(newUserReport);
                    }
                }
            });
            
            // Atualiza o estado de uma vez só
            setUserReport(userReports);
            
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
            <Report_area id={"relatorio"}>
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
