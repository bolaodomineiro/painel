import styled from "styled-components";

export const Container_header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #F3EED9;
    min-height: 50px;
    width: 100%;
    padding: ${ props => props.$menuToggle ? "0 45px 0 10px" : "0 175px 0 10px" };
    position: fixed;
    top: 0;
    gap: 5px;
    z-index: 3;
    box-shadow: 1px 2px 6px #7979797c;

    .left-container {
        display: flex;
        align-items: center;
        gap: 10px;


        h3 {
            font-size: 0.9rem;
            font-weight: 900;
        }

        .icon {
            width: 25px;
            height: 25px;
            cursor: pointer;
            color: #000;
            trasition: all 0.5s;
            position: relative;
            z-index: 1;

            &:hover {
                color:  #AB0519;;
            }

            @media (max-width: 460px) {
                display: none;
            }
        }   


        .select-boalls {
            height: 50px;
            display: flex;
            flex-wrap: wrap;
            padding: 0 10px;
            align-items: center;
            background-color:rgb(50, 48, 48);
            filter-blur: blur(0px);
            border-radius: 0 0 10px 10px;
            trasition: all 0.5s;
            animation: balls-animation 0.2s ease forwards ;
            gap: 10px;
            


            @media (max-width: 865px) {
                width: 510px;
                height: auto;
                position: fixed;
                background-color:rgba(50, 48, 48, 0.84);
                left: 54%;
                transform: translateX(-50%);
                top: 50px;
                border-radius: 0 0 10px 10px;
                gap: 10px;
                padding-left: 15px;
                padding: 10px;
            }

            @media (max-width: 545px) {
                width:275px;
                left: 55.9%;
                transform: translateX(-50%);
                padding: 15px;
            }


            .ball {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #AB0519;
                color: #fff;
                font-weight: 900;
                font-size: 0.9rem;
                cursor: pointer;
                trasition: all 0.2s;
                box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
                transition: all 0.3s ease;
                position: relative;
                animation: balls-animation 0.4s ease ;

                &:after {
                    content: "x";  
                    position: absolute;
                    top: -4px;
                    right: -6px;
                    border-radius: 50%;
                    color: #fff;
                    font-weight: 700;
                    font-size: 0.7rem;
                    display: none;
                }

                &:hover::after {
                    display: block;
                }
            }

            .ball::before {
                content: " ";  
                position: absolute;
                top:8px;
                left: 5px;
                border-radius: 50%;
                width: 5px;
                height: 12px;
                background:rgb(255, 255, 255);
                filter: blur(3px);
            }
        }

        @keyframes balls-animation {
            from {
                margin-top: -60px;
                opacity: 0.6;
            }
            to {
                margin-top: 0px;
                opacity: 1;
            }
        }
    }        

    .right-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
            
        .welcome {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            font-weight: 900;

            span {
                color: #AB0519;
            }
        }

        .saldo-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;


            p {
                font-size: 0.8rem;
                font-weight: 900;
                color: #AB0519;

                span {
                    display:flex;
                    align-items: center;
                    justify-content: center;
                    width: 88px;
                    font-size: 0.7rem;
                    font-weight: 900;
                    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
                    padding: 2px 5px;
                    background: #fff;
                    border-radius: 5px 5px 0 0;
                }
            }
        }
    }

    .message{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        width: 300px;
        padding: 20px 10px;
        background-color: #2D2E30;
        color: #fff;
        border-radius: 8px;
        position: absolute;
        top: 180px;
        transform: translateX(-50%);
        font-size: 1.3rem;
        font-weight: 500;
        text-align: center;
        z-index: 99;
        animation: message-animation 0.5s ease forwards;

        @keyframes message-animation {
            from {
                right: -700px;
            }
            to {
                right: -100px;
            }
        }

        @keyframes message-animation-mobile {
            from {
                right: -700px;
            }
            to {
                right: -42px;
            }
        }

        @media (max-width: 475px) {
            width: 190px;
            font-size: 0.9rem;
            padding: 10px;
            gap: 5px;
            animation: message-animation-mobile 0.5s ease forwards;
        }

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #AB0519;
            color: #fff;
            font-size: 1.2rem;
            position: relative;

            &::before {
                content: " ";  
                position: absolute;
                top:8px;
                left: 5px;
                border-radius: 50%;
                width: 5px;
                height: 12px;
                background:rgb(255, 255, 255);
                filter: blur(3px);
            }
        }
        
    }
`;
