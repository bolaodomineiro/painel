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
            justify-content: space-between;
            padding: 15px ;
            background:#F3EED9;
        }

        .winners_area_main {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .winners_box {
                display: flex;
                align-items: center;
                justify-content: space-between;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
                padding: 5px 20px;
                border-radius: 5px;
                background-color:#f2f2f2;

                &:nth-child(even) {
                    background-color:rgb(223, 223, 223);
                }

                div {
                    height: 100%;
                }

                h4 {
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    padding: 5px 0;
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
                    padding: 10px 15px;
                    border-radius: 5px;
                    font-size: 1.2rem;
                    font-weight: 500;
                }

                .acertos {
                    background-color:green;
                    color: #fff;
                    padding: 5px 15px;
                    border-radius: 5px;
                }

                button {
                    background-color:#242222;
                    color: #fff;
                    padding: 5px 15px;
                    border-radius: 5px;
                    border: none;
                    cursor: pointer;
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