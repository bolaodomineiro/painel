import styled from "styled-components";

export const Container_bilhete = styled.section`
    width: 300px;
    position: fixed;
    top: 65px;
    left: 50%;
    transform: translateX(-50%);
    background:#F3EED9;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
    z-index:-1;

    .bilhete-header {
        display: flex;
        height: 50px;
        justify-content: center;
        align-items: center;

        .logo {
            padding: 10px;
            position: absolute;
            top: 0;
            left: 4px;
        }

        h2 {
            font-size: 1.2rem;
        }
    }

    .bilhete-infos {
        h3 {
            font-size: 0.8rem;
            font-weight: 900;
            text-align: center;
        }

        h5 {
            font-size: 0.7rem;
            font-weight: 500;
            text-align: center;
            padding-bottom: 5px;
        }

        .bilhete-prize {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 5px;
            background-color:#2A2828;
            color: #fff;
            
            p {
                font-size: 0.7rem;
            }
        }

        .bilhete-rules {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 15px 10px;
            color: #000;

            h3 {
                padding-bottom: 5px;
            }

            ul {
                list-style: none;
                li {
                    display: flex;
                    gap: 20px;
                }
            }

            p {
                white-space: pre;
                font-size: 0.7rem;
            }
        }

        .bilhete-concurso {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            padding: 10px 10px;
            gap: 10px;
            background-color: #fff;

            h4 {
                font-size: 0.8rem;
                font-weight: 900;
                text-align: center;
            }

            p {
                font-size: 0.7rem;
                font-weight: 500;
                text-align: center;
            }
        }

        .bilhete-userData {
            display: flex;
            flex-direction: column;
            gap: 3px;
            padding-left: 20px;
            padding-bottom: 10px;
            padding-top: 10px;

            p {
                font-size: 0.8rem;
                font-weight: 400;
            }
        }
        
    }

    .bilhete-bets {
        border-top: 1px solid #000;

        .bilhete-betsHeader {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            
            p {
                font-size: 0.9rem;
                font-weight: 500;
                text-align: center;
                background-color: green;
                padding: 5px 20px;
                border-radius: 5px;
                color: #fff;
            }
        }

        .bilhete-jogos {
            padding: 10px 10px;

            .bilhete-jogo-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                background: #f2f2f2;
                height: 70px;
                margin-bottom: 5px;
                box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);

                .bilhete-jogo-Header {
                    display: flex;
                    justify-content: space-between;
                    padding: 0 15px 5px;

                    p {
                        font-size: 0.6rem;
                        font-weight: 900;
                    }

                    span {
                        font-size: 0.6rem;
                        font-weight: 900;
                        color:green;
                    }
                }


                .bilhete-jogo {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    gap: 5px;
                    padding: 5px 5px 8px;

                    span {
                        font-size: 0.8rem;
                        font-weight: 500;
                    }
                    
                    .ball {

                        padding: 5px;
                        border-radius: 50%;
                        background: #AB0519;
                        color: #fff;
                        font-weight: 900;
                        font-size: 0.6rem;
                        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
                    }
                
                }
            
            }
        }

        .bilhete-total-price {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 5px 20px;
            gap: 15px;

            h4 {
                font-size: 0.7rem;
                font-weight: 900;
                text-align: center;
                padding-bottom: 5px ;
            }
        }
    }

    .bilhete-footer {

        .bilhete-footer-header {
            h4 {
                font-size: 0.7rem;
                font-weight: 900;
                text-align: center;
            }

            p {
                font-size: 0.7rem;
                font-weight: 500;
                text-align: center;
            }
        }

        .bilhete-footer-qr {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 10px;

            img {
                width: 100px;
            }

            p {
                font-size: 0.7rem;
                font-weight: 500;
                text-align: center;
                padding-top: 8px;
            }
        }

        .bilhete-footer-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-bottom: 10px;

            .bilhete-footer-contact {
                background-color:#fff;
                margin-bottom: 5px;
                margin-top: 8px;
                padding: 10px 30px;

                p {
                    font-size: 0.8rem;
                    font-weight: 500;
                    word-spacing: 10px;
                    padding: 2px 0;
                }
            }
        }

    }

    .bilhete-footer-copyright {
        font-size: 0.7rem;
        font-weight: 500;
        text-align: center;
        background-color:#242222;
        color: #fff;
        padding: 5px 0;
    }

`