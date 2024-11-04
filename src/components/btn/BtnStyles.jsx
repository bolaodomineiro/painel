import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    max-width: 150px;
    min-width: 140px;
    padding: 0 15px;
    background: #AB0519;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    gap: 10px;
    transition: all 0.2s;

    &:hover {
        background: #e30b24;
        color: #fff;
    }
`