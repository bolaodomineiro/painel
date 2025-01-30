import styled from "styled-components";

export const Container_home = styled.section`
    width: 100%;
    background: #ccc;
    padding: 10px  0px ;

    .container_cards {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
        padding: 8px;
        margin-top: 30px;
        padding-bottom: 12px;
    }

    .infor_area {
        flex: 1;
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        text-align: center;
        padding: 30px 10px;

        img {
            width: 140px;
            height: 140px;

            @media (max-width: 500px) {
                width: 120px;
                height: 120px;
            }
        }

        h1 {
            font-size: 1.6rem;
            color: #AB0519;

            @media (max-width: 500px) {
                font-size: 1.2rem;
            }
        }

        p {
            font-size: 1.1rem;

            @media (max-width: 374px) {
                font-size: 1rem;
            }
        }
    }
    
`;