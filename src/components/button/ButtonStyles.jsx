import styled from "styled-components";

export const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #AB0519;
    color: #fff;
    border: none;
    width: 115px;
    padding: 5px;
    border-radius: 30px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
        background-color:#e90621;
    }
`