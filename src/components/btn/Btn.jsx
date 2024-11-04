import { Button } from './BtnStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const Btn = ({ text }) => {
    return (
        <Button>
            { text } 
            <FontAwesomeIcon icon={faPlus} />
        </Button>

    )
}

export default Btn;