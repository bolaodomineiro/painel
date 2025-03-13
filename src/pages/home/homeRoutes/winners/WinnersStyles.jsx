import styled from "styled-components";

export const Container_winners = styled.section`
    display: flex;
    width: 100%;
    padding: 50px 10px;
    justify-content: center;
    align-items: center;
    background: #fff;
    

    .winners_area {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;

        .winners_area_header {
            display: flex;
            width:100%;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding: 20px ;
            background:#F3EED9;
            box-shadow: 1px 2px 5px rgba(29, 29, 29, 0.2);

            @media (max-width: 530px) {
                flex-direction: column;
                align-items: flex-start;
            }

            p {
                font-size:1rem;
                font-weight: 900;
            }
        }

        .winners_area_main {
            display: flex;
            width: 100%;
            flex-direction: column;
            gap: 10px;
            overflow: auto;
            padding: 20px 0px;

            &::-webkit-scrollbar {
                width: 5px;
                height: 5px;
            }

            &::-webkit-scrollbar-track {
                background:rgba(255, 255, 255, 0);
            }

            &::-webkit-scrollbar-thumb {
                background: #888;
                border-radius: 5px;
            }

            &::-webkit-scrollbar-thumb:hover {
                background: #000;
            }

            .winners_box {
                display: flex;
                min-width: 900px;
                align-items: center;
                justify-content: space-between;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
                border-radius: 5px;
                background-color:#f2f2f2;

                &:nth-child(even) {
                    background-color:rgb(223, 223, 223);
                }

                div {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height:60px;
                }

                h4 {
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                }

                p {
                    font-size: 0.7rem;
                    font-weight: 500;
                }

                .indicator {
                    color: #fff;
                    padding: 0 15px;
                    border-radius: 5px 0 0 5px;
                    font-size: 1rem;                   
                    font-weight: 900;
                }

                .userInfo {
                    width: 140px;
                    background-color:rgb(255, 255, 255);
                    padding: 0 15px;
                }

                .prize {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    color: #000;
                    width: 120px;
                    padding: 0 15px;

                    p {
                        color: green;
                        font-size: 1rem;
                        font-weight: 900;
                    }
                }

                .acertos {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background-color:green;
                    color: #fff;
                    padding: 0 15px;

                    p {
                        font-size: 1rem;
                        font-weight: 500;
                    }
                }


                button {
                    height: 100%;
                    background-color:#242222;
                    color: #fff;
                    padding: 5px 15px;
                    border-radius: 0 5px 5px 0;
                    border: none;
                    font-size: 0.8rem;
                    font-weight: 900;
                    cursor: pointer;

                    &:hover {
                        background-color:#AB0519;
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

                @media (max-width: 350px) {
                    flex-direction: column;
                }
            }
        }
    }
`;
