import React, { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ImagePreview,
} from "./formStyles";
import { saveJogo, getJogos } from "./betData";

const Formulario = ({ $showForm, $setShowForm, setLoading, setJogos }) => {
  // Inicializando o estado com todos os dados
  const [formData, setFormData] = useState({
    award: 0,
    description: "",
    drawDate: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRvIYZiCeA5JRaNTcv-SyryNtKLci1qFjw7DgwVZuHS-JHIsr3h55HNWLZbcH8puIPtOA&usqp=CAU",
    isAcumuled: false,
    price: "",
    prizeQuantity: "",
    ticket: "",
    title: "",
    color: "#cccccc", // Cor inicial
    status: "Aberto",
    prizeDraw: "",
    created: new Date(),
  });

  const handleSaveJogo = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formattedData = {
        ...formData,
        drawDate: formData.drawDate ? new Date(formData.drawDate) : new Date(),
        created: new Date(),
      };

      const res = confirm(
        "Todos os dados estão corretos ? \n  OK para salvar o jogo."
      );
      if (!res) {
        return;
      }

      await saveJogo(formattedData);
      console.log("Jogo salvo com sucesso!");
      $setShowForm(false);
      const getAllJogos = await getJogos(setLoading);
      setJogos(getAllJogos);
    } catch (error) {
      console.error("Erro ao cadastrar jogo:", error);
    }
  };

  // Função que lida com a mudança de valores dos inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(name, value, type, checked);
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <Container $showForm={$showForm === "create"}>
      <Form onSubmit={handleSaveJogo}>
        <h2 className="title">Cadastro do Bolão</h2>

        <FormGroup>
          <Label>Título:</Label>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Valor do Prêmio:</Label>
          <Input
            type="number"
            name="award"
            value={formData.award <= 0 ? "" : formData.award}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Descrição:</Label>
          <Input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <section className="data-color">
          <FormGroup>
            <Label>Data do Sorteio:</Label>
            <Input
              type="datetime-local"
              name="drawDate"
              value={formData.drawDate}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Cor:</Label>
            <Input
              type="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="color-input"
            />
          </FormGroup>
        </section>

        <FormGroup>
          <Label>Imagem:</Label>
          <Input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
          <ImagePreview src={formData.image} alt="Preview" />
        </FormGroup>

        <section className="ticket">
          <FormGroup>
            <Label>Preço:</Label>
            <Input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Concurso:</Label>
            <Input
              type="number"
              name="ticket"
              value={formData.ticket}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </section>

        {/* <section className="prize">
          <FormGroup>
            <Label>N de Sorteios:</Label>
            <Input
              className="prizeDraw"
              type="number"
              name="prizeDraw"
              value={formData.prizeDraw}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>N de Prêmios:</Label>
            <Input
              className="prizeQuantity"
              type="number"
              name="prizeQuantity"
              value={formData.prizeQuantity}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup className="acumulado">
            <Input
              type="checkbox"
              name="isAcumuled"
              checked={formData.isAcumuled}
              onChange={handleChange}
            />
            <Label>Acumulado</Label>
          </FormGroup>
        </section> */}

        <section>

          <p>
            PREMIAÇÕES:<br /><br />

- por pontos até completar 10 pontos até a terceira extração <br />

- por pontos até completar 10 pontos até a quarta extração<br />

 - primeiro extração, fazer 8 pontos<br />

- primeira extração, fazer 7 pontos<br />

- primeira extração, fazer 6 pontos<br />

- mais pontos na primeira extração<br />

- premio consolação, 2º lugar até o término do bolão abaixo de 10 pontos<br />

- pé frio, zero pontos até o término do bolão<br /><br />

Quando o bolão finaliza?<br /><br />
- finalizar automaticamente o bolão após a quarta extração<br />
-finalizar até atingir 10 pontos


          </p>



        </section>

        <Button type="submit">Cadastrar</Button>
        <Button
          type="button"
          style={{ backgroundColor: "#5A6268" }}
          onClick={() => $setShowForm(false)}
        >
          Cancelar
        </Button>
      </Form>
    </Container>
  );
};

export default Formulario;
