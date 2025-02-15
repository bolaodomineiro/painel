import styled from "styled-components";

export const Container_home = styled.section`
    width: 100%;
    position: relative;
    overflow: hidden;


    .container_cards {
        display: flex;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
        padding: 10px;
        margin-top: 50px;
        padding-bottom: 12px;
        background-color: #f2f2f2;
    }

    .infor_area {
        flex: 1;
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        text-align: center;

        img {
            width: 140px;
            height: 140px;

            @media (max-width: 500px) {
                width: 120px;
                height: 120px;
            }
        }

        h1 {
            font-size: 1.6rem;
            color: #AB0519;

            @media (max-width: 500px) {
                font-size: 1.2rem;
            }
        }

        p {
            font-size: 1.1rem;

            @media (max-width: 374px) {
                font-size: 1rem;
            }
        }
    }
    
`;

export const Contests_style = styled.section`
    width: 100%;
    padding-top: 20px;
    
    @media (orientation: landscape) {
        padding-bottom: 100px;
    }

    .header_contests{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 0.5em;
        gap: 5px;

        @media (max-width:816px) {
            justify-content: center;
            gap: 0px;
        }

        p {
            font-size: 1em;
            font-weight: 900;
            padding-bottom: 0.4em;

            @media (max-width: 6000px) {
                font-size: 0.8em;
                text-align: center;
            }
        }


        .header_infor {
            display: flex;
            flex-direction: column;
            align-items: center;

            p {
                font-size: 1em;
                font-weight: 900;
                color: #fff;
            }

            .title {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 40px;
                width: 185px;
                font-size: 1em;
                font-weight: 700;
                background-color:#fff;
                box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.3);
                color: #000;
                border-radius: 4px;
                margin-right: 0.5em;

            }
        }
    }
    
    .header_select {
        p {
            font-size: 01em;
            font-weight: 900;
            color: #fff;
        }
    
        .select {
            height: 40px;
            width: 185px;
            border-radius: 5px;
            background-color: white;
            color: #333;
            font-size: 0.8em;
            font-weight: 900;
            cursor: pointer;

            @media (max-width: 500px) {
                font-size: 0.8em;
            }
        }

        @media (max-width: 500px) {
            margin-top: 0.5em;
            margin-bottom: 0.8em;
        }
    }


    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5em;

        .link {
            text-decoration: none;
            color: #000;
        }

        .active {
            background-color:rgb(48, 48, 48);
            color: #fff;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;

            @media (max-width: 815px) {
                padding: 0 17%;
            }

            @media (max-width: 627px) {
                padding: 0 6%;
            }

            @media (max-width: 416px) {
                padding: 0;
            }
        
            li {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 40px;
                width: 120px;
                font-size: 1em;
                font-weight: 900;
                background-color: #fff;
                border-radius: 5px;
                cursor: pointer;
                transition: all 0.2s;
                box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.3);
                text-align: center;
                line-height: 15px;

                @media (max-width: 500px) {
                    font-size: 0.8em;
                    width: 100px;
                }

                @media (max-width: 376px) {
                    width: 75px;
                    font-size: 0.7em;
                }

                &:hover {
                    background-color:rgb(48, 48, 48);
                    color: #fff;
                }
            }
        }
    }

    .routes_contests {
        padding: 1em 0.5em;
        
        @media (max-width: 500px) {
            padding-bottom: 100px;
        }
    }

`;


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
            bottom: 5px;
            right: 5px;
            font-size: 0.6rem;
            font-weight: 900;
            background-color: rgb(61, 67, 60);
            color: #fff;
            border-radius: 4px;
            padding: 0.5em 0.8em;
        }

        h5 {
            font-size: 0.7rem;
            font-weight: 400;
        }

        h3 {
            font-size: 1rem;
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
            font-size: 0.6rem;
            font-weight: 400;
            height: 40px;
    
        }

        .primeio {
            font-size: 0.7rem;
            font-weight: 900;
        }

        .icon {
            width: 40px;
            height: 50px;
            color: rgba(0, 128, 9, 0.89);
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

        p {
            font-size: 0.7rem;
            font-weight: 900;
        }

        &:hover {
            background: rgba(0, 0, 0, 0.3);
        }
    }

`