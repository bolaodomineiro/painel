import { Container_card } from "./MetricStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MetricCard = ({icon, image, title, value, color, flip}) => {
    return (
        <Container_card style={{backgroundColor: color}}>
            <div className="container_top">
                <div className="container_text">
                    <h3>{value}</h3>
                    <p>{title}</p>
                </div>
                <FontAwesomeIcon className="icon_img" icon={image} flip={flip} />
            </div>
            <div className="container_bottom">
                <p>Mais Informações</p>
                <FontAwesomeIcon icon={icon} />
            </div>
        </Container_card>
    )
}

export default MetricCard