import styled from "styled-components";

export const Container_bets = styled.section`
    display: flex;
    justify-content: center;
    background: #fff;
    height: auto;
    width: 100%;
    position: relative;
    border-radius: 0px;  

    .container-bets {
        display: flex;
        flex-direction: column;
        align-items: center;
        width:100%;
        padding: 50px 10px;

        h2 {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            width: 150px;
            font-size: 1.3rem;
            font-weight: 900;
            background-color: #242222;
            border-radius:5px;
            color: #fff;
        }

        .bets {
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
            margin-top: 20px;

            @media (max-width: 575px) {
                max-width: 300px;
            }
            
            .aposta {
                display: flex;
                width: 100%;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
                border-radius: 10px;
                gap: 10px;
                margin-bottom: 20px;
                padding: 15px;

                .title-price {
                    display: flex;
                    width: 100%;
                    gap: 10px;
                    padding-bottom: 10px;

                    .title {
                        font-size: 1.2rem;
                        font-weight: 900;
                    }

                    .price {
                        font-size: 1rem;
                        font-weight: 900;
                        color: green;
                    }

                    @media (max-width: 575px) {
                        flex-direction: column;
                        align-items: center;
                    }
                }

                .balls-container {
                    display: flex;
                    justify-content: center;
                    
                    
                    .balls{
                        display: flex;
                        width: 100%;
                        flex-wrap: wrap;
                        padding: 10px 0;
                        gap: 10px;

                        .ball {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;
                            background-color:rgb(228, 227, 227);
                            color: #242222;
                            font-weight: 900;
                            box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
                            position: relative;

                            @media (max-width:375px) {
                                width: 30px;
                                height: 30px;
                            }
                        }

                        .ball::after {
                            content: " ";  
                            position: absolute;
                            top:4.5px;
                            left: 4px;
                            border-radius: 50%;
                            width: 5px;
                            height: 12px;
                            background:rgb(255, 255, 255);
                            filter: blur(2.5px);
                        }
                        
                        @media (max-width: 575px) {
                            width: 250px;
                            padding-left: 5px;
                        }

                        @media (max-width:375px) {
                            width: 200px;
                        }
                    }
                }
                
                .date {
                    font-size: 0.9rem;
                    font-weight: 900;
                    padding-top: 10px ;

                    p {
                        margin-bottom: 8px;
                        font-weight: 400;
                    }

                    @media (max-width: 575px) {
                        text-align: center;
                    }
                }

                .action-status {
                    
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;

                    .whatsapp {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 10px;
                        padding: 6.5px 10px;
                        background-color: rgb(255, 255, 255);
                        color: #000;
                        cursor: pointer;
                        border-radius: 5px;
                        font-size: 0.9rem;
                        font-weight: 900;
                        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);

                        .icon {
                            font-size: 1.5rem;
                            font-weight: 900;
                            color: green
                        }

                        @media (max-width: 575px) {
                            width: 100%;
                        }

                        @media (max-width: 375px) {
                            font-size: 0.6rem;
                            
                            .icon {
                                font-size: 1.5rem;
                            }
                        }
                    }

                    .status {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 10px;
                        padding: 10px;
                        background-color:#f29b12;
                        color: #fff;
                        border-radius: 5px;
                        font-size: 0.9rem;    
                        font-weight: 900;

                        @media (max-width: 575px) {
                            width: 100%;
                        }
                    }

                    button {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 10px;
                        width: 170px;
                        padding: 10px 20px;
                        background-color: green;
                        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
                        color: #fff;
                        cursor: pointer;
                        border-radius: 5px;
                        outline: none;
                        border: none;
                        font-weight: 900;
                        font-size: 0.9rem;    

                        @media (max-width: 575px) {
                            width: 100%;
                        }
                    }

                    .bilhete {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 10px;
                        padding: 10px 20px;
                        background-color:rgb(255, 255, 255);
                        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
                        color: #000;
                        border-radius: 5px;
                        outline: none;
                        border: none;
                        font-size: 0.9rem;
                        font-weight: 900;

                        @media (max-width: 575px) {
                            width: 100%;
                            text-align: center;
                        }
                    }
                    
                }

                @media (max-width: 575px) {
                    justify-content: center;
                }
            }
        }

        .not_sorteio {
            display: flex;
            width:95%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background-color: #F3EED9;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 1px 1px 5px rgba(46, 46, 46, 0.3);
        }
    }
`
