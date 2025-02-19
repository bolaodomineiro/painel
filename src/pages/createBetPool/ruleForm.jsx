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
import { saveRules } from "./betData";
import { useBetPool } from "../../context/BetPoolContext";


const RuleForm = ({$setShowForm, $showForm, jogoId}) => {

    console.log(jogoId);

    const { setLoading } = useBetPool();
    const [rules, setRules] = useState([])
    const [pontos, setpontos] = useState(" ")
    const [award, setAward] = useState(" ")

    const handleSaveRule = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const res = confirm("Todos os dados estão corretos ? \n  OK para salvar as regras.");
            if (!res) {
                return;
            }
            await saveRules(jogoId, rules);
            console.log("Jogo salvo com sucesso!");
            $setShowForm(null);
        } catch (error) {
            console.error("Erro ao cadastrar jogo:", error);
        }
    };

    return (
        <Container $showForm={$showForm === "rules"}>
            <Form onSubmit={handleSaveRule}>
                <h2 className="title">Cadastra Regra de Pontuação</h2>
                <section className="rule-container">
                    <FormGroup className="pts">
                        <Label>Pontos</Label>
                        <Input 
                            type="number" 
                            name="pontos" 
                            value={pontos} 
                            onChange={(e)=> setpontos(Number(e.target.value) <= 0 ? " " : Number(e.target.value))} 
                            className="pts"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Valor do Prêmio:</Label>
                        <Input 
                            type="number" 
                            name="award" 
                            value={award} 
                            onChange={(e)=> setAward(Number(e.target.value) <= 0 ? " " : Number(e.target.value))} 
                            className="award"
                        />
                    </FormGroup>
                    <FontAwesomeIcon
                        className="icon"
                        icon={faPlus}
                        onClick={() => {
                            // Atualiza e ordena o array de regras de forma segura
                            setRules((prevRules) => {
                                const updatedRules = [...prevRules, { pts: pontos, isValue: award }];
                                updatedRules.sort((a, b) => b.pts - a.pts); // Ordena do maior para o menor
                                return updatedRules;  // Retorna o novo array ordenado
                            });

                            // Limpa os campos de pontos e award
                            setpontos(" ");
                            setAward(" ");
                        }}
                    />
                </section>
                <section className="rule-preview">
                    <ul>
                        {rules.map((rule, index) => (
                            <li key={index}>
                                <span>{`${rule.pts <= 9 ? `0${rule.pts}` : rule.pts} Pontos`}</span>
                                <span>{rule.isValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                                <FontAwesomeIcon 
                                    className="icon"
                                    icon={faTrash} 
                                    onClick={() => setRules(rules.filter((_, i) => i !== index))}
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
                        $setShowForm(false)
                        setRules([]);
                        setpontos(" ");
                        setAward(" ");
                    }}
                >
                    Cancelar
                </Button>
            </Form>
        </Container>
    );
};

export default RuleForm;

