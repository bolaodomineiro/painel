import styled from "styled-components";

export const Container_utility = styled.section`
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 15px;
    background: #fff;
    margin-top: 50px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 1;
    gap: 10px;

    @media (max-width: 374px) {
        padding: 5px;
    }
`