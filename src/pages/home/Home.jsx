import { Container_home } from "./HomeStyles"
import { faAward, faChartLine, faCirclePlus, faClover, faUser } from "@fortawesome/free-solid-svg-icons"
// components
import MetricCard from "../../components/cards/card_dashboard/MetricCard"

const Home = () => {
    return (
        <Container_home>
            <section className="container_cards">
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
                    image={faAward} 
                    title="Total de Ganhadores" 
                    value="10" 
                    color="#1045A7" 
                />
                <MetricCard 
                    icon={faCirclePlus} 
                    image={faChartLine} 
                    title="Saida  Hoje" 
                    value="$ 2000,00" 
                    color="#AB0519" 
                    flip="both" 
                />
                <MetricCard 
                    icon={faCirclePlus} 
                    image={faChartLine} 
                    title="Entrada  Hoje" 
                    value="$ 2000" 
                    color="#00A65A" 
                />
            </section>
        </Container_home>
    )
}

export default Home