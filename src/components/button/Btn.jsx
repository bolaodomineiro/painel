import React from 'react';
import { ButtonContainer } from "./ButtonStyles";

const Btn = ({text, onClick}) =>{

    return (
        <ButtonContainer
            onClick={ onClick }
        >
            {text}
        </ButtonContainer>
    )
}

export default Btn;