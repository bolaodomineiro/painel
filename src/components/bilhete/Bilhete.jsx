
import { Container_bilhete } from "./BilheteStyles"
import  Logo from "../logo/Logo"
import Qr from "../../assets/qr.png"
// content
import { useBetPool } from "../../context/BetPoolContext"


const Bilhete = ({id, apostaItem}) => {

    const getUserData = JSON.parse(localStorage.getItem("userData"));


    const { jogos, jogoId } = useBetPool();
    const getJogoItem = jogos.find((jogo) => jogo.id === apostaItem?.jogo_id && apostaItem?.paymentStatus === "Pago");

    return (
        <Container_bilhete id={id}>
            <section className="bilhete-header">
                <div className="logo">
                    <Logo  $width="50px"/>
                </div>
                <h2>Bolão do Mineiro</h2>
            </section>
            <section className="bilhete-infos">
            {getJogoItem && (
                <div>
                    <h3>{getJogoItem.title}</h3>
                    <h5>Via do cliente - Bilhete Online</h5>
                    <div className="bilhete-prize">
                        <p><b>Prêmio Estimado</b></p>
                        <p>
                            {getJogoItem.award?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}  
                            Mil Reais | {getJogoItem.prizeQuantity} PRÊMIOS
                        </p>
                    </div>
                    <div className="bilhete-rules">
                        <p> <b>Regras do Prêmio</b>
                            <br/>
                            10 pontos - R$ 10.000,00
                            <br/>
                            9 pontos - R$ 2.000,00
                            <br/>
                            8 pontos - R$ 1.000,00
                        </p>
                    </div>
                    <div className="bilhete-concurso">
                        <h4>Concurso: 302</h4>
                        <p>Data do Sorteio: 20/05/2023</p>
                    </div>
                </div>
            )}
                <section className="bilhete-userData">
                    <p><b>Nome:</b> {getUserData?.name}</p>
                    <p><b>CPF:</b> {getUserData?.CPF || "Sem CPF"}</p>
                    <p><b>Telefone:</b> {getUserData?.phone}</p>
                    <p><b>Cidade:</b> {getUserData?.city}</p>
                </section>
            </section>
            <section className="bilhete-bets">
                { apostaItem &&
                    <div>
                        <div className="bilhete-betsHeader">
                            <p>Pago</p>
                        </div>
                        <ol className="bilhete-jogos" >
                            <div className="bilhete-jogo-container">
                                <div className="bilhete-jogo-Header">
                                    <p><b>Bilhete:</b> {apostaItem.ticket}</p>
                                    <span><b></b>{apostaItem.price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                                </div>
                                <li className="bilhete-jogo" >
                                    {
                                        apostaItem.numbers?.sort((a, b) => a - b).map((ball, index) => (
                                            <span className="ball" key={index}>{ball}</span>
                                        ))
                                    }
                                </li>
                            </div>
                        </ol>
                        <div className="bilhete-total-price">
                            <h4>Total: {apostaItem.price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
                        </div>
                    </div>
                }
            </section>
            
            <section className="bilhete-footer">
                <div className="bilhete-footer-header">
                    <h4>Você estar participando de varios Sorteios</h4>
                    <p>Confira seus bilhetes</p>
                </div>
                <div className="bilhete-footer-qr">
                    <img src={Qr} alt="" />
                    <p>Escaneie o QR CODE, e veja seus bilhetes Online</p>
                </div>
                <div className="bilhete-footer-info">
                    <h4>Boa Sorte</h4>
                    <h5>Equipe Bolão do Mineiro</h5>
                    <p>Atendimento: (99) 99999-9999</p>
                    <p>Site: www.bolaodomineiro.com.br</p>
                    <p>Instagram: @bolaodomineiro</p>
                </div>
                <p className="bilhete-footer-copyright">Há  anos realizando Sonhos!</p>
            </section>
        </Container_bilhete>
    )
}

export default Bilhete
