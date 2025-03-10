import styled from "styled-components";

export const Container_awards = styled.section`
    display: flex;
    width: 100%;
    padding: 10px 10px;
    justify-content: center;
    align-items: center;
    background: #fff;

    .awards_area {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;


        .awards_area_header {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            align-items: center;
            justify-content: center;
            padding: 20px 10px;
            background:#242222;
            color: #fff;
            gap: 10px;
            border-radius: 8px;


            p {
                font-size: 1rem;
                font-weight: 300;

                @media (max-width: 663px) {
                    font-size: 0.7rem;
                    text-align: center;
                }

                @media (max-width: 430px) {
                    font-size: 0.6rem;
                }
            }

            span {
                font-weight: 900;
                font-size: 1.2rem;
                padding:  0 5px;

                @media (max-width: 663px) {
                    font-size: 1rem;
                }

                @media (max-width: 430px) {
                    font-size: 0.8rem;
                }
            }
        }
    }

    .awards_area_main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        overflow: auto;

        .award_box {
            display: flex;
            width: 100%;
            min-width: 750px;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            background-color:rgb(229, 229, 229);
            border-radius: 8px;
            box-shadow: 1px 1px 5px rgba(46, 46, 46, 0.3);
            margin: auto;
            padding: 0px 20px;

            &:nth-child(even) {
                background-color:rgb(203, 203, 203);
            }


            div {
                display: flex;
                flex-direction: column;
                height: 100%;
                border-radius:  8px;
            }

            .pts {
                padding: 10px;
                align-items: start;
            }

            h4 {
                font-size: 0.8rem;
                font-weight: 900;
                text-align: center;
                padding-bottom: 5px ;
            }

            p {
                font-size: 0.7rem;
                font-weight: 700;
                text-align: center;
            }

            span {
                font-size: 1rem;
                font-weight: 900;
                text-align: center;
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
            }
        }
    }
`