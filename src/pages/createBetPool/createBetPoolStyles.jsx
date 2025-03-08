import styled from "styled-components";

export const Container_betPool = styled.section`
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 10px ;
    background-color:rgb(255, 255, 255);


    .content {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 15px 0;
        width: 100%;
        gap: 30px;

        .card-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: 6px;
            border-radius: 8px;
            background-color:rgb(234, 232, 232);
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
            width: 250px;
            border-radius: 6px;
            overflow: hidden;
            padding: 0 0 10px 0;

            .card-header {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2px;
                padding: 5px;
                width: 92%;
                border-radius: 0 0 8px 8px; 

                .title {
                    font-size: 0.7rem;
                    font-weight: 900;
                    color:rgb(255, 255, 255);
                    text-align: center;
                    text-transform: uppercase;
                }

                .subtitle {
                    font-size: 0.6rem;
                    font-weight: 900;
                    color:rgb(255, 255, 255);
                    text-align: center;
                }
            }

            .conc {
                font-size: 0.7rem;
                font-weight: 900;
                text-align: center;
            }

            .card-description {
                padding: 3px 10px 0;
                text-align: center;
                background-color:rgb(255, 255, 255);
                width: 92%;

                h4 {
                    font-size: 0.6rem;
                    font-weight: 900;
                    color:rgb(0, 0, 0); 
                    text-align: center;
                }

                p {
                    font-size: 0.6rem;
                    font-weight: 400;
                    color:rgb(0, 0, 0);
                    padding: 5px 10px;
                }
            }

            .card-info-area {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color:rgb(255, 255, 255);
                width: 92%;
                padding: 5px 0;

                .card-info {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 0 10px;
                    gap: 3px;

                    strong {
                        font-size: 0.6rem;
                    }

                    span {
                        font-size: 0.5rem;
                        font-weight: 500;
                        color:rgb(0, 0, 0);
                    }
                }
            }

            .card-rules, .card-result {
                padding: 0 10px;
                width: 100%;

                h4 {
                    font-size: 0.6rem;
                    font-weight: 900;
                    color:rgb(0, 0, 0);
                    text-align: center;
                    text-transform: uppercase;
                    background-color:rgb(255, 255, 255);
                    padding: 5px 0;
                }

                ul {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    align-items: center;
                    list-style: none;
                    position: relative;
                    padding-top: 5px ;
                    gap: 4px;

                    li {
                        display: flex;
                        justify-content: space-between;
                        width: 100%;
                        background-color:rgb(193, 193, 193);
                        font-size: 0.6rem;
                        padding: 3px 10px;
                        margin-bottom: 5px;

                        &:nth-child(odd) {
                            background-color:rgb(212, 212, 212);
                        }

                        .results {
                            display: flex;
                            
                            justify-content: center;
                            padding: 5px 0;
                            gap: 5px;
                            font-size: 0.6rem;
                            font-weight: 900;

                            .premios {
                                display: flex;
                                width: 100%;
                                flex-direction: column;
                                justify-content: space-between;
                                align-items: center;
                                gap: 3px;

                                p {
                                    font-size: 0.6rem;
                                    font-weight: 900;
                                }

                                span {
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    font-size: 0.7rem;
                                    font-weight: 500;
                                    color:rgb(0, 0, 0);
                                }
                            }
                        }
                    }
                }

                button {
                        position: relative;
                        left: 20%;
                        width: 130px;
                        background-color:green;
                        border: none;
                        padding: 6px 0;
                        font-size: 0.6rem;
                        font-weight: 900;
                        color:rgb(255, 255, 255);
                        text-align: center;
                        text-transform: uppercase;
                        cursor: pointer;
                        transition: all 0.2s;
                        border-radius: 6px;
                        outline: none;

                        &:hover {
                            background-color:rgb(0, 0, 0);
                            color: #fff;
                        }
                        
                    }
            }

            .card-result, .card-rules { 
                ul {
                    overflow-y: auto;
                    padding: 10px 0px;
                    height: 60px;
                    margin-bottom: 7px;

                    li {
                        width: 220px;
                    }

                    &::-webkit-scrollbar {
                        width: 4px;
                        
                    }

                    &::-webkit-scrollbar-track {
                        background-color:rgb(255, 255, 255);
                    }

                    &::-webkit-scrollbar-thumb {
                        background-color:rgb(0, 0, 0);
                        cursor: pointer;
                    }
                    
                }
            }

            .card-rules {
                ul {
                    height: 50px;
                }
            }

            .card-status {
                width: 92%;

                p {
                    font-size: 0.7rem;
                    font-weight: 900;
                    color:rgb(0, 0, 0);
                    text-align: center;
                    text-transform: uppercase;
                    padding: 5px 10px;
                    background-color:rgb(255, 255, 255);
                    color: #fff;
                }
            }

            .status {
                font-size: 0.7rem;
                font-weight: 900;
                text-align: center;
                text-transform: uppercase;
                padding: 5px 0;
                color: red;
                background-color:rgb(255, 255, 255);
                width: 92%;
            }

            .finalizar-btn {
                padding: 8px 20px;
                border: none;
                background-color:#AA0000;
                color: #fff;
                font-size: 0.8rem;
                font-weight: 900;
                text-align: center;
                text-transform: uppercase;
                cursor: pointer;
                transition: all 0.2s;
                border-radius: 6px;
                margin-top: 7px;
                outline: none;

                &:hover {
                    background-color: red;
                    color: #fff;
                }
            }
            
        }
    }
`