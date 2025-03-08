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
import {updateRules} from "./betData"
// context
import { useRules} from "../../context/RulesContext";


const RuleForm = ({$setShowForm, $showForm, jogoId}) => {
    const { rules } = useRules();

    const [regras, setRegras] = useState([])
    const [pontos, setpontos] = useState("")
    const [award, setAward] = useState("")
    const [sorteioValido, setSorteioValido] = useState("")

    const rule = rules.find(rule => rule.jogo_id === jogoId)
    
    const hendleRules = () => {

        setRegras((prevRegras) => {
            const updatedRules = [...prevRegras, { pts: pontos, money: award, winner: false, prizeDraw: sorteioValido === "" ? null : sorteioValido }];
            updatedRules.sort((a, b) => b.pts - a.pts); // Ordena do maior para o menor
            return updatedRules;  // Retorna o novo array ordenado
        });

        // Limpa os campos de pontos e award
        setpontos("");
        setAward("");
        setSorteioValido("");
    }

    const handleSaveRule = async (event) => {
        event.preventDefault();
        try {

            const newRules = {
                created: new Date(),
                jogo_id: jogoId,
                rules: regras
            }

            const res = confirm("Todos os dados estão corretos ? \n  OK para salvar as regras.");
            if (!res) {
                return;
            }

            if(rule === undefined){
                console.log("Regras criadas com sucesso!");
                await saveRules(newRules);
            }else{
                await updateRules(rule?.id, regras);
                await getJogos();
                console.log("Regras atualizadas com sucesso!");
            }
    
            $setShowForm(null);
            window.location.reload();
        } catch (error) {
            console.error("Erro ao cadastrar regra", error);
        }
    };

    return (
        <Container $showForm={$showForm === "rules"}>
            <Form onSubmit={handleSaveRule}>
                <h2 className="title">Cadastra Regra de Pontuação</h2>
                <section className="rule-container">
                    <FormGroup >
                        <Label>* Pontos</Label>
                        <Input 
                            type="number" 
                            value={pontos} 
                            onChange={(e)=> setpontos(Number(e.target.value) <= 0 ? "" : Number(e.target.value))} 
                            className="award"
                            placeholder="Digite a pontuação"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>* Valor do Prêmio:</Label>
                        <Input 
                            type="number" 
                            value={award} 
                            onChange={(e)=> setAward(Number(e.target.value) <= 0 ? "" : Number(e.target.value))} 
                            className="award"
                            placeholder="Digite o valor"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Regra valida para o Sorteio:</Label>
                        <Input 
                            type="number" 
                            value={sorteioValido} 
                            onChange={(e)=> setSorteioValido(Number(e.target.value) <= 0 ? "" : Number(e.target.value))} 
                            className="award"
                            placeholder="Digite o número"
                        />
                    </FormGroup>
                    <div 
                        className="add-rule"
                        onClick={() => {
                            hendleRules();
                        }}
                    >
                        <p>Adicionar Regra</p>
                        <FontAwesomeIcon
                            className="icon"
                            icon={faPlus}
                        />
                    </div>
                </section>
                <section className="rule-preview">
                    <ul>
                        {regras.map((rule, index) => (
                            <li key={index} style={{ flexDirection: "column" }}>
                                <div className="rule-price">
                                    <span>{`${rule.pts <= 9 ? `0${rule.pts}` : rule.pts} Pontos`}</span>
                                    <span>Valor: { rule.money?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                                    <FontAwesomeIcon 
                                        className="icon"
                                        icon={faTrash} 
                                        onClick={() => setRegras(rules.filter((_, i) => i !== index))}
                                    />
                                </div>
                                <span className="rule-valid">{rule.prizeDraw === null ? "Valido em todos os sorteios" : `Valido no ${rule.prizeDraw}º sorteio`}</span>
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
                        setRegras([]);
                        setpontos("");
                        setAward("");
                        setSorteioValido("");
                    }}
                >
                    Cancelar
                </Button>
            </Form>
        </Container>
    );
};

export default RuleForm;

