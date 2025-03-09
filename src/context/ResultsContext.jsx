import { createContext, useContext, useState, useEffect } from "react";
import { useBetPool } from "./BetPoolContext";
// utils
import { extractLottoBalls } from "./utils/extractLottoBalls";
import { fetchAllResults } from "./utils/fetchAllResults";
import { fetchAllRules, updateWinnerByPts } from "./utils/fetchAllRules";
import { fetchAllApostas } from "./utils/fetchAllApostas";
import { getUsers } from "./utils/fetchAllUsers";
import { enviarGanhadores } from "./utils/postAllGanhadores";

const ResultsContext = createContext();

export const ResultsProvider = ({ children }) => {
    const { jogoId } = useBetPool();

    const [ganhadores, setGanhadores] = useState([]);
    const [sorteios, setSorteios] = useState([]);
    const [resultados, setResultados] = useState([]);
    const [rules, setRules] = useState([]);
    const [apostas, setApostas] = useState([]);
    const [load, setLoad] = useState(false);
    const [usuarios, setUsuarios] = useState([]);


    // Resetar estados ao mudar de jogo
    useEffect(() => {
        setUsuarios([]);
        setGanhadores([]);
        setSorteios([]);
        setResultados([]);
        setRules([]);
        setApostas([]);
        setLoad(false);

        const fetchUsuarios = async () => {
            const newUsuarios = await getUsers();
            setUsuarios(newUsuarios);
        };
        fetchUsuarios();

        if (!jogoId) return console.log("jogoId está vazio em ResultsContext");
        fetchAllResults(jogoId, setResultados);
    }, [jogoId, load]);

    useEffect(() => {
        const getGrupos = async () => {
            if (resultados?.length > 0) {
                await extractLottoBalls(jogoId, resultados,  setSorteios);
                await fetchAllRules(jogoId, setRules);
                await fetchAllApostas(jogoId, setApostas);
            }
        };
        getGrupos();
    }, [resultados]);

    const verificarAcertosApostas = async (apostas, sorteios, usuarios) => {
        for (const ganhador of usuarios) {
            for (const aposta of apostas) {
                let acertos = 0;
                let numerosAcertados = [];
                const numerosSorteados = sorteios.map(item => item.balls).flat();

                aposta.numbers.forEach(num => {
                    if (numerosSorteados.includes(num)) {
                        acertos++;
                        numerosAcertados.push(num);
                    }
                });

                if (ganhador.id === aposta.user_id) {
                    const newGanhador = {
                        acertos,
                        numerosAcertados,
                        aposta,
                        ganhador
                    };

                    setGanhadores(prev => { // verificar se o ganhador ja foi adicionado
                        const existe = prev.some(g => g.aposta.id === newGanhador.aposta.id);
                        return existe ? prev : [...prev, newGanhador];
                    });
                }
            }
        }
    };

    useEffect(() => {
        if (apostas?.length > 0 && sorteios.length > 0 && usuarios.length > 0) {
            console.log("sorteios", sorteios);
            console.log("apostas", apostas);
            verificarAcertosApostas(apostas, sorteios, usuarios);
        }
    }, [apostas, sorteios, usuarios]);

    const verificaApostaPremiada = async () => {
        let regrasParaAtualizar = [];
        let novosGanhadores = [];

        for (const ganhador of ganhadores) {
            for (const regra of rules) {
                for (const condicao of regra.rules) {
                    if (
                        ganhador.acertos >= condicao.pts &&
                        (sorteios.length  === condicao.prizeDraw || condicao.prizeDraw === null) &&
                        !condicao.winner
                    ) {
                        novosGanhadores.push({ ...ganhador, rule: condicao.pts, money: condicao.money });
                        if (!regrasParaAtualizar.some(item => item.id === regra.id && item.pts === condicao.pts)) {
                            regrasParaAtualizar.push({ id: regra.id, pts: condicao.pts });
                            console.log("if 01", regrasParaAtualizar);
                        }
                        break;
                    }
                    // else  if(!regrasParaAtualizar.some(item => item.id === regra.id && item.pts === condicao.pts) && 
                    //         (typeof condicao.prizeDraw === "number" && condicao.prizeDraw <= sorteios.length && !condicao.winner)) {
                    //     regrasParaAtualizar.push({ id: regra.id, pts: condicao.pts });
                    //     console.log("if 02", regrasParaAtualizar);
                    //     break
                    // }
                }
            }
        }

        if (novosGanhadores.length > 0) {
            console.log("enviando... ganhadores");
            await enviarGanhadores(novosGanhadores);
            console.log("enviado com sucesso");
        }

        for (const { id, pts } of regrasParaAtualizar) {
            console.log(id, pts);
            await updateWinnerByPts(id, pts);
        }
    };


    useEffect(() => {

        if (apostas?.length > 0 && sorteios.length > 0 && rules.length > 0 && ganhadores.length > 0) {
            console.log(" ganhadores", ganhadores);
            console.log(sorteios);
            console.log(ganhadores);
            console.log(usuarios);
            for (const grupoRegras of rules) {
                for (const regra of grupoRegras.rules) {
                    if (regra.pts === 10 && !regra.winner) {
                        console.log("Ninguem acertou 10 pontos, Bolão Aberto");
                        verificaApostaPremiada();
                        break;
                    }
                    console.log("Bolão Fechado, acertaram 10 pontos");
                }
            }
        }
    }, [ganhadores, sorteios, rules, apostas]);

    return (
        <ResultsContext.Provider value={{ fetchAllResults, load, setLoad, sorteios, rules, resultados, setResultados }}>
            {children}
        </ResultsContext.Provider>
    );
};

// Hook personalizado para acessar o contexto
export const useResults = () => {
    return useContext(ResultsContext);
};
