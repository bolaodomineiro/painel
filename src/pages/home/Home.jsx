import { useState, useEffect } from "react";
import { Container_home, Contests_style, Container_card } from "./HomeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Loading from "../../assets/loading.webp";
import {Link, Outlet} from "react-router-dom";

// db firebase / jogos
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
    const [jogos, setJogos] = useState([]);
    const [jogoId, setJogoId] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getJogos = async () => {
            try {
                const jogosCollection = collection(db, "jogos");
                const jogosSnapshot = await getDocs(jogosCollection);
                const jogosList = jogosSnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                
                if (jogosList.length > 0) {
                    setJogos(jogosList);
                    setJogoId(jogosList[0].id);
                }
            } catch (error) {
                console.error("Erro ao buscar jogos:", error);
            } finally {
                setLoading(false);
            }
        };

        getJogos();
    }, []);

    const jogo = jogos.find((jogo) => jogo.id === jogoId);

    if (loading) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                fontSize: "24px",
                fontWeight: "bold"
            }}>
                <img  style={{ width: "60px", height: "60px" }} src={Loading} alt="loading" />
            </div>
        );
    }

    return (
        <Container_home>
            <section className="container_cards">
                {jogos.map((jogo) => (
                    <Container_card key={jogo.id}>
                        <div className="container">
                            <div className="container_top">
                                <h4 className="acumulado_text">Acumulado</h4>
                                <div className="container_text">
                                    <h5>Premiação Estimada</h5>
                                    <h3>{jogo.award.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
                                    <p>{jogo.title}</p>
                                    <p className="description">{jogo.description}</p>
                                    <span className="primeio">{jogo.prizeQuantity} Premiações</span>
                                </div>
                                <FontAwesomeIcon icon={faDollarSign} className="icon" />
                            </div>
                            <div
                                className="container_bottom"
                                style={{ backgroundColor: jogo.color }}
                                onClick={() => setJogoId(jogo.id)}
                            >
                                <p>Faça sua aposta!</p>
                                <FontAwesomeIcon icon={faCirclePlus} />
                            </div>
                        </div>
                    </Container_card>
                ))}
            </section>
            <Contests_style>
                <section className="header_contests">
                    <div className="header_infor">
                        <h2 style={{ backgroundColor: jogo?.color }} className="title">
                            {jogo?.title || "Bolão"}
                        </h2>
                    </div>
                    <div>
                        <p>Concursos</p>
                        <select className="select">
                            <option value="">Conc: 00 - Sa, 01/FER/2025</option>
                            <option value="">Conc: 00 - Sa, 01/FEF/2025</option>
                            <option value="">Conc: 00 - Sa, 01/FER/2025</option>
                            <option value="">Conc: 00 - Sa, 01/FER/2025</option>
                        </select>
                    </div>
                </section>
                <section className="menu">
                    <nav>
                        <ul>
                            <Link style={{ pointerEvents: jogo?.status ? "auto" : "none", opacity: jogo?.status ? 1 : 0.7 }} className="link" to="/dashboard/jogo">
                                <li 
                                    style={{
                                        backgroundColor: jogo?.status ? "green" : "#ab0519",
                                        color: "#fff"
                                    }}
                                >
                                    {jogo?.status ? "Apostar" : "Apostas Encerradas"}
                                </li>
                            </Link>
                            <li>Meus Jogos</li>
                            <li>Resultados</li>
                            <li>Ganhadores</li>
                            <li>Prêmios</li>
                            <li>Como Jogar</li>
                        </ul>
                    </nav>
                </section>
                <section className="routes_contests">
                    <Outlet />
                </section>
            </Contests_style>
        </Container_home>
    );
};

export default Home;
