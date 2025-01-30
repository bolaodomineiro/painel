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
            <p className="details">{jogo.data || 'Data do Sorteio'}</p>
            <hr />
            <p className="details prize">{jogo.cotas || 'Cotas não disponíveis'}</p>
            <p className="details">{jogo.description || 'Descrição não disponível'}</p>

            <div className="button">
              <a href="#">APOSTE AGORA</a>
            </div>

            <span>{jogo.price || 'Preço não disponível'}</span>
          </div>
        ))}
      </div>
    </Contests_style>
  );
};

export default Contests;