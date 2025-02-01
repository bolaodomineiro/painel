import styled from "styled-components";

export const Container_header = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    background: #F3EED9;
    min-height: 50px;
    padding: 0 5px;
    position: fixed;
    top: 0;
    gap: 5px;
    z-index: 2;
    box-shadow: 1px 2px 6px #7979797c;

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
        font-size: 0.9rem;
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
    }   

    .cart {
        display: flex;
        align-items: center;
        gap: 10px;
        position: relative;


        .icon-cart {
            font-size: 2.4rem;
            cursor: pointer;
            color:rgb(0, 0, 0);
            position: relative;
        }
            
        .balls-count  {
            position: absolute;
            top: 2px;
            left: 15px;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.9rem;
            font-weight: 900;
            color: #fff;
            z-index: 1;
            cursor: pointer;
        }

        .price {
            position: relative;
            min-width: 80px;
            top: 2px;
            right: 8px;
            font-size: 0.7rem;
            font-weight: 900;
            background-color: #AB0519;
            color: #fff;
            border-radius: 4px;
            padding: 0.2em 0.4em;
            text-align: center;

            &:after {
                content: "";
                position: absolute;
                top: 0.5px;
                left: -6px;
                width: 0;
                height: 0;
                border-top: 9px solid transparent;
                border-bottom: 9px solid transparent;
                border-right: 9px solid #AB0519;
            }
        }
        
    }

    .select-boalls {
        flex: 1;
        height: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        background-color: #323030;
        border-radius: 0 0 10px 10px;
        trasition: all 0.5s;
        animation: balls-animation 0.2s ease forwards ;
        gap: 20px;


        @media (max-width: 775px) {
            width: 100%;
            height: auto;
            position: fixed;
            left: 32px;
            top: 50px;
            border-radius: 10px 0 0 10px;
            gap: 6px;
            padding: 10px 40px 10px 10px;
        }


        .ball {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
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

            @media (max-width: 546px) {
                width: 40px;
                height: 40px;
            }

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

`;
