import styled from "styled-components";

export const ContainerLogin = styled.section`
height: 100svh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px 10px 15px;
background-color: #fff;

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
    position: relative;
    margin-top: 70px;

    .logo-container {
        position: absolute;
        top: -110px;
    }

    h3 {
        font-size: 1.2rem;
        padding-bottom: 4px;
        border-bottom: 3px solid #AB0519;
        margin-top: 15px;
    }

    label {
        display:block;
        font-weight:600;
        font-size: 0.8rem;
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
        font-size: 0.8rem;
        font-weight: bold;
    }


    button {
        width: 250px;
        padding: 10px 0px;
        margin-top: 10px;
        background-color: #AB0519;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: bold;
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
        trasition: all 0.3s ease;

    &:hover {
        background-color: #e30b24;
    }
}
    .recovery-password {
        font-size: 0.8rem;
        font-weight: bold;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
            color: #AB0519;
            text-decoration: underline;
        }
    }

.password-container {
    position: relative;
    .eye-icon {
        position: absolute;
        font-size: 0.8rem;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        cursor: pointer;
    }
}



`