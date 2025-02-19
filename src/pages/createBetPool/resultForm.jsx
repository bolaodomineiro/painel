import React, { useState } from "react";
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
import { useBetPool } from "../../context/BetPoolContext";
import { useResults } from "../../context/ResultsContext";

const ResultForm = ({$setShowForm, $showForm}) => {

    const { setLoad } = useResults();

    const { jogoId } = useBetPool();
    const [dataResult, setDataResult] = useState([])
    const [sorteio, setSorteio] = useState(" ")
    const [resultado, setResultado] = useState(" ")


    const handleSaveResult = async (event) => {
        event.preventDefault();
        try {
            setLoad(true);
            const res = confirm("Todos os dados estão corretos ? \n  OK para salvar os resultados.");
            
            const newResult = {
                jogo_id: jogoId,
                created: new Date(),
                results: dataResult
            }

            if (!res) {
                return;
            }

            await saveResults(newResult);
            console.log("Jogo salvo com sucesso!");
            $setShowForm(null);

        } catch (error) {
            console.error("Erro ao cadastrar jogo:", error);
        }
    };

    return (
        <Container $showForm={$showForm === "result"}>
            <Form onSubmit={handleSaveResult}>
                <h2 className="title">Cadastra Resultados do Jogo</h2>
                <section className="rule-container">
                    <FormGroup className="pts">
                        <Label>Sorteio</Label>
                        <Input 
                            type="number" 
                            name="sorteio" 
                            value={sorteio} 
                            onChange={(e)=> setSorteio(Number(e.target.value) <= 0 ? " " : Number(e.target.value))} 
                            className="pts"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Resultado</Label>
                        <Input 
                            type="number" 
                            name="award" 
                            value={resultado} 
                            onChange={(e)=> setResultado(Number(e.target.value) <= 0 ? " " : Number(e.target.value))} 
                            className="award"
                        />
                    </FormGroup>
                    <FontAwesomeIcon
                        className="icon"
                        icon={faPlus}
                        onClick={() => {
                            // Atualiza e ordena o array de regras de forma segura
                            setDataResult((prevResult) => {
                                const updatedResult = [...prevResult, { award: sorteio, number: resultado }];
                                updatedResult.sort((a, b) => a.award - b.award); // Ordena do maior para o menor
                                return updatedResult;  // Retorna o novo array ordenado
                            });

                            // Limpa os campos de pontos e award
                            setResultado(" ");
                            setSorteio(" ");
                        }}
                    />
                </section>
                <section className="rule-preview">
                    <ul>
                        {dataResult.map((result, index) => (
                            <li key={index}>
                                <span>{`${ result.award <= 9 ? `0${result.award}` : result.award } Sorteio`}</span>
                                <span>{result.number}</span>
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
                        setSorteio(" ");
                        setResultado(" ");
                    }}
                >
                    Cancelar
                </Button>
            </Form>
        </Container>
    );
};

export default ResultForm;

