import styled from "styled-components";

export const ContainerLogin = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px 15px;
    background-color: #fff;
    margin-top: 155px;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 300px;
        border-radius: 15px;
        background-color: #F3EED9;
        padding: 20px;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);

        h3 {
            font-size: 1.2rem;
            padding-bottom: 4px;
            border-bottom: 2px solid #AB0519;
        }

        label {
            display:block;
            font-weight:600;
            font-size: 0.9rem;
            padding: 5px 0px;
            cursor: pointer;
        }

        input {
            display: flex;  
            align-items: center;
            width: 250px;
            height: 30px;
            border-radius: 5px;
            padding-left: 10px;
            cursor: pointer;
            color: #000;
            border: none;
            font-size: 0.8rem;
            font-weight: bold;
            box-shadow: inset 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
        }

        input::placeholder {
            font-size: 0.9rem;
            font-weight: bold;
        }

        .forgot{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 250px;
            height: 30px;
            border-bottom: 2px solid #AB0519;
            padding-bottom: 10px;
            font-size: 0.8rem;

            .forgot_link {
                color: #000;
                font-weight: bold;
                font-size: 0.9rem;
                text-decoration: none;
                trasition: all 0.3s ease;
                &:hover {
                    color: #AB0519;
                }
            }
        }

        button {
            width: 250px;
            padding: 10px 0px;
            margin-top: 10px;
            font-size: 1rem;
        }

        .register_link {
            color: #000;
            font-weight: bold;
            font-size: 1rem;
            transition: all 0.3s ease;
            border: 1px solid #000;
            border-radius: 20px;
            padding: 10px 30px;
            margin-top: 10px;

            &:hover {
                color: #AB0519;
                border: 1px solid #ab0519;
            }
        }
    }

    .password-container {
        position: relative;
        .eye-icon {
            position: absolute;
            font-size: 1rem;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            cursor: pointer;
        }
    }
`