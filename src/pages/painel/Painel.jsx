import React, { useState } from "react";
import { Container } from "./PainelStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCirclePlus, faClover, faUser, faChartLine } from "@fortawesome/free-solid-svg-icons"; // icones
//components
import Menu from "../../components/menu/Menu"
import MetricCard from "../../components/cards/card_dashboard/MetricCard";


const Painel = () => {

    const [menuToggle, setMenuToggle] = useState(false)

    return (
        <Container>
            <Menu 
                menuToggle={menuToggle} 
            />
            <section className="content">
                <header>
                    <FontAwesomeIcon 
                        className="icon" 
                        icon={faBars} 
                        onClick={() => {setMenuToggle(!menuToggle), console.log(menuToggle)}}
                    />
                </header>
                <section className="container_cards">
                    <div className="area_cards">
                        <MetricCard 
                            icon={faCirclePlus} 
                            image={faClover} 
                            title="Apostas Hoje" 
                            value="2000" 
                            color="#F39C11" 
                        />
                        <MetricCard 
                            icon={faCirclePlus} 
                            image={faUser} 
                            title="Total de Usuáriostas" 
                            value="10000" 
                            color="#00C0EF" 
                        />
                        <MetricCard 
                            icon={faCirclePlus} 
                            image={faChartLine} 
                            title="Saida  Hoje" 
                            value="2000,00" 
                            color="#AB0519" 
                            flip="both" 
                        />
                        <MetricCard 
                            icon={faCirclePlus} 
                            image={faChartLine} 
                            title="Entrada  Hoje" 
                            value="2000" 
                            color="#00A65A" 
                        />
                    </div>
                </section>

            </section>
        </Container>
    )
}

export default Painel