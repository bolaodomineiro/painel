import styled from "styled-components";

export const Container_reports = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 50px 10px;
    justify-content: center;
    align-items: center;
    background: #fff;
    position: relative;

    .container_cards {
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
        padding: 15px;
    }

    .participante-list {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        overflow: auto;

        ul {
            display: flex;
            align-items: center;
            // justify-content: center;
            width: 100%;
            min-width: 1010px;
            list-style: none;
            padding: 5px 0 ;
            background-color:rgb(218, 218, 218);

            &:nth-child(even) {
                background-color:rgb(187, 187, 187);
            }

            li {
                text-align: center;
                font-size: 0.8rem;
                font-weight: 700;
                padding: 3px 10px;
                color: #000;
            }

            li:nth-child(1) {
                min-width: 30px;
                font-size: 1rem;
                font-weight: 900;
            } 
            
            li:nth-child(2) {
                min-width: 120px;
            } 

            li:nth-child(3) {
                min-width: 160px;
            } 

            li:nth-child(4) {
                min-width: 120px;
            } 

            li:nth-child(5) {
                flex: 1;
            }     
                
            li:nth-child(6) {
                min-width: 62px;
                font-size: 1rem;
                font-weight: 900;
                padding: 5px;
                border-radius: 4px;
                background-color:rgb(255, 255, 255);
            }

            li:nth-child(7) {
                max-width: 125px;
                font-size: 0.7rem;
            }

            .numbers {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;

                .ball {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 30px;
                    height: 30px;
                    background-color:rgb(255, 255, 255);
                    color: #000;
                    font-size: 0.7rem;
                    font-weight: 600;
                    padding: 2px 6px;
                    border-radius: 50%;
                    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.3);
                }

            }

            .paid {
                background-color:rgb(0, 255, 0);
                margin-right: 5px;
                padding: 10px;
                border-radius: 5px;
                font-size: 0.8rem;
                font-weight: 900;
            }
        }
    }
    
    .btn_download {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
        padding: 14px 20px;
        border-radius: 5px;
        background-color:#AB0519;
        box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.3);
        color: #fff;
        cursor: pointer;
        position: fixed;
        bottom: 20px;
        right: 20px;
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: #000;
        }
    }

    .report-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

`

export const Container_card = styled.div`
    flex: 1;
    max-width: 240px;
    min-width: 240px;
    padding-top: 10px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);

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
            bottom: 8px;
            right: 5px;
            font-size: 0.8rem;
            font-weight: 900;
            color: #fff;
            border-radius: 4px;
            padding: 0.5em 0.8em;
            color: #000;
            animation: acumulado 0.3s linear infinite;
        }

        @keyframes acumulado {
            0%{
                border: 3px solid red;
            }
            50%{
                border: 3px solid  green;
            }
            100%{
                border: 3px solid yellow;
            }
        }

        h5 {
            font-size: 0.7rem;
            font-weight: 400;
        }

        h3 {
            font-size: 1.2rem;
            font-weight: 900;
            padding-bottom: 6px;

            @media (max-width: 474px) {
                font-size: 1rem;
            }
        }

        p {
            font-size: 0.9rem;
            font-weight: 900;
            @media (max-width: 474px) {
                font-size: 0.8rem;
            }
        }

        .description {
            font-size: 0.7rem;
            font-weight: 400;
            height: 40px;
    
        }

        .primeio {
            font-size: 1rem;
            font-weight: 900;
        }

        .icon {
            position: absolute;
            width: 50px;
            height: 50px;
            color: rgba(0, 128, 9, 0.89);
            right: 10px;
            top: 10px;
        }
    }

    .container_bottom {
        display: flex;
        height: 30px;
        align-items: center;
        justify-content: center;
        gap: 20px;
        border-radius: 0 0 6px 6px;
        color: #fff;
        cursor: pointer;

        span {
            font-size: 0.8rem;
            font-weight: 900;
            animation: alertHoje 0.2s linear infinite;
            padding: 0.2em 0.8em;
        }

        @keyframes alertHoje {
            0%{
                background-color: red;
            }
            40%{
                background-color: green;
            }
            100%{
                background-color: yellow;
            }
        }

        p {
            font-size: 0.7rem;
            font-weight: 900;
        }

        &:hover {
            background: rgba(0, 0, 0, 0.3);
        }
    }

`

export const Report_area = styled.div`
    width: 100%;

    .report-container-header {
        display: flex;
        align-items: center;
        flex-direction: column;

        .logo {
            display: flex;  
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 76px;
            padding: 20px 10px;
            background: #242222;
            color: #fff;
            border-radius: 8px 8px 0 0;
            position: relative;

            img {
                position: absolute;
                left: 30px;
                top: 12px;
            }
        }

        .report-infos-bet {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 10px;
            padding: 10px 0;
            align-items: center;

            h3{
                font-size: 1.6rem;
                font-weight: 900;
                padding: 10px 0;
                width: 100%;
                text-align: center;
                color:#fff;
            }

            p {
                display: flex;
                align-items: center;
                font-size: 0.9rem;
                font-weight: 900;
                padding: 10px 20px;
                text-align: center;
                border-radius: 4px;
                box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);

                span {
                    font-size: 1.3rem;
                    font-weight: 900;
                    color: green;
                    padding-right: 10px;
                }
            }
        }

        .report-infos-rules {
            display: flex;
            flex-wrap: wrap;
            Justify-content:Center;
            width: 100%;
            gap: 10px;
            padding: 15px;
            background: #f2f2f2;

            .rule-card {
                display: flex;
                flex-direction: column;
                gap: 5px;
                padding: 10px 0 0;
                align-items: center;
                box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
                border-radius: 4px;
                overflow: hidden;
                background-color: #fff;

                h3 {
                    font-size: 0.9rem;
                    font-weight: 900;
                    padding:0 10px;
                }

                p {
                    font-size: 0.7rem;
                    font-weight: 500;
                    padding:0 10px;
                }

                .validate {
                    width: 100%;
                    background-color: #242222;
                    text-align: center;
                    padding: 3px 0;
                    color: #fff;
                }

                .btn-winners {
                    width: 100%;
                    background-color: #008000;
                    padding: 5px 0;
                    color: #fff;
                    border-radius: 0 0 4px 4px;
                    cursor: pointer;
                    text-align: center;
                }
            }

            .rule-not {
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding: 20px 20px;
                align-items: center;
                box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
                border-radius: 4px;
                background-color: #F3EED9;

                h3 {
                    font-size: 1rem;
                    font-weight: 900;
                }

                button {
                    width: 60%;
                    background-color: #AB0519;
                    padding: 10px 0;
                    color: #fff;
                    border-radius: 4px;
                    cursor: pointer;
                    text-align: center;
                    font-weight: bold;
                    font-size: 0.9rem;
                    border: none;
                    cursor: pointer;
                }
            }
        }

        .report-results {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding-bottom: 20px;
            gap: 15px;

            .result_box {
                width: 230px; 
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;   
                border-radius: 8px;
                box-shadow: 1px 1px 5px rgba(46, 46, 46, 0.3);
                background-color: #F3EED9;
                margin-top: 15px;


                .result_box_header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background-color: rgb(241, 241, 241);
                    width: 100%;
                    height: 110px;
                    gap: 20px;
                    padding: 10px;
                    text-align: center;

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
                    padding: 5px 5px 20px;
                    gap: 10px;

                    @media (max-width: 610px) {
                        width:240px;
                    }

                    .ball {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        background-color: #AB0519;
                        color: #fff;
                        font-size: 0.9rem;
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
                            top:6px;
                            left: 3px;
                            border-radius: 50%;
                            width: 5px;
                            height: 12px;
                            background:rgba(255, 255, 255, 0.77);
                            filter: blur(3px);
                        }
                    }
                }
            }
        
        }
        
    }   
    
    .report-container-footer {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-bottom: 4px;

        .participante-title {
            display: flex;
            width: 99.6%;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            font-weight: 900;
            background-color: #242222;
            color: #fff;
            padding: 10px 0;
            border-radius: 4px;

            @media (max-width: 375px) {
                font-size: 0.9rem;
            }
        }

        .participante-list-header {
            display: flex;
            width: 100%;
            align-items: center;
            overflow: auto;

            ul {
                display: flex;
                align-items: center;
                // justify-content: center;
                width: 100%;
                min-width: 800px;
                list-style: none;
                padding: 3px 0 0;
                margin: auto;

                li {
                    border-left: solid 4px #fff;
                    text-align: center;
                    font-weight: 900;
                    font-size: 0.7rem;
                    padding: 10px 10px;
                    color: #fff;
                    background-color: #242222;
                }

                li:nth-child(1) {
                    min-width: 30px;
                }

                li:nth-child(2) {
                    min-width: 120px;
                } 

                li:nth-child(3) {
                    min-width: 160px;
                } 

                li:nth-child(4) {
                    min-width: 120px;
                } 

                li:nth-child(5) {
                    flex: 1;
                    min-width: 410px;
                }    
                
                li:nth-child(7) {
                    min-width: 120px;
                } 
                
            }
        }
        
    }
    
`
