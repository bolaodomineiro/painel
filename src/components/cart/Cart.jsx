import { useState } from "react";
import { Container_cart } from "./CartStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useBetPool } from "../../context/BetPoolContext";

const Cart = () => {

    const {apostas, setApostas} = useBetPool();
    const [cartOpen, setCartOpen] = useState(false);

    const handleRemoveJogo = (index) => {
        // Cria uma nova lista sem o jogo removido
        const getApostas = [...apostas || []];
        const updatedJogos = getApostas.filter((_, i) => i !== index);
        
        // Atualiza o estado e o localStorage
        setApostas(updatedJogos);
        localStorage.setItem("apostas", JSON.stringify(updatedJogos));

    };
    
    
    return (
        <>
            {apostas.length > 0 ? (  // Verifica se há apostas no carrinho
                <Container_cart style={{ height: cartOpen ? "calc(100vh - 70px)" : "70px"}} >
                    <div 
                        className="cart-header"
                        onClick={() => setCartOpen(!cartOpen)}
                    >
                        <div className="cart-icon-container">
                            <div className="cart-area">
                                <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
                                <span className="cart-count">{apostas.length}</span> {/* Mostra a quantidade real de itens no carrinho */}
                            </div>
                            <p>Carrinho</p>
                            <span>R$ 350,00</span>
                        </div>
                    </div>
                    <div className="main-cart">
                        {apostas.map((jogo, index) => (
                            <div className="cart-item" key={index}>
                                <FontAwesomeIcon 
                                    icon={faTrash} 
                                    className="icon-delete" 
                                    onClick={() => handleRemoveJogo(index)}
                                />
                                <h3>{jogo.title}</h3>
                                <div className="balls-container">
                                    {jogo.numbers.map((ball, i) => 
                                        <span key={i} className="ball">{ball}</span>
                                    )}
                                </div>
                                <p>R$ 3,00</p>
                            </div>
                        ))}
                    </div>
                    <div className="cart-footer">
                        <button className="btn-finsh">Finalizar Aposta</button>
                    </div>
                </Container_cart>
            ) : (  
                null
            )}
        </>
    );
};

export default Cart;
