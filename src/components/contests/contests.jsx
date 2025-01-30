import { Contests_style } from "./contestsStyle";

const Contests = () => {
  return (
    <Contests_style>
      <div className="deals">
        <div className="card">
          <h2>BOLÃO DE SÁBADO</h2>
          <p className="details">Todo Sábado, começa às 21h</p>
          <hr />
          <p className="details prize">R$ 200.000,00 MIL</p>
          <p className="details">6 prêmios</p>

          <div className="button">
            <a href="#">APOSTE AGORA</a>
          </div>
        </div>

        <div className="card">
          <h2>BOLÃO DE SEGUNDA</h2>
          <p className="details">Todo Segunda, começa às 21h</p>
          <hr />
          <p className="details prize">R$ 45.000,00 MIL</p>
          <p className="details">5 prêmios</p>

          <div className="button">
            <a href="#">APOSTE AGORA</a>
          </div>
        </div>

        <div className="card">
          <h2>BOLÃO DE QUARTA</h2>
          <p className="details">Todo Quarta, começa às 21h</p>
          <hr />
          <p className="details prize">R$ 86.800,00 MIL</p>
          <p className="details">5 prêmios</p>

          <div className="button">
            <a href="#">APOSTE AGORA</a>
          </div>

        </div>
      </div>
    </Contests_style>
  );
};

export default Contests;