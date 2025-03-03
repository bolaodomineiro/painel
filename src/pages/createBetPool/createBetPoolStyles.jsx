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
            gap: 8px;
            border-radius: 8px;
            background-color:#f2f2f2;
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
                padding: 10px;
                width: 92%;
                background-color:rgb(255, 157, 0);
                border-radius: 0 0 8px 8px; 

                .title {
                    font-size: 0.9rem;
                    font-weight: 900;
                    color:rgb(255, 255, 255);
                    text-align: center;
                    text-transform: uppercase;
                }

                .subtitle {
                    font-size: 0.7rem;
                    font-weight: 900;
                    color:rgb(255, 255, 255);
                    text-align: center;
                }
            }

            .conc {
                font-size: 0.8rem;
                font-weight: 900;
                text-align: center;
            }

            .card-description {
                padding: 0 10px;
                text-align: center;
                background-color:rgb(255, 255, 255);
                width: 92%;
                padding: 5px 0;

                h4 {
                    font-size: 0.7rem;
                    font-weight: 900;
                    color:rgb(0, 0, 0); 
                    text-align: center;
                }

                p {
                    font-size: 0.7rem;
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
                        font-size: 0.7rem;
                    }

                    span {
                        font-size: 0.6rem;
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
                    padding: 5px 0;
                    background-color:rgb(255, 255, 255);
                }

                ul {
                    width: 100%;
                    align-items: center;
                    list-style: none;
                    padding: 0 10px 10px;
                    background-color:rgb(255, 255, 255);
                    position: relative;

                    button {
                        margin: 0 40px;
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
                        margin-top: 10px;

                        &:hover {
                            background-color:rgb(0, 0, 0);
                            color: #fff;
                        }
                        
                    }

                    li {
                        display: flex;
                        gap: 10px;
                        font-size: 0.6rem;
                        font-weight: 400;
                        color:rgb(0, 0, 0);

                        span {
                            font-size: 0.6rem;
                            font-weight: 500;
                            color:rgb(0, 0, 0);
                        }
                    }
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
            
        }
    }
`