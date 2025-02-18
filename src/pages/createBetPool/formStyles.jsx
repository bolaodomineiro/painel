import styled from "styled-components";

export const Container = styled.div`
    display: ${(props) => props.$showForm ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background:rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    z-index: 1000;
    padding: 20px;
    overflow: auto;
    animation: fadeIn 0.3s ease-in-out;

    .title {
        text-align: center;
        margin-bottom: 5px;
        font-size: 1.2rem;
        font-weight: 900;
    }

    .data-color, .ticket, .prize {
        display: flex;
        gap: 10px;

        .color-input {
            width: 25px;
            height: 25px;
        }
    }

    .acumulado {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;

        input {
            width: 25px;
            height: 25px;
        }
    }

    .rule-container {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: flex-start;
        padding-bottom: 8px;
        margin-top: 10px;

        .pts {
            width: 45px;
            padding-left: 5px;
        }

        .award {
            padding-left: 10px;
        }

        .icon {
            width: 30px;
            height: 16px;
            border-radius: 5px;
            border: 1px solid #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            padding: 4px;
            position: relative;
            top: 11.5px;
            background: green;
            color: #fff;
            transition: all 0.2s;

            &:hover {
                background:rgb(15, 179, 0);
            }
        }
    }

    .rule-preview {
        height: 210px;
        margin-top: 5px;
        margin-bottom: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        overflow: auto;
        padding: 10px;

        &::-webkit-scrollbar {
            width: 3px;
        }

        &::-webkit-scrollbar-track {
            background: #F3EED9;
        }

        &::-webkit-scrollbar-thumb {
            background: #AB0519;
            border-radius: 10px;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;

            li {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color:rgb(229, 229, 229);
                padding: 5px;
                border-radius: 5px;

                &:nth-child(even) {
                    background-color:rgb(198, 196, 196);
                }
                
                span {
                    font-weight: 600;
                }

                .icon {
                    transition: all 0.2s;
                    cursor: pointer;
                }

                .icon:hover {
                    color: red;
                }
            }
        }

    }

    @keyframes fadeIn {
        from {
        opacity: 0;
        }
        to {
        opacity: 1;
        }
    }

`;

export const Form = styled.form`
    background-color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: auto;
    border-radius: 8px;
    animation: slideIn 0.3s ease-in-out;

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
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5px;
`;

export const Label = styled.label`
    font-weight: bold;
    font-size: 0.8rem;
    padding: 2px 0px;
`;

export const Input = styled.input`
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 25px;
`;

export const Button = styled.button`
    
    padding: 8px;
    background-color: #AB0519;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 5px;

    &:hover {
        background-color: #0056b3;
    }
`;

export const ImagePreview = styled.img`
    width: 100px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
    margin: 10px 0;
`;
