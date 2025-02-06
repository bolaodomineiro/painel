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
        max-height: calc(100vh - 100px);
        border-radius: 10px;
        padding: 20px 10px;
        overflow: auto;

        &::-webkit-scrollbar {
            width: 3px;
            background-color: #fff;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #242222;
        }

        &::-webkit-scrollbar-track {
            background-color: transparent;
        }

        h2 {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            width: 150px;
            font-size: 1.3rem;
            font-weight: 900;
            background-color: #242222;
            border-radius: 10px;
            color: #fff;
        }

        .bets {

            margin-top: 20px;
            
            .aposta {
                display: flex;
                width: 100%;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
                padding: 20px;
                border-radius: 10px;
                gap: 10px;
                margin-bottom: 20px;

                &:nth-child(odd) {
                    background-color:rgb(228, 227, 227);
                }

                .title-price {
                    display: flex;
                    gap: 10px;
                    padding-bottom: 10px;

                    .title {
                        font-size: 1rem;
                        font-weight: 900;

                        @media (max-width: 475px) {
                            text-align: center;
                        }
                    }

                    .price {
                        font-size: 0.9rem;
                        font-weight: 900;
                        color: green;
                    }
                }

                .balls-container {
                    display: flex;
                    justify-content: center;

                    .balls{
                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;

                        @media (max-width: 475px) {
                            justify-content: center;
                            width: 73%;
                            gap: 5px;
                        }

                        @media (max-width: 325px) {
                            width: 87%;
                        }
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

                .date {
                    font-size: 0.9rem;
                    font-weight: 900;
                    padding-top: 10px ;

                    @media (max-width: 475px) {
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
                        padding:10px;
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
                        background-color: rgb(58, 58, 58);
                        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
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
                        background-color:rgb(255, 255, 255);
                        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
                        color: #000;
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
