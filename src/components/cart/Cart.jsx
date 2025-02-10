import { useState } from "react";
import { Container_cart } from "./CartStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCartShopping, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { useBetPool } from "../../context/BetPoolContext";
import { enviarApostas } from "./CartData";

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

    const handleRemoveJogoAll = () => {
        setApostas([]); // Limpa o carrinho
        localStorage.removeItem("apostas"); // Remove o carrinho do localStorage
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
                            <input 
                                className="total-price"
                                readOnly
                                type="text" 
                                value={apostas.reduce((total, jogo) => total + jogo.price, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            />
                            { cartOpen && <FontAwesomeIcon className="icon-close" icon={faRectangleXmark} />}
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
                                    {jogo.numbers.slice().sort((a, b) => a - b).map((ball, i) => 
                                        <span key={i} className="ball">{ball}</span>
                                    )}
                                </div>
                                <p>+ {jogo.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            </div>
                        ))}
                    </div>
                    <div className="cart-footer">
                        <FontAwesomeIcon 
                            icon={faTrash} 
                            className="delite-all" 
                            onClick={() => handleRemoveJogoAll()}
                        />
                        <button 
                            className="btn-finsh"
                            onClick={() => enviarApostas(apostas)}
                        >
                            Finalizar Aposta
                        </button>
                    </div>
                </Container_cart>
            ) : (  
                null
            )}
        </>
    );
};

export default Cart;
