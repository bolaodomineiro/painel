import { Container_home } from "./HomeStyles"
import { faAward, faChartLine, faCirclePlus, faClover, faUser, faDollarSign } from "@fortawesome/free-solid-svg-icons"
// components
import MetricCard from "../../components/cards/card_dashboard/MetricCard"
import BarChart from "../../components/ui/MyChart/barChart/BarChart"

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
                    title="Total de Usuários"
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
                    title="Saida Hoje"
                    value="R$ 2000,00"
                    color="#AB0519"
                    flip="both"
                />
                <MetricCard
                    icon={faCirclePlus}
                    image={faChartLine}
                    title="Entrada Hoje"
                    value="R$ 2000,00"
                    color="#00A65A"
                />
                <MetricCard
                    icon={faCirclePlus}
                    image={faDollarSign}
                    title="Saldo Total"
                    value="R$ 40000,00"
                    color="#343434"
                />
            </section>
            <BarChart />
            {/* <div className="infor_area">
                <img src={Logo} alt="logo" />
                <h1>Bem-vindo ao Painel, Bolão do Mineiro!</h1>
                <p>Aqui você encontra tudo o que precisa para acompanhar e gerenciar seu bolão de forma fácil e prático.</p>
            </div> */}
        </Container_home>
    )
}

export default Home