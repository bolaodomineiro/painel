import styled from "styled-components";

export const Container_header = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    background: #F3EED9;
    min-height: 50px;
    padding: 0 15px;
    position: fixed;
    top: 0;
    
    gap: 14px;
    z-index: 2;
    box-shadow: 1px 2px 6px #7979797c;

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

    .select-boalls {
        height: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 75%;
        background-color: #323030;
        border-radius: 0 0 10px 10px;
        trasition: all 0.5s;
        animation: balls-animation 0.2s ease forwards ;
        gap: 20px;

        @media (max-width: 700px) {
            gap: 8px;
            justify-content: start;
            padding-left: 10px;
        }

        @media (max-width: 546px) {
            width: 92%;
            height: auto;
            justify-content: center;
            position: fixed;
            right: 0;
            top: 50px;
            border-radius: 10px 0 0 10px;
            gap: 6px;
            padding: 10px 50px;
            // animation: none;
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
