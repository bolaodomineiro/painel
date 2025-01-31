import styled from "styled-components";

export const Container_jogo = styled.section`
    background: #fff;
    min-height: 100svh;
    width: 100%;

    .jogo-balls {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .balls-header {
            display: flex;
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            padding: 20px 0;
            gap: 5px;

            h3 {
                font-size: 0.9rem;
                font-weight: 900;
            }

            p{
                font-weight: 500;
            }
        }

        .balls-container {
            display: flex;
            width: 94%;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 17px;
            border-radius: 6px;

            .balls {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #AB0519;
                color: #fff;
                font-weight: 900;
                font-size: 0.9rem;
                cursor: pointer;
                trasition: all 0.2s;
                box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);

                &:hover {
                    background:rgb(250, 13, 40);
                    color:#fff;
                }

                @media (max-width: 475px) {
                    width: 40px;
                    height: 40px;
                }

                @media (max-width: 375px) {
                    width: 30px;
                    height: 30px;
                }
        }


    }

`
