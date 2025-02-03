import styled from "styled-components";

export const Container_error = styled.section`
    display: flex;
    height: 100svh;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 20px;

    .error-container {
        padding: 30px 20px;
        border-radius: 10px;
        background-color: #F3EED9;
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
        text-align: center;

        img {
            width: 150px;
        }

        h1 {
            font-size: 5vh;
            font-weight: 900;
            color: #AB0519;
            text-transform: uppercase;
            padding: 10px 0;
        }

        p {
            font-size: 2.5vh;
            font-weight: 600;
            color:rgb(0, 0, 0);
            max-width: 300px;
        }

        button {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #AB0519;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
            trasition: all 0.3s ease;

            &:hover {
                background-color: #e30b24;
            }
        }
    }


`