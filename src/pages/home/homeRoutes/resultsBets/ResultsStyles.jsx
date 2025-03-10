import styled from "styled-components";

export const Container_resultsBets = styled.section`
    display: flex;
    width: 100%;
    padding: 50px 10px;
    justify-content: center;
    align-items: center;
    background: #fff;
    
    .results_area {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        .results_header {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            padding: 20px 10px;
            background:#242222;
            color: #fff;
            gap: 20px;
            border-radius: 8px;
            
            p {
                font-size: 1rem;
                font-weight: 300;
                
                @media (max-width: 610px) {
                    font-size: 0.8rem;
                    text-align: center;
                }
                
                span {
                    font-weight: 900;
                    padding-right:  10px;
                }
            }
        }

        .results_main {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px 0;
            width: 100%;
            height: 100%;
            gap: 20px;

            .result_box {
                width: 100%; 
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 10px;   
                border-radius: 8px;
                box-shadow: 1px 1px 5px rgba(46, 46, 46, 0.3);
                background-color: #F3EED9;

                .result_box_header {
                    display: flex;
                    align-items: center;
                    background-color: rgb(241, 241, 241);
                    width: 100%;
                    gap: 20px;
                    padding: 10px 20px;

                    @media (max-width: 610px) {
                        gap: 10px;
                        flex-direction: column;
                    }

                    h3 {
                        font-size: 1.2rem;
                        font-weight: 600;
                        background-color:rgb(205, 204, 204);
                        padding: 5px 15px;
                        border-radius: 8px;
                        
                    }

                    p {
                        font-size: 1rem;
                        font-weight: 900;

                        @media (max-width: 610px) {
                            font-size: 0.8rem;
                        }
                    }
                }

                .container_balls {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                    padding: 10px 10px 20px;
                    gap: 10px;

                    @media (max-width: 610px) {
                        width:240px;
                    }

                    .ball {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        background-color: #AB0519;
                        color: #fff;
                        font-size: 1.2rem;
                        font-weight: 600;
                        position: relative;

                        @media (max-width: 610px) {
                            width: 30px;
                            height: 30px;
                            font-size: 0.9rem;
                        }


                        &::before {
                            content: " ";  
                            position: absolute;
                            top:8px;
                            left: 5px;
                            border-radius: 50%;
                            width: 5px;
                            height: 12px;
                            background:rgb(255, 255, 255);
                            filter: blur(3px);
                        }
                    }
                }
            }
        }

        .results_footer {
            display: flex;
            flex-direction: column;
            align-items: center;;
            width: 100%;
            height: 100%;

            .results_footer_header {
                display: flex;
                width: 100%;
                flex-direction: column;
                align-items: center;
                gap: 10px;
                background-color:#242222;
                padding: 20px;
                border-radius: 8px 8px 0 0;
                color: #fff;

                @media (max-width: 610px) {
                    padding: 10px;
                    font-size: 0.8rem;
                    text-align: center;

                    p {
                        font-size: 0.7rem;
                        text-align: center;
                    }
                }
            }

            .footer_balls {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                padding: 10px 20px;
                background-color: #F3EED9;
                &:nth-child(even) {
                    background-color: rgb(239, 236, 236); /* Cor de fundo para elementos pares */
                }

                @media (max-width: 610px) {
                    padding:10px;
                }

                span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #000;
                    font-size: 1.4rem;
                    font-weight: 900;
                    position: relative;

                    @media (max-width: 610px) {
                        font-size: 0.7rem;
                    }
                }
            }
        }

        .not_sorteio {
            display: flex;
            width:92%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            gap: 10px;
            background-color: #F3EED9;
            padding: 20px;
            line-height: 1.6;
            border-radius: 8px;
            box-shadow: 1px 1px 5px rgba(46, 46, 46, 0.3);

            .icon {
                animation: spin 3s infinite linear;
                font-size: 1.4rem;
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
            }

            .loading {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }
        }
    }
`