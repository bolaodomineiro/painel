import { Container_home } from "./HomeStyles"
import { faCirclePlus, faDollarSign } from "@fortawesome/free-solid-svg-icons"
import MetricCard from "../../components/cards/card_dashboard/MetricCard"
import Contests from "../../components/contests/contests"

const Home = () => {
    return (
        <Container_home>
            <section className="container_cards">
                <MetricCard
                    icon={faCirclePlus}
                    image={faDollarSign}
                    title="Segunda"
                    value="R$ 25 MIL"
                    color="#F39C11"
                />
                <MetricCard
                    icon={faCirclePlus}
                    image={faDollarSign}
                    title="Quarta"
                    value="R$ 76 MIL"
                    color="#00C0EF"
                />
                <MetricCard
                    icon={faCirclePlus}
                    image={faDollarSign}
                    title="Sexta"
                    value="R$ 58 MIL"
                    color="#1045A7"
                />
                <MetricCard
                    icon={faCirclePlus}
                    image={faDollarSign}
                    title="Sábado"
                    value="R$ 112 MIL"
                    color="#AB0519"
                    flip="both"
                />
                <MetricCard
                    icon={faCirclePlus}
                    image={faDollarSign}
                    title="Sábado (Federal)"
                    value="R$ 126 MIL"
                    color="#00A65A"
                />
            </section>


            <Contests />


        </Container_home>
    )
}

export default Home