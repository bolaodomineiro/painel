import { Btn } from "./GoogleStylesBtn"
import Google from "../../assets/images/google.png"

const GoogleBtn = ({text}) => {
    return (
        <Btn>
            <img src={Google} alt="google logo" />
            <p> {text}</p>
        </Btn>
    )
}

export default GoogleBtn