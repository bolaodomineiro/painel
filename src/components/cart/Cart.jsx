import { useState, useRef, useEffect } from "react";
import { Container_cart } from "./CartStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCartShopping, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { useBetPool } from "../../context/BetPoolContext";

const Cart = () => {
    const { apostas, setApostas } = useBetPool();
    const [cartOpen, setCartOpen] = useState(false);
    const cartRef = useRef(null); // Referência para o carrinho

    // Fecha o carrinho se clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setCartOpen(false);
            }
        };

        if (cartOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [cartOpen]);

    const handleRemoveJogo = (index) => {
        const getApostas = [...apostas || []];
        const updatedJogos = getApostas.filter((_, i) => i !== index);
        setApostas(updatedJogos);
        localStorage.setItem("apostas", JSON.stringify(updatedJogos));
    };

    const handleRemoveJogoAll = () => {
        setApostas([]);
        localStorage.removeItem("apostas");
    };

    return (
        <>
            {apostas.length > 0 && (
                <Container_cart ref={cartRef} style={{ height: cartOpen ? "calc(100vh - 70px)" : "70px" }}>
                    <div 
                        className="cart-header"
                        onClick={() => setCartOpen(!cartOpen)}
                    >
                        <div className="cart-icon-container">
                            <div className="cart-area">
                                <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
                                <span className="cart-count">{apostas.length}</span>
                            </div>
                            <p>Carrinho</p>
                            <input 
                                className="total-price"
                                readOnly
                                type="text" 
                                value={apostas.reduce((total, jogo) => total + jogo.price, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            />
                            {cartOpen && <FontAwesomeIcon className="icon-close" icon={faRectangleXmark} />}
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
                                <div className="cart-item-footer">
                                    <span>{new Date(jogo.created.seconds * 1000).toLocaleString()}</span>
                                    <p>+ {jogo.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-footer">
                        <FontAwesomeIcon 
                            icon={faTrash} 
                            className="delite-all" 
                            onClick={handleRemoveJogoAll}
                        />
                        <button 
                            className="btn-finsh"
                            onClick={() => {""}}
                        >
                            Finalizar Aposta
                        </button>
                    </div>
                </Container_cart>
            )}
        </>
    );
};

export default Cart;
