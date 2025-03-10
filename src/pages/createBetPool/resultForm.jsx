import React, { useState, useEffect } from "react";
import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from "./formStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { saveResults } from "./betData";
import {updateAwards} from "./betData"
import { useResults } from "../../context/ResultsContext";
import { useBetPool } from "../../context/BetPoolContext";


const ResultForm = ({$setShowForm, $showForm, jogoId}) => {

    const { resultados, setLoad, load } = useResults(); 
    const { setLoading } = useBetPool();  

    const [dataResult, setDataResult] = useState([])

    const [extracao, setExtracao] = useState("")
    const [sorteio, setSorteio] = useState("")
    const [premio, setPremio] = useState("")
    const [resultado, setResultado] = useState("")

    const hendleRusults = () => {
        // Atualiza e ordena o array de regras de forma segura
        setDataResult((prevResult) => {
            const updatedResult = [...prevResult, { isAward: premio, num: resultado.padStart(5, "0") }];
            updatedResult.sort((a, b) => a.isAward - b.isAward); // Ordena do maior para o menor
            return updatedResult;  // Retorna o novo array ordenado
        });

        // Limpa os campos de pontos e award
        setResultado("");
        setPremio("");
    }

    const handleSaveResult = async (event) => {
        event.preventDefault();
        try {
            const res = confirm("Todos os dados estão corretos ? \n  OK para salvar os resultados.");
            
            const newResult = {
                created: new Date(),
                jogo_id: jogoId,
                results:[{ 
                    awards: dataResult,
                    drawDate: new Date(),
                    prizeDraw: sorteio,
                    extraction: extracao
                }]
            }

            const updateResult = {
                awards: dataResult,
                drawDate: new Date(),
                prizeDraw: sorteio,
                extraction: extracao
            }

            if (!res) {
                return;
            }

            if(resultados === null){
                await saveResults(newResult);
                console.log("1 Jogo salvo com sucesso!");
            }else{
                await updateAwards(resultados[0]?.id, updateResult);
                console.log("2 Resultados atualizadas com sucesso!");
            }

            $setShowForm(null);
            setLoad(!load);
            setLoading(true);

        } catch (error) {
            console.error("Erro ao cadastrar sorteio:", error);
        }
    };

    return (
        <Container $showForm={$showForm === "result"}>
            <Form onSubmit={handleSaveResult}>
                <h2 className="title">Cadastra Resultados do Jogo</h2>
                <section className="rule-container">
                <FormGroup className="pts">
                        <Label>Extração</Label>
                        <Input 
                            type="text" 
                            value={extracao} 
                            onChange={(e)=> setExtracao(e.target.value)} 
                            className="award"
                            placeholder="Ex: Loteria Federal "
                        />
                    </FormGroup>
                    <FormGroup className="pts">
                        <Label>Sorteio</Label>
                        <Input 
                            type="number" 
                            value={sorteio} 
                            onChange={(e)=> setSorteio(Number(e.target.value) <= 0 ? "" : Number(e.target.value))} 
                            className="award"
                            placeholder="Digite o número do sorteio "
                        />
                    </FormGroup>
                    <FormGroup className="pts">
                        <Label>Prêmio</Label>
                        <Input 
                            type="number" 
                            value={premio} 
                            onChange={(e)=> setPremio(Number(e.target.value) <= 0 ? "" : Number(e.target.value))} 
                            className="award"
                            placeholder="Digite o número do prêmio"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Resultado</Label>
                        <Input 
                            type="text" 
                            value={resultado} 
                            onChange={(e)=> setResultado(e.target.value)} 
                            className="award"
                            placeholder="Digite o número do resultado ex: 56437 "
                            maxLength={5}
                            minLength={5}
                        />
                    </FormGroup>
                    <div 
                        className="add-rule"
                        onClick={() => {
                            hendleRusults();
                        }}
                    >
                        <p>Adicionar Resultado</p>
                        <FontAwesomeIcon
                            className="icon"
                            icon={faPlus}
                        />
                    </div>
                </section>
                <section className="rule-preview">
                    <ul>
                        {dataResult.map((result, index) => (
                            <li key={index}>
                                <span>{`${result.isAward}º  Sorteio`}</span>
                                <span>{result.num}</span>
                                <FontAwesomeIcon 
                                    className="icon"
                                    icon={faTrash} 
                                    onClick={() => setDataResult(dataResult.filter((_, i) => i !== index))}
                                />
                            </li>
                        ))}
                    </ul>
                </section>
                <Button type="submit">Cadastrar</Button>
                <Button 
                    type="button" 
                    style={{ backgroundColor: "#5A6268" }} 
                    onClick={() => {
                        $setShowForm(false);
                        setDataResult([]);
                        setPremio("");
                        setResultado("");
                    }}
                >
                    Cancelar
                </Button>
            </Form>
        </Container>
    );
};

export default ResultForm;

