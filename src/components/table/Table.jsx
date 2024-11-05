import { Container_table } from "./TableStyles"
import usuarios from "./dataUser";



const Table = () => {

    const data = usuarios ;

    return (
        <Container_table>
            <div className="header_table">
                <ul>
                    <li>Foto</li>
                    <li>Id</li>
                    <li>Nome</li>
                    <li>Telefone</li>
                    <li>Cidade</li>
                    <li>+ Detalhes</li>
                    <li>Editar</li>
                    <li>Excluir</li>
                </ul>
            </div>
            <div className="body_table">
                {
                    data.map((item, index) => {
                        return (
                            <ul key={index}>
                                <li><img className="image_user" src={item.image} alt="user" /></li>
                                <li>{item.id}</li>
                                <li>{item.nome}</li>
                                <li>{item.telefone}</li>
                                <li>{item.cidade}</li>
                                <li>+ Detalhes</li>
                                <li>Editar</li>
                                <li>Excluir</li>
                            </ul>
                        )
                    })
                }
            </div>
        </Container_table>
    )
}

export default Table