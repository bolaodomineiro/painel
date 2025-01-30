import styled from "styled-components";

export const Container_card = styled.div`
    flex: 1;
    min-width: 175px; ;
    max-width: 270px;
    padding-top: 5px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
    

    @media (max-width: 550px) {
        min-width: 180px;
    }

    @media (max-width: 375px) {
        min-width: 100%;
    }

    .container_top {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 16px;
        position: relative;
        gap: 5px;
        position: relative;

        .acumulado_text{
            position: absolute;
            bottom: 5px;
            right: 10px;
            font-size: 0.7rem;
            font-weight: 500;
            background-color: rgb(61, 67, 60);
            color: #fff;
            border-radius: 4px;
            padding: 0.3em 0.5em;
        }

        h5 {
            font-size: 0.8rem;
            font-weight: 400;
        }

        h3 {
            font-size: 1.5rem;
            font-weight: 900;
            padding-bottom: 6px;

            @media (max-width: 374px) {
                font-size: 1rem;
            }
        }

        p {
            font-size: 1rem;
            font-weight: 900;

            @media (max-width: 374px) {
                font-size: 0.9rem;
            }
        }

        .description {
            font-size: 0.7rem;
            font-weight: 400;

        }

        .primeio {
            font-size: 0.8rem;
            font-weight: 500;
        }

        .icon_img {
            width: 50px;
            height: 50px;
            color: rgba(0, 128, 9, 0.89);
            margin-right: 6px;
        }
    }

    .container_bottom {
        display: flex;
        height: 30px;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 0 10px;
        border-radius: 0 0 6px 6px;
        color: #fff;
        background: rgba(165, 14, 14, 0.6);
        cursor: pointer;

        p {
            font-size: 0.8rem;
        }

        &:hover {
            background: rgba(0, 0, 0, 0.3);
        }
    }

`