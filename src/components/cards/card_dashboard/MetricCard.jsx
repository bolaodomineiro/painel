import { Container_card } from "./MetricStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MetricCard = ({ icon, image, title, value, color, flip, key, description, prizeQuantity, corbottom }) => {
    return (
        <Container_card style={{ backgroundColor: color }} key={key}>
            <div className="container">
                <div className="container_top">
                    <h4 className='acumulado_text'>Acumulado</h4>
                    <div className="container_text">
                        <h5>Premiação  Estimada</h5>
                        <h3>{value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
                        <p>{title}</p>
                        <p className="description">{description}</p>
                        <span className="primeio">{prizeQuantity} Premiacões</span>
                    </div>
                    <FontAwesomeIcon className="icon_img" icon={image} flip={flip} />
                </div>
                <div 
                    className="container_bottom"
                    style={{ backgroundColor: corbottom }}
                    onClick={() => console.log("Apostar")}
                >
                    <p>Faça sua aposta!</p>
                    <FontAwesomeIcon icon={icon} />
                </div>
            </div>
        </Container_card>
    )
}

export default MetricCard