import { Container } from "./PainelStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // icones
//components
import Menu from "../../components/menu/Menu"


const Painel = () => {
    return (
        <Container>
            <Menu />
            <section className="content">
                <header>
                    <FontAwesomeIcon className="icon" icon={faBars} />
                </header>

            </section>
        </Container>
    )
}

export default Painel