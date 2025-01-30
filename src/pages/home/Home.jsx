import { useState, useEffect } from "react"
import { Container_home } from "./HomeStyles"
import { faCirclePlus, faDollarSign } from "@fortawesome/free-solid-svg-icons"
import MetricCard from "../../components/cards/card_dashboard/MetricCard"
import Contests from "../../components/contests/contests"
// db firebase / jogos
import { db } from "../../firebase/firebase"
import { collection, getDocs } from "firebase/firestore"


const Home = () => {
    
    const [jogos, setJogos] = useState([]);
    
    async function getJogos() {
        const jogosCollection = collection(db, "jogos");
        const jogosSnapshot = await getDocs(jogosCollection);
        const jogosList = jogosSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        }));
        setJogos(jogosList);
        console.log(jogosList);
    }
    
    useEffect(() => {
        getJogos();

    }, []);


    return (
        <Container_home>
            <section className="container_cards">
                { jogos.map((jogo) => (
                    <MetricCard
                        key={jogo.id}
                        icon={faCirclePlus}
                        title={jogo.title}
                        description={jogo.description}
                        value={jogo.award}
                        color={"#f2f2f2"}
                        corbottom={jogo.color}
                        image={faDollarSign}
                        prizeQuantity={jogo.prizeQuantity}

                    />
                ))}
            </section>
            <Contests />
        </Container_home>
    )
}

export default Home