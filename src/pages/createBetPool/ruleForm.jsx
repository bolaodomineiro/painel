import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "./formStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { saveRules } from "./betData";
import { updateRules } from "./betData";
import { useRules } from "../../context/RulesContext";
import { useBetPool } from "../../context/BetPoolContext";

const RuleForm = ({ $setShowForm, $showForm, jogoId }) => {
  const { rules } = useRules();
  const { setLoading } = useBetPool();
  const [regras, setRegras] = useState([]);
  const [pontos, setpontos] = useState("");
  const [extracoes, setExtracoes] = useState("");
  const [award, setAward] = useState("");
  const [sorteioValido, setSorteioValido] = useState("");
  const rule = rules.find((rule) => rule.jogo_id === jogoId);

  const hendleRules = () => {
    setRegras((prevRegras) => {
      const updatedRules = [
        ...prevRegras,
        {
          pts: pontos,
          extractions: extracoes,
          money: award,
          winner: false,
          prizeDraw: sorteioValido === "" ? null : sorteioValido,
        },
      ];
      updatedRules.sort((a, b) => b.pts - a.pts);
      return updatedRules;
    });

    setpontos("");
    setExtracoes("");
    setAward("");
    setSorteioValido("");
  };

  const handleSaveRule = async (event) => {
    event.preventDefault();
    try {
      const newRules = {
        created: new Date(),
        jogo_id: jogoId,
        rules: regras,
      };

      const res = confirm(
        "Todos os dados estão corretos ? \n  OK para salvar as regras."
      );
      if (!res) {
        return;
      }

      if (rule === undefined) {
        console.log("Regras criadas com sucesso!");
        await saveRules(newRules);
      } else {
        await updateRules(rule?.id, regras);
        console.log("Regras atualizadas com sucesso!");
      }

      $setShowForm(null);
      setLoading(true);
    } catch (error) {
      console.error("Erro ao cadastrar regra", error);
    }
  };

  const [ruleOption, setRuleOption] = useState("");

  return (
    <Container $showForm={$showForm === "rules"}>
      <Form onSubmit={handleSaveRule}>
        <h2 className="title">Regra de Pontuação</h2>
        <section className="rule-container">
          <FormGroup>
            <Label style={{ marginBottom: "4px" }}>
              Qual a Regra de Pontuação deste Bolão?
            </Label>

            <select
              name="RuleOption"
              id="RuleOption"
              value={ruleOption}
              onChange={(e) => setRuleOption(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option value="" disabled>
                -- Selecione uma opção --
              </option>
              <option value="pontos">Pontos</option>
              <option value="extracao">Extração</option>
            </select>
          </FormGroup>

          <div
            id="rule1"
            style={{
              display: ruleOption === "pontos" ? "block" : "none",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            {/* Início do Formulário para cadastrar regras de pontuação para o jogo */}
            <h5
              style={{
                marginBottom: "6px",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Regra de Aposta por Pontos:
            </h5>
            <FormGroup>
              <Label style={{ marginBottom: "2px" }}>
                Quantidade de Pontos
              </Label>
              <Input
                type="number"
                value={pontos}
                onChange={(e) =>
                  setpontos(
                    Number(e.target.value) <= 0 ? "" : Number(e.target.value)
                  )
                }
                className="award"
                placeholder="Com quantos pontos o usuário ganha o prêmio?"
                style={{ marginBottom: "10px" }}
              />
            </FormGroup>

            <FormGroup>
              <Label style={{ marginBottom: "2px" }}>Valor do Prêmio:</Label>
              <Input
                type="number"
                value={award}
                onChange={(e) =>
                  setAward(
                    Number(e.target.value) <= 0 ? "" : Number(e.target.value)
                  )
                }
                className="award"
                placeholder="Digite o valor do prêmio"
                style={{ marginBottom: "12px" }}
              />
            </FormGroup>

            <div
              className="add-rule"
              onClick={() => {
                hendleRules();
              }}
            >
              <p>Adicionar Regra</p>
              <FontAwesomeIcon className="icon" icon={faPlus} />
            </div>
            {/* Fim do Formulário para cadastrar regras de pontuação para o jogo */}
          </div>

          <div
            id="rule2"
            style={{
              display: ruleOption === "extracao" ? "block" : "none",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            {/* Início do Formulário para cadastrar regras de extrações */}
            <h5
              style={{
                marginBottom: "6px",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Regra de Aposta por Extrações:
            </h5>

            <FormGroup>
              <Label style={{ marginBottom: "2px" }}>
                Quantidade de Extrações
              </Label>
              <Input
                type="number"
                value={extracoes}
                onChange={(e) =>
                  setExtracoes(
                    Number(e.target.value) <= 0 ? "" : Number(e.target.value)
                  )
                }
                className="award"
                placeholder="Com quantas extrações o bolão termina?"
                style={{ marginBottom: "10px" }}
              />
            </FormGroup>

            <FormGroup>
              <Label style={{ marginBottom: "2px" }}>Valor do Prêmio:</Label>
              <Input
                type="number"
                value={award}
                onChange={(e) =>
                  setAward(
                    Number(e.target.value) <= 0 ? "" : Number(e.target.value)
                  )
                }
                className="award"
                placeholder="Digite o valor do prêmio"
                style={{ marginBottom: "12px" }}
              />
            </FormGroup>

            <div
              className="add-rule"
              onClick={() => {
                hendleRules();
              }}
            >
              <p>Adicionar Regra</p>
              <FontAwesomeIcon className="icon" icon={faPlus} />
            </div>
          </div>
        </section>

        {/* Visualização das regras */}
        <h5>Regras Adicionadas:</h5>
        <section className="rule-preview">
          <ul>
            {regras.map((rule, index) => (
              <li key={index} style={{ flexDirection: "column" }}>
                <div className="rule-price">
                  <span>{`${
                    rule.pts <= 9 ? `0${rule.pts}` : rule.pts
                  } Pontos`}</span>


                  <span>{`${
                    rule.extractions <= 9 ? `0${rule.extractions}` : rule.extractions
                  } Extrações`}</span>




                  <span>
                    Valor:{" "}
                    {rule.money?.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                  <FontAwesomeIcon
                    className="icon"
                    icon={faTrash}
                    onClick={() =>
                      setRegras(rules.filter((_, i) => i !== index))
                    }
                  />
                </div>
                <span className="rule-valid">
                  {rule.prizeDraw === null
                    ? "Valido em todos os sorteios"
                    : `Valido no ${rule.prizeDraw}º sorteio`}
                </span>
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
            setRegras([]);
            setpontos("");
            setExtracoes("");
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
