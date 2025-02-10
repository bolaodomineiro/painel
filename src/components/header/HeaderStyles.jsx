import styled from "styled-components";

export const Container_header = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    background: #F3EED9;
    min-height: 50px;
    padding: 0 10px;
    position: fixed;
    top: 0;
    gap: 5px;
    z-index: 2;
    box-shadow: 1px 2px 6px #7979797c;

    h3 {
        font-size: 0.9rem;
        font-weight: 900;
    }

    .message{
        min-width: 280px;
        padding: 10px 20px;
        background-color: #2D2E30;
        color: #fff;
        border-radius: 8px;
        position: absolute;
        top: 180px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.8rem;
        font-weight: 900;
        text-align: center;
        z-index: 99;

        @media (max-width: 546px) {
            left: 45%;
            transform: translateX(-50%);
        }
        
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
        


        @media (max-width: 818px) {
            width: 400px;
            height: auto;
            position: fixed;
            background-color:rgba(50, 48, 48, 0.84);
            left: 54%;
            transform: translateX(-50%);
            top: 50px;
            border-radius: 0 0 10px 10px;
            gap: 10px;
            padding-left: 15px;
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

    .welcome {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        font-weight: 900;
        position: absolute;
        right: 150px;

        span {
            color: #AB0519;
        }
    }

    .saldo-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3px;
        position: absolute;
        right: 50px;

        p {
            font-size: 0.7rem;
            font-weight: 900;
            color: #AB0519;

            span {
                font-size: 0.7rem;
                font-weight: 900;
                box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
                padding: 2px 5px;
                background: #fff;
            }
        }
    }

`;
