import React, { useState, useEffect } from "react";
import { Container } from "./PainelStyles"
import Menu from "../../components/menu/Menu"
import Header from "../../components/header/Header"
import AppRoutes from "../../AppRoutes";
import { useAuthContext } from "../../context/AuthContext";

const Painel = () => {
    const { authenticated} = useAuthContext();

    const [title, setTitle] = useState("Dashboard")
    const [menuToggle, setMenuToggle] = useState(true)

    return (
        <>
            { authenticated  &&
                <Container $menuToggle={menuToggle}>
                    <Menu
                        $menuToggle={menuToggle}
                        $setTitle={setTitle}
                    />
                    <section className="content">
                        <Header
                            $setMenuToggle={setMenuToggle}
                            $menuToggle={menuToggle}
                            title={title}
                        />
                        <AppRoutes
                            $menuToggle={menuToggle}
                        />
                    </section>
                </Container>
            }
        </>
    )
}

export default Painel