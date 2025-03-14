import styled from "styled-components";

export const Container_View = styled.div`
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    z-index: 9999;
    top: 0;
    left: 0;
    animation: fadeIn 0.3s ease-in-out;
    overflow: auto;
    padding: 20px 0;


    @keyframes fadeIn {
        from {
        opacity: 0;
        }
        to {
        opacity: 1;
        }
    }

    .box {
        background-color: #fff;
        padding: 15px 15px 20px;
        border-radius: 5px;
        box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        animation: slideIn 0.3s ease-in-out;
        margin:auto;

        @keyframes slideIn {
            from {
            transform: translateY(-20px);
            opacity: 0;
            }
            to {
            transform: translateY(0);
            opacity: 1;
            }
        }

        .close {
            display:flex;
            justify-content: flex-end;
            width: 100%;

            .close-icone {
                font-size: 1.5rem;
                cursor: pointer;
                transition: all 0.3s;

                &:hover {
                    color: red;
                }
            }
        }

        .box_header {
            display: flex;
            width: 100%;
            align-items: center;
            flex-direction: column;
            gap: 10px;

            .box_header_title {
                display: flex;
                width: 100%;
                flex-direction: column;
                align-items: center;
                
                p{
                    font-size: 1rem;
                    font-weight: 900;
                    padding-top: 5px;
                }
            }
            
            .title {
                width: 100%;
                text-align: center;
                font-size: 1rem;
                background-color: #AB0519;
                padding: 8px 15px;
                border-radius: 5px;
                color: #fff;
                font-weight: 900;
            }
            
            .box_header_details {
                display: flex;
                align-items: center;
                gap: 100px;
                padding: 10px;
                width: 100%;
                border-radius: 5px;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);


                p{
                    font-size: 0.8rem;
                    font-weight: 900;
                }

                span {
                    background-color: red;
                    border-radius: 5px;
                    padding: 5px 10px ;
                    color: #fff;
                    font-size: 0.8rem;
                }
            }

            .details_user {
                display: flex;
                justify-content: space-between;
                width: 100%;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
                padding: 10px;

                h3 {
                    font-size: 0.9rem;
                }
                
                p{
                    font-size: 0.7rem;
                }
            }
        }

        .box_main {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            h4{
                font-size: 1.1rem;
                padding: 0px 0px 10px;
            }

            .pontos {
                h3 {
                    font-size: 1.2rem;
                    font-weight: 900;
                    padding: 10px 0 0;
                }
            }

            .balls {
                padding: 10px;
            }

            .box_details_content {
                width: 100%;

                .bilhete {
                    background-color:rgb(235, 235, 235);
                    padding: 10px;
                    border-radius: 10px;
                    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
                    border-left: solid 4px green;

                    .bilhete_header {
                        display: flex;
                        align-items:center;
                        justify-content: space-between;
                        padding: 5px 10px;
                        border-radius: 5px;
                        background-color:rgba(190, 190, 190, 0.5);

                        h3 {
                            font-size:0.9rem;
                            padding: 5px;
                            text-align:center;
                            border-radius: 5px;
                        }

                        p {
                            font-size: 0.8rem;
                        }

                        span {
                            border: solid 2px green;
                            padding: 3px 8px;
                            margin-left: 10px;
                            background-color: green;
                            border-radius: 5px;
                            color:#fff;
                        }
                    }
                    
                    .bilhete_date {
                        padding: 10px 0 0;
                        
                        h3 {
                            font-size: 0.9rem;
                        }
                        
                        p {
                            font-size: 0.9rem;
                        }
                    }
                
                }
            }
        }

        .bilhete_main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .balls {
                display: flex;
                justify-content: center;
                width: 240px;
                flex-wrap: wrap;
                gap: 10px;

                .ball {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    background-color:rgb(228, 227, 227);
                    color: #242222;
                    font-weight: 900;
                    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
                    position: relative;
                }

                .ball::after {
                    content: " ";  
                    position: absolute;
                    top:4.5px;
                    left: 4px;
                    border-radius: 50%;
                    width: 4px;
                    height: 8px;
                    background:rgb(255, 255, 255);
                    filter: blur(2.5px);
                }
            }
        }

        .bilhete_footer {
            display: flex;
            flex-direction:column;
            align-items: center;
            border-top: 1px solid #000;
            padding: 10px;

            h3 {
                font-size: 1rem;
                padding-bottom: 5px;
            }

            p {
                font-size: 0.8rem;
                font-weight: 900;
                padding: 8px 15px ;
                background-color:green;
                border-radius: 8px;
                color: #fff;
            }
        }

        .box_footer {
            width: 100%;

            h3 {
                width: 100%;
                text-align: center;
                padding: 8px 15px;
                border-radius: 5px;
                font-size: 1.2rem;
                padding: 10px;
                margin-top: 10px;
                background-color:#f2f2f2;
                box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
            }

            .bilhete {
                background-color: #f2f2f2;
                width: 100%;
                padding: 10px;
                border-radius: 10px;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
                border-left: solid 4px green;
                margin-top: 15px;

                &:nth-child(odd) {
                    background-color:rgb(221, 221, 221);
                }

                .bilhete_header, .bilhete_date {
                    display: flex;
                    gap: 10px;
                    width: 100%;
                    text-align: center;
                    padding: 5px 10px;
                }

                .bilhete_main {
                    padding: 10px;

                    .balls {
                        width: 200px;
                    }
                }
            
            }
        }
    }

`