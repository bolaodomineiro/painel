import styled from "styled-components";

export const Container_winners = styled.section`
    display: flex;
    justify-content: center;
    background: #fff;
    height: auto;
    width: 100%;
    padding: 50px 0  30px 0;

    .winners_area {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 95%;

        .winners_area_header {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 20px ;
            background:#F3EED9;
            box-shadow: 1px 2px 5px rgba(29, 29, 29, 0.2);

            @media (max-width: 430px) {
                flex-direction: column;
            }

            p {
                font-size:1rem;
                font-weight: 500;
            }
        }

        .winners_area_main {
            display: flex;
            flex-direction: column;
            gap: 10px;
            overflow: auto;
            padding: 10px 0px;

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
                    height:100% ;
                    padding: 5px 0;
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
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #242222;
                    color: #fff;
                    padding: 0 15px;
                    border-radius: 5px 0 0 5px;
                    font-size: 1rem;
                    font-weight: 900;
                }

                .userInfo {
                    width: 140px;
                }

                .prize {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    background-color:rgb(212, 212, 212);
                    color: #000;
                    width: 120px;
                    padding: 0 15px;

                    p {
                        color: green;
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
            width:100%;
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
`;