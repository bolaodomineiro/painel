import { Container_jogo } from "./JogoStyles";
import Balls from "./dataBalls";

const Jogo = () => {


    return (
        <Container_jogo>
        <section className="jogo-balls">
            
            <div className="balls-header">
                <h3>Clique em 10 dezenas - </h3> 
                <p> Escolha como quiser! 😎</p>
            </div>
            <div className="balls-container">
                {Balls.map((ball, index) => (
                    <div className="balls" key={index}>
                        {ball}
                    </div>
                ))}
            </div>
        </section>
        </Container_jogo>
    );
};

export default Jogo;

