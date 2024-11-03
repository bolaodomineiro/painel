import React, { useState } from "react";
import { Container } from "./PainelStyles"
//components
import Menu from "../../components/menu/Menu"
import Header from "../../components/header/Header"
import AppRoutes from "../../AppRoutes";

const Painel = () => {

    const [menuToggle, setMenuToggle] = useState(false)

    return (
        <Container  $menuToggle={menuToggle}>
            <Menu 
                $menuToggle={menuToggle} 
            />
            <section className="content">
                <Header 
                    setMenuToggle={setMenuToggle} 
                    menuToggle={menuToggle}
                />
                <AppRoutes />
            </section>
        </Container>
    )
}

export default Painel