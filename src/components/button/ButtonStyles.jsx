import styled from "styled-components";

export const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #AB0519;
    color: #fff;
    border: none;
    padding: 6px 10px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.6rem;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
        background-color:#e90621;
    }
`