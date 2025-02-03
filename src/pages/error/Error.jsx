import { Container_error } from "./ErrorStyles"
import Logo from "../../components/logo/Logo"

const Error = () => {
    return (
        <Container_error>
            <div className="error-container">
                <Logo />
                <h1>Acesso Negado</h1>
                <p >Você não tem permissão para acessar esta página. Verifique se está logado ou entre em contato com o suporte.</p>
                <button
                    onClick={() => {
                        window.location.href = "https://www.bolaodomineiro.com.br/"
                    }}
                >Fazer Login</button>
            </div>
        </Container_error>
    )
}

export default Error;