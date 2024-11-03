import styled from "styled-components";

export const Container_home = styled.section`
    width: 100%;
    height: 100%;

    .container_cards {
        display: flex;
        flex-wrap: wrap;
        flex-direction:  ;
        justify-content: center;
        gap: 10px;
        padding: 8px;
        margin-top: 35px;

        @media (max-width: 590px) {
            align-items: center;
            flex-direction: row;
        }
        
    }
    
`;