import { Container_bilhete } from "./BilheteStyles";
import Logo from "../logo/Logo";
import Qr from "../../assets/qr.png";
import { useBetPool } from "../../context/BetPoolContext";
import { useAuthContext } from "../../context/AuthContext";

const Bilhete = ({ id, apostaItem }) => {
  const { user } = useAuthContext();
  const { jogos, jogoId } = useBetPool();
  const getJogoItem = jogos.find(
    (jogo) =>
      jogo.id === apostaItem?.jogo_id && apostaItem?.paymentStatus === "Pago"
  );

  return (
    <Container_bilhete id={id}>
      <section className="bilhete-header">
        <div className="logo">
          <Logo $width="50px" />
        </div>
        <h2>Bolão do Mineiro</h2>
      </section>
      <section className="bilhete-infos">
        {getJogoItem && (
          <div>
            <h3>{getJogoItem.title}</h3>
            <h5>Via do cliente - Bilhete Online</h5>
            <div
              className="bilhete-prize"
              style={{ backgroundColor: getJogoItem?.color }}
            >
              <p>
                <b>Prêmio Estimado</b>
              </p>
              <p>
                {getJogoItem.award?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
                Mil Reais | {getJogoItem.prizeQuantity} PRÊMIOS
              </p>
            </div>
            <div className="bilhete-rules">
              <h3>Regras de Pontuação</h3>
              <ul>
                {getJogoItem.rules?.length > 0 ? (
                  getJogoItem.rules.map((regra, index) => (
                    <li key={index}>
                      <span>
                        <b>{regra?.pts}</b> Pontos -------→{" "}
                      </span>
                      {regra.isValue && regra?.isValue > 0
                        ? regra.isValue.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })
                        : "Não Definido"}
                    </li>
                  ))
                ) : (
                  <p>Regras não Definidas</p>
                )}
              </ul>
            </div>
            <div className="bilhete-concurso">
              <div>
                <h4>Concurso</h4>
                <p>{getJogoItem?.ticket}</p>
              </div>
              <div>
                <h4>Data do Sorteio</h4>
                <p>
                  {new Date(
                    getJogoItem.drawDate.seconds * 1000
                  ).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        )}
        <section className="bilhete-userData">
          <p>
            <b>Nome:</b> {user?.name}
          </p>
          <p>
            <b>CPF:</b> {user?.CPF || "Sem CPF"}
          </p>
          <p>
            <b>Telefone:</b> {user?.phone}
          </p>
          <p>
            <b>Cidade:</b> {user?.city} - {user?.state}
          </p>
        </section>
      </section>
      <section className="bilhete-bets">
        {apostaItem && (
          <div>
            <div className="bilhete-betsHeader">
              <p>Pago</p>
            </div>
            <ol className="bilhete-jogos">
              <div className="bilhete-jogo-container">
                <div className="bilhete-jogo-Header">
                  <p>
                    <b>Bilhete:</b> {apostaItem?.ticket}
                  </p>
                  <span>
                    <b></b>
                    {apostaItem.price?.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
                <li className="bilhete-jogo">
                  {apostaItem.numbers
                    ?.sort((a, b) => a - b)
                    .map((ball, index) => (
                      <span className="ball" key={index}>
                        {ball}
                      </span>
                    ))}
                </li>
              </div>
            </ol>
            <div className="bilhete-total-price">
              <h4>
                Total:{" "}
                {apostaItem.price?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h4>
            </div>
          </div>
        )}
      </section>

      <section className="bilhete-footer">
        <div className="bilhete-footer-header">
          <h4>Você estar participando de varios Sorteios</h4>
          <p>Confira seus bilhetes</p>
        </div>
        <div className="bilhete-footer-qr">
          <img src={Qr} alt="qr" />
          <p>Escaneie o QR CODE, e veja seus bilhetes Online</p>
        </div>
        <div className="bilhete-footer-info">
          <h4>Boa Sorte !</h4>
          <h5>Equipe Bolão do Mineiro</h5>
          <div className="bilhete-footer-contact">
            <p>
              <b>Site:</b> www.bolaodomineiro.com.br
            </p>
            <p>
              {" "}
              <b>Instagram:</b> @bolaodomineiro
            </p>
            <p>
              <b>Atendimento:</b> (35)99231-5263
            </p>
          </div>
        </div>
        <p
          className="bilhete-footer-copyright"
          style={{ backgroundColor: getJogoItem?.color }}
        >
          Há anos realizando Sonhos!
        </p>
      </section>
    </Container_bilhete>
  );
};

export default Bilhete;
