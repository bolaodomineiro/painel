import { useState, useEffect, useRef } from "react";
import { Container_home, Contests_style, Container_card } from "./HomeStyles";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Loading from "../../assets/loading.webp";// gif
import {Link, Outlet, useLocation} from "react-router-dom";
//context
import {useResults} from "../../context/ResultsContext";
import { useBetPool } from "../../context/BetPoolContext";
// hooks
import useScroll from "../../hooks/Scroll";

const Home = () => {

    const elementRef = useRef(null);

    const { load, setLoad } = useResults();
    const {jogos, jogoId, setJogoId, loading} = useBetPool();
    const { hendleScroll } = useScroll();
    const location = useLocation();
    const [active, setActive] = useState("myBest");
    const [jogoFiltrado, setJogoFiltrado] = useState([]);

    useEffect(() => {
        console.log("atualizando... toda aplicação em Home");
        if (!jogoId) return console.log("jogoId is undefined, pagina home");
        localStorage.setItem("jogoId", jogoId);
        const jogo = jogos.find((jogo) => jogo?.id === jogoId );
        setJogoFiltrado(jogo);
        setLoad(!load);
    },[jogos, jogoId, setJogoId]);

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
                case "/dashboard/winnersBets":
                    setActive("/dashboard/winnersBets");
                    break;
            case "users":
                setActive("Usuários");
                break;
            default:
                setActive("");
                break;
        }
    }, [location.pathname, setActive]);


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

    if(jogos.length === 0) return  <section style={{width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}><p>Não existem jogos cadastrados</p></section>

    const getHeight = () => {
        if (elementRef.current) {
            hendleScroll(elementRef.current.offsetTop);
        }
    };

     // Função para comparar datas, ignorando hora, minuto e segundo e mostrar se o bolao hoje
    const isSameDay = (date1, date2) => {
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    };
    
    return (
        <Container_home >
            <section className="container_cards" >
                {jogos.map((jogo) => (
                    <Container_card key={jogo.id}>
                        <div className="container">
                            <div className="container_top">
                                {jogo.isAcumuled && <h4  className="acumulado_text">Acumulado</h4>}
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
                                onClick={() => {setJogoId(jogo.id), localStorage.setItem("jogoId", jogo.id), getHeight();}}
                            >
                                {isSameDay(new Date(), new Date(jogo.drawDate.seconds * 1000)) && (
                                    <span>Hoje</span>
                                )}
                                <p>Faça sua aposta!</p>
                                <FontAwesomeIcon icon={faCirclePlus} />
                            </div>
                        </div>
                    </Container_card>
                ))}
            </section>
            <Contests_style style={{backgroundColor: jogoFiltrado?.color}}>
                <section className="header_contests" >
                    <div className="header_infor">
                        <span>{jogoFiltrado?.price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        <h2  className="title">
                            {jogoFiltrado?.title || "Bolão"}
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
                            <Link style={{pointerEvents: jogoFiltrado?.status === "Pausado" ? "none" : "auto", opacity: jogoFiltrado?.status === "Pausado" ? 0.7 : 1 }} className="link" to="/dashboard/jogo">
                                <li 
                                    style={{
                                        backgroundColor: jogoFiltrado?.status === "Pausado" ? "#ab0519" : "green",
                                        color: "#ffff"
                                    }}
                                >
                                    {jogoFiltrado?.status === "Pausado" ? "Apostas Encerradas":  "Apostar"}
                                </li>
                            </Link>
                            <Link to="/dashboard/myBets" className="link">
                                <li className={active === "/dashboard/myBets" ? "active" : ""}>Meus Jogos</li>
                            </Link>
                            <Link to="/dashboard/resultsBets" className="link">
                                <li className={active === "/dashboard/resultsBets" ? "active" : ""}>Resultados</li>
                            </Link>
                            <Link to="/dashboard/winnersBets" className="link">
                                <li className={active === "/dashboard/winnersBets" ? "active" : ""}>Ganhadores</li>
                            </Link>
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