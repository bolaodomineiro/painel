import styled from "styled-components";

export const Container_bets = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    height: auto;
    width: 100%;
    position: relative;
    border-radius: 10px;
    padding: 10px;    

    .container-bets {
        width:100%;
        border-radius: 10px;
        padding: 10px;

        h2 {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            width: 150px;
            font-size: 1.3rem;
            font-weight: 900;
            background-color:#F3EED9;
            border-radius: 10px;
        }

        .bets {

            margin-top: 20px;
            
            .aposta {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
                padding: 20px;
                gap: 10px;
                margin-bottom: 20px;

                &:nth-child(odd) {
                    background-color:rgb(228, 227, 227);
                }

                .title {
                    font-size: 1rem;
                    font-weight: 900;
                    padding-bottom: 10px;

                    @media (max-width: 475px) {
                        text-align: center;
                    }
                }

                .balls-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;

                    @media (max-width: 475px) {
                        justify-content: center;
                        gap: 5px;
                    }
                    
                    .ball {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        background-color: #AB0519;
                        color: #fff;

                        @media (max-width: 475px) {
                            width: 25px;
                            height: 25px;
                            font-size: 0.7rem;
                        }
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
                        padding: 10px;
                        background-color: rgb(255, 255, 255);
                        color: #000;
                        cursor: pointer;
                        border-radius: 5px;
                        font-size: 0.9rem;
                        font-weight: 900;
                        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);

                        .icon {
                            font-size: 2rem;
                            font-weight: 900;
                            color: green
                        }

                        @media (max-width: 475px) {
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
                        cursor: pointer;
                        border-radius: 5px;
                        font-size: 0.9rem;    
                        font-weight: 900;

                        @media (max-width: 475px) {
                            width: 100%;
                        }
                    }

                    button {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 10px;
                        padding: 10px;
                        background-color: rgb(0, 128, 0);
                        color: #fff;
                        cursor: pointer;
                        border-radius: 5px;
                        outline: none;
                        border: none;
                        font-weight: 900;
                        font-size: 0.9rem;    

                        @media (max-width: 475px) {
                            width: 100%;
                        }
                    }

                    .bilhete {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 10px;
                        padding: 10px;
                        background-color: #242222;
                        color: #fff;
                        cursor: pointer;
                        border-radius: 5px;
                        outline: none;
                        border: none;
                        font-size: 0.9rem;
                        font-weight: 900;
                        @media (max-width: 475px) {
                            width: 100%;
                        }
                    }
                    
                }
            }
        }

        .no-bets {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.3rem;
            font-weight: 900;
            border-radius: 10px;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
            padding: 20px;
            margin-top: 20px;
        }
    }
`