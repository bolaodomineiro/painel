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
import { saveJogo } from "./betData";
import { useBetPool } from "../../context/BetPoolContext";

const Formulario = ({ $showForm, $setShowForm }) => {
    const { setLoading } = useBetPool();

    const [formData, setFormData] = useState({
        award: 0,
        description: "",
        drawDate: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRvIYZiCeA5JRaNTcv-SyryNtKLci1qFjw7DgwVZuHS-JHIsr3h55HNWLZbcH8puIPtOA&usqp=CAU",
        isAcumuled: false,
        price: 8,
        prizeQuantity: 6,
        ticket: 2121,
        title: "",
        color: "#aaaaaa",
        result: [],
        rules: [],
        status: "Aberto",
        created: new Date(),
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSaveJogo = async (event) => {
        event.preventDefault();

        try {
            const formattedData = {
                ...formData,
                drawDate: formData.drawDate ? new Date(formData.drawDate) : new Date(),
                created: new Date(),
            };

            await saveJogo(formattedData);
            console.log("Jogo salvo com sucesso!");
            setLoading(true);
            $setShowForm(false);
        } catch (error) {
            console.error("Erro ao cadastrar jogo:", error);
        }
    };

    return (
        <Container $showForm={$showForm}>
            <Form onSubmit={handleSaveJogo}>
                <h2 className="title">Cadastro do Bolão</h2>

                <FormGroup>
                    <Label>Título:</Label>
                    <Input type="text" name="title" value={formData.title} onChange={handleChange} required />
                </FormGroup>

                <FormGroup>
                    <Label>Valor do Prêmio:</Label>
                    <Input type="number" name="award" value={formData.award} onChange={handleChange} required />
                </FormGroup>

                <FormGroup>
                    <Label>Descrição:</Label>
                    <Input type="text" name="description" value={formData.description} onChange={handleChange} required />
                </FormGroup>

                <section className="data-color">
                    <FormGroup>
                        <Label>Data do Sorteio:</Label>
                        <Input type="datetime-local" name="drawDate" value={formData.drawDate} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label>Cor:</Label>
                        <Input type="color" name="color" value={formData.color} onChange={handleChange} className="color-input" required />
                    </FormGroup>
                </section>

                <FormGroup>
                    <Label>Imagem:</Label>
                    <Input type="text" name="image" value={formData.image} onChange={handleChange} required />
                    <ImagePreview src={formData.image} alt="Preview" />
                </FormGroup>

                <section className="ticket">
                    <FormGroup>
                        <Label>Preço:</Label>
                        <Input type="number" name="price" value={formData.price} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label>Bilhete:</Label>
                        <Input type="number" name="ticket" value={formData.ticket} onChange={handleChange} required />
                    </FormGroup>
                </section>

                <section className="prize">
                    <FormGroup>
                        <Label>Quantidade de Prêmios:</Label>
                        <Input type="number" name="prizeQuantity" value={formData.prizeQuantity} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup className="acumulado">
                        <Input type="checkbox" name="isAcumuled" checked={formData.isAcumuled} onChange={handleChange}   />
                        <Label>Acumulado</Label>
                    </FormGroup>
                </section>

                <Button type="submit">Cadastrar</Button>
                <Button type="button" style={{ backgroundColor: "#5A6268" }} onClick={() => $setShowForm(false)}>
                    Cancelar
                </Button>
            </Form>
        </Container>
    );
};

export default Formulario;

