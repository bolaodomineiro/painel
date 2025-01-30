import React, { useState, useEffect } from "react";
import { Container } from "./PainelStyles"
import Menu from "../../components/menu/Menu"
import Header from "../../components/header/Header"
import AppRoutes from "../../AppRoutes";

const Painel = () => {

    const [title, setTitle] = useState("Dashboard")
    const [menuToggle, setMenuToggle] = useState(true)

    return (
        <Container $menuToggle={menuToggle}>
            <Menu
                $menuToggle={menuToggle}
                $setTitle={setTitle}
            />
            <section className="content">
                <Header
                    setMenuToggle={setMenuToggle}
                    menuToggle={menuToggle}
                    title={title}
                />
                <AppRoutes
                    $menuToggle={menuToggle}
                />
            </section>
        </Container>
    )
}

export default Painel