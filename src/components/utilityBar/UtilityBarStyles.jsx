import styled from "styled-components";

export const Container_utility = styled.section`
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: rgb(236, 236, 236);
    margin-top: 40px;
    padding: 8px 20px 8px 10px;
    box-shadow: 1px 2px 6px #7979797c;
    gap: 10px;

    @media (max-width: 410px) {
        padding: 5px;
    }
    
`