import { Container_cart } from "./CartStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons"


const Cart = () => {

    const getJogos = JSON.parse(localStorage.getItem("Jogos")) || [];
    
    return (
        <Container_cart>
            <div className="cart-header">
                <div className="cart-icon-container"> 
                    <div className="cart-area">
                        <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
                        <span className="cart-count">{200}</span>
                    </div>  
                    <p>Carrinho</p>
                    <span>R$ 350,00</span>
                </div>
            </div>
            <div className="main-cart">
                {getJogos.map((jogo) => (
                    <div className="cart-item">
                        <h3>{jogo.title}</h3>
                        <div className="balls-container">
                            { jogo.numbers.map((ball) => 
                                <span className="ball">{ball}</span>
                            )}
                        </div>
                        <p>R$ 3,00</p>
                    </div>
                ))}
            </div>
            <div className="cart-footer">footer</div>
        </Container_cart>
    )
}

export default Cart;
