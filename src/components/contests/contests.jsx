import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Contests_style } from "./contestsStyle";
import Btn from "../btn/Btn";

const Contests = () => {
  const [jogos, setJogos] = useState([]);
  const [limite, setLimite] = useState(6);

  async function getJogos() {
    const jogosCollection = collection(db, "jogos");
    const jogosSnapshot = await getDocs(jogosCollection);
    const jogosList = jogosSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setJogos(jogosList);
    console.log(jogosList);
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
      <section className='header_contests'>
        <div className='header_infor'>
          <h2 className='title'>Bolão de Sábado</h2>
        </div>
        <select className='select' name="" id="">
          <option value="">Conc: 00 - Sa, 01/FER/2025</option>
          <option value="">Conc: 00 - Sa, 01/FEF/2025</option>
          <option value="">Conc: 00 - Sa, 01/FER/2025</option>
          <option value="">Conc: 00 - Sa, 01/FER/2025</option>
        </select>
      </section>
      <section className='menu'>
        <nav>
          <ul>
            <li style={{ backgroundColor: 'green', color: '#fff' }}>Apostar</li>
            <li>Meus Jogos</li>
            <li>Resultados</li>
            <li>Ganhadores</li>
            <li>Prêmios</li>
            <li>Como Jogar</li>
          </ul>
        </nav>
      </section>
      {/* <div className="deals">
        {jogos.slice(0, limite).map((jogo) => (
          <div className="card" key={jogo.id}>
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
      </div> */}
     
    </Contests_style>
  );
};

export default Contests;