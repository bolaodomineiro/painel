import styled from "styled-components";

export const Container_home = styled.section`
    width: 100%;
    background: #ccc;
    padding-top: 10px;
    position: relative;


    .container_cards {
        display: flex;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
        padding: 10px;
        margin-top: 40px;
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
    min-height: 100svh;
    padding: 0.5em;
    background-color: #f1f1f1;
    border-top: 5px solid #AB0519;

    .header_contests{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 0.5em;
        gap: 5px;

        @media (max-width: 430px) {
            justify-content: center;
        }

        p {
            font-size: 1em;
            font-weight: 900;
            padding-bottom: 0.4em;

            @media (max-width: 430px) {
                font-size: 0.8em;
                text-align: center;
            }
        }


        .header_infor {
            display: flex;
            flex-direction: column;
            align-items: center;

            p {
                font-size: 0.8em;
                font-weight: 900;
                color: #fff;
            }

            .title {
                font-size: 1em;
                font-weight: 700;
                text-align: center;
                padding: 0.5em;
                background-color:#fff;
                box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.3);
                color: #000;
                border-radius: 4px;
                margin-right: 0.5em;

                @media (max-width: 430px) {
                    font-size: 0.8em;
                }
            }
        }
    }
    
    .header_select {
    
        p {
            font-size: 0.8em;
            font-weight: 900;
            color: #fff;
        }
    
        .select {
            height: 30px;
            border-radius: 5px;
            background-color: white;
            color: #333;
            font-size: 0.8em;
            cursor: pointer;

            @media (max-width: 430px) {
                height: 26px;
                font-size: 0.8em;
            }
        }
    }


    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ;
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
        gap: 5px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        
        li {
            font-size: 0.9em;
            font-weight: 500;
            background-color: #fff;
            padding: 0.5em;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s;

            @media (max-width: 430px) {
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
        min-height: 100vh;
        padding: 0.6em;
        
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
            font-size: 0.6rem;
            font-weight: 400;
        }

        .primeio {
            font-size: 0.7rem;
            font-weight: 900;
        }

        .icon {
            width: 40px;
            height: 40px;
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