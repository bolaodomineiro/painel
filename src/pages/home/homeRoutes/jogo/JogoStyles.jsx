import styled from "styled-components";

export const Container_jogo = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    height: auto;
    width: 100%;
    position: relative;
    border-radius: 10px;
    padding: 0px 0  30px 0;

    .info {
        padding: 20px ;
        max-width: 280px;
        border-radius: 10px;
        background-color: #F3EED9;
        box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);

        h3 {
            font-size: 1.3rem;
            font-weight: 900;
        }

        p {
            font-size: 0.9rem;
            font-weight: 500;
            color: #ab0519;
        }

        h5 {
            font-size: 0.9rem;
            font-weight: 500;
            padding: 5px 0;
        }
    }

    .jogo-balls {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        

        .balls-header {
            display: flex;
            width: 100%;
            min-height: 40px;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            gap: 5px;
            background-color: #F3EED9;
            box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
            margin-bottom: 20px;
            border-radius: 10px 10px 0 0;
            padding: 10px 0;

            h3 {
                font-size: 1.1.2rem;
                font-weight: 900;
            }

            p{
                font-size: 1rem;
                font-weight: 500;
            }

            @media (max-width: 500px) {
                flex-direction: column;
            }
        }

        .balls-container {
            display: flex;
            width: 90%;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 17px;
            border-radius: 6px;

            @media (max-width: 575px) { 
                width: 100%;
                gap: 10px;
            }

            .balls {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background:rgb(148, 144, 145);
                color: #fff;
                font-weight: 900;
                font-size: 1rem;
                cursor: pointer;
                trasition: all 0.2s;
                box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.59);
                user-select: none;
                aoutline: none;
                position: relative;

                .ball-message {
                    min-width: 280px;
                    padding: 10px 20px;
                    position: fixed;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 40px;
                    top: 180px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color:   #2D2E30;
                    color: #fff;
                    font-weight: 500;
                    font-size: 0.8rem;
                    border-radius: 6px;
                    z-index: 2;

                    @media (max-width: 475px) {
                        left: 55%;
                        trasform: translateX(-50%);
                    }

                }

                &:hover {
                    background:rgb(250, 13, 40);
                    color:#fff;
                }

                @media (max-width: 575px) {
                    width: 40px;
                    height: 40px;
                }

            }

            .balls::after {
                content: " ";  
                position: absolute;
                top:6px;
                left: 6px;
                border-radius: 50%;
                width: 5px;
                height: 14px;
                background:rgb(255, 255, 255);
                filter: blur(2.5px);
                
            }


        }
    }

`
