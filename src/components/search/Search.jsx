import { Container_search } from "./SearchStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Search = () => {
    return (
        <Container_search>
            <input type="text" placeholder="Pesquisar" />
            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
        </Container_search>
    )
}

export default Search;