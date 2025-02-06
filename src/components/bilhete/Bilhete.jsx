import { Container_bilhete } from "./BilheteStyles"
import  Logo from "../logo/Logo"
import Qr from "../../assets/qr.png"

const Bilhete = ({id}) => {

    const jogos = [
        [10, 23, 32, 42, 52, 62, 24, 87, 90, 2],
        [10, 23, 32, 42, 52, 62, 24, 87, 90, 2],
        [10, 23, 32, 42, 52, 62, 24, 87, 90, 2],
        [10, 23, 32, 42, 52, 62, 24, 87, 90, 2],
    ]

    return (
        <Container_bilhete id={id}>
            <section className="bilhete-header">
                <div className="logo">
                    <Logo  $width="50px"/>
                </div>
                <h2>Bolão do Mineiro</h2>
            </section>
            <section className="bilhete-infos">
                <h3>Bolão de Quarta</h3>
                <h5>Via do cliente - Bilhete Online</h5>
                <div className="bilhete-prize">
                    <p><b>Prêmio Estinado</b></p>
                    <p> R$ 50.000,00 Mil Reais | 6 PRÊMIOS</p>
                </div>
                <div className="bilhete-rules">
                    <p> <b>Regras do Prêmio </b>
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
                <section className="bilhete-userData">
                    <p><b>Nome:</b> Fulano de Tal</p>
                    <p><b>CPF:</b> 123.456.789-00</p>
                    <p><b>Telefone:</b> (99) 99999-9999</p>
                    <p><b>Cidade:</b> Saquarema</p>
                </section>
            </section>
            <section className="bilhete-bets">
                <div className="bilhete-betsHeader">
                    <h4>4 JOGOS</h4>
                    <p>Pago</p>
                </div>
                <ol className="bilhete-jogos" >
                    {
                        jogos.map((jogo, index) => (
                            <div className="bilhete-jogo-container">
                                <div className="bilhete-jogo-Header">
                                    <p><b>Bilhete:</b> 1234</p>
                                    <span><b>R$ </b>0,00</span>
                                </div>
                                <li className="bilhete-jogo" key={index}>
                                    <span><b>{index + 1}</b></span>
                                    {
                                        jogo.map((ball, index) => (
                                            <span className="ball" key={index}>{ball}</span>
                                        ))
                                    }
                                </li>
                            </div>
                        ))
                    }
                </ol>
                <div className="bilhete-total-price">
                    <h4>Total: R$ 0,00</h4>
                </div>
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
