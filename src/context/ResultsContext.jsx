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

    const [updatesApostasGanhadoras, setupdatesApostasGanhadoras] = useState([]);
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
        setupdatesApostasGanhadoras([]);
    }, [jogoId]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            const newUsuarios = await getUsers();
            setUsuarios(newUsuarios);
        };
        fetchUsuarios();
    }, [jogoId]);

    useEffect(() => {
        fetchAllResults(jogoId, setResultados, setLoad);
        console.log("Buscando resultados...");
    }, [jogoId]);

    useEffect(() => {
        setSorteios([]);
        const getGrupos = async () => {
            if (resultados?.length > 0) {
                await extractLottoBalls(resultados, jogoId, setSorteios);
                await fetchAllRules(jogoId, setRules, setLoad);
                await fetchAllApostas(jogoId, setApostas, setLoad);
            }
        };
        getGrupos();
    }, [resultados]);

    const verificarAcertosApostas = async (apostas, sorteios) => {
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

                    setGanhadores(prev => {
                        const existe = prev.some(g => g.aposta.id === newGanhador.aposta.id);
                        return existe ? prev : [...prev, newGanhador];
                    });
                }
            }
        }
    };

    useEffect(() => {
        if (apostas.length > 0 && sorteios.length > 0) {
            verificarAcertosApostas(apostas, sorteios);
        }
    }, [apostas, sorteios]);

    const verificaApostaPremiada = async () => {
        let regrasParaAtualizar = [];
        let novosGanhadores = [];

        for (const ganhador of ganhadores) {
            for (const regra of rules) {
                for (const condicao of regra.rules) {
                    if (
                        ganhador.acertos >= condicao.pts &&
                        (sorteios.length - 1 === condicao.prizeDraw || condicao.prizeDraw == null) &&
                        !condicao.winner
                    ) {
                        novosGanhadores.push({ ...ganhador, rule: condicao.pts, money: condicao.money });

                        if (!regrasParaAtualizar.some(item => item.id === regra.id && item.pts === condicao.pts)) {
                            regrasParaAtualizar.push({ id: regra.id, pts: condicao.pts });
                        }
                        break;
                    }
                }
            }
        }

        if (novosGanhadores.length > 0) {
            console.log("Ganhadores:", novosGanhadores);
            setupdatesApostasGanhadoras(novosGanhadores);
            await enviarGanhadores(novosGanhadores);
        }

        for (const { id, pts } of regrasParaAtualizar) {
            await updateWinnerByPts(id, pts);
        }
    };

    useEffect(() => {
        if (apostas.length > 0 && sorteios.length > 0 && rules.length > 0) {
            console.log(sorteios);
            console.log(ganhadores);
            console.log(usuarios);
            for (const grupoRegras of rules) {
                for (const regra of grupoRegras.rules) {
                    if (regra.pts === 10 && !regra.winner) {
                        console.log("Bolão Aberto");
                        verificaApostaPremiada();
                        break;
                    }
                    console.log("Bolão Fechado");
                }
            }
        }
    }, [ganhadores, sorteios, rules]);

    return (
        <ResultsContext.Provider value={{ fetchAllResults, load, setLoad, sorteios }}>
            {children}
        </ResultsContext.Provider>
    );
};

// Hook personalizado para acessar o contexto
export const useResults = () => {
    return useContext(ResultsContext);
};
