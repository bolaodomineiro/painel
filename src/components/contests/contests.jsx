import { Contests_style } from "./contestsStyle";

const Contests = () => {
  return (
    <Contests_style>
      <div className="deals">
        <div className="card">
          <p>BOLÃO DE SÁBADO</p>
          <p>Todo Sábado, começa às 21h</p>
          <hr />
          <p>R$ 200.000,00 MIL</p>
          <p>6 prêmios</p>
          <hr />
          <a href="#">APOSTE AGORA</a>
        </div>

        <div className="card">
          <p>BOLÃO DE SEGUNDA</p>
          <p>Todo Segunda, começa às 21h</p>
          <hr />
          <p>R$ 45.000,00 MIL</p>
          <p>5 prêmios</p>
          <hr />
          <a href="#">APOSTE AGORA</a>
        </div>

        <div className="card">
          <p>BOLÃO DE QUARTA</p>
          <p>Todo Quarta, começa às 21h</p>
          <hr />
          <p>R$ 86.800,00 MIL</p>
          <p>5 prêmios</p>
          <hr />
          <a href="#">APOSTE AGORA</a>
        </div>
      </div>
    </Contests_style>
  );
};

export default Contests;