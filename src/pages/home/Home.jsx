import { Container_home } from "./HomeStyles"
import { faAward, faChartLine, faCirclePlus, faClover, faUser, faDollarSign } from "@fortawesome/free-solid-svg-icons"
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
                <MetricCard 
                    icon={faCirclePlus} 
                    image={faDollarSign} 
                    title="Saldo Total" 
                    value="$ 40000,00" 
                    color="#343434" 
                />
            </section>
            <div className="infor_area">
                <img src="./src/assets/logo.png" alt="logo" />
                <h1>Bem-vindo ao Painel, Bolão do Mineiro!</h1>
                <p>Aqui você encontra tudo o que precisa para acompanhar e gerenciar seu bolão de forma fácil e prático.</p>
            </div>
        </Container_home>
    )
}

export default Home