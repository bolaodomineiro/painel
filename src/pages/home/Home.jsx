import { useState, useEffect, useRef } from "react";
import { Container_home, Contests_style, Container_card } from "./HomeStyles";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Loading from "../../assets/loading.webp";// gif
import {Link, Outlet, useLocation} from "react-router-dom";
import { useBetPool } from "../../context/BetPoolContext";
// hooks
import useScroll from "../../hooks/Scroll";

const Home = () => {

    const elementRef = useRef(null);
    const {setJogoPrice, jogos, jogoId, setJogoId, loading } = useBetPool();
    const { hendleScroll } = useScroll();
    const location = useLocation();
    const [active, setActive] = useState("myBest");

    useEffect(() => {
        const pathSegments = location.pathname.split('/dashboard/myBets').filter(Boolean);
        const lastSegment = pathSegments[pathSegments.length - 1] || "/dashboard/myBets";
        setActive(lastSegment);
        switch (lastSegment) {
            case "/dashboard/myBets":
                setActive("/dashboard/myBets");
                break;
            case "/dashboard/resultsBets":
                setActive("/dashboard/resultsBets");
                break;
            case "users":
                setActive("Usuários");
                break;
            default:
                setActive("");
                break;
        }
    }, [location.pathname, setActive]);

    const jogo = jogos.find((jogo) => jogo?.id === jogoId);

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

    const getHeight = () => {
        if (elementRef.current) {
            hendleScroll(elementRef.current.offsetTop);
        }
    };

    const hendleJogoId = (id, jogoPrice) => {
        localStorage.setItem("jogoId", id);
        setJogoId(id);
        setJogoPrice(jogoPrice);
    };
    
    return (
        <Container_home >
            <section className="container_cards" >
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
                                ref={elementRef}
                                className="container_bottom"
                                style={{ backgroundColor: jogo.color }}
                                onClick={() => {hendleJogoId(jogo.id, jogo.price); getHeight();}}
                            >
                                <p>Faça sua aposta!</p>
                                <FontAwesomeIcon icon={faCirclePlus} />
                            </div>
                        </div>
                    </Container_card>
                ))}
            </section>
            <Contests_style style={{backgroundColor: jogo?.color}}>
                <section className="header_contests" >
                    <div className="header_infor">
                        <p>{jogo?.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        <h2  className="title">
                            {jogo?.title || "Bolão"}
                        </h2>
                    </div>
                    <div className="header_select">
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
                                        color: "#ffff"
                                    }}
                                >
                                    {jogo?.status ? "Apostar" : "Apostas Encerradas"}
                                </li>
                            </Link>
                            <Link to="/dashboard/myBets" className="link">
                                <li className={active === "/dashboard/myBets" ? "active" : ""}>Meus Jogos</li>
                            </Link>
                            <Link to="/dashboard/resultsBets" className="link">
                                <li className={active === "/dashboard/resultsBets" ? "active" : ""}>Resultados</li>
                            </Link>
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
