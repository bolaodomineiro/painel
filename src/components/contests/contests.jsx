import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Contests_style } from "./contestsStyle";

const Contests = () => {
  const [jogos, setJogos] = useState([]);
  const [limite, setLimite] = useState(6);

  async function getJogos() {
    const jogosCollection = collection(db, "jogos");
    const jogosSnapshot = await getDocs(jogosCollection);
    const jogosList = jogosSnapshot.docs.map(doc => doc.data());
    setJogos(jogosList);
  }

  useEffect(() => {
    getJogos();
  }, []);

  const handleSetLimit = () => {
    if (limite >= jogos.length) {
      setLimite(jogos.length);
      return
    }
    setLimite(limite + 3);
  };

  return (
    <Contests_style>
      <div className="deals">

        {jogos.slice(0, limite).map((jogo, index) => (
          <div className="card">
            <h2>{jogo.title || 'Nome do Jogo'} </h2>
            <p className="details">Todo Sábado, começa às 21h</p>
            <hr />
            <p className="details prize">R$ 200.000,00 MIL</p>
            <p className="details">6 prêmios</p>

            <div className="button">
              <a href="#">APOSTE AGORA</a>
            </div>

            <span>Apenas R$ 5,00</span>
          </div>
        ))}

        <div className="card">
          <h2>BOLÃO DE SEGUNDA</h2>
          <p className="details">Todo Segunda, começa às 21h</p>
          <hr />
          <p className="details prize">R$ 45.000,00 MIL</p>
          <p className="details">5 prêmios</p>

          <div className="button">
            <a href="#">APOSTE AGORA</a>
          </div>

          <span>Apenas R$ 5,00</span>
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

          <span>Apenas R$ 5,00</span>
        </div>
      </div>
    </Contests_style>
  );
};

export default Contests;