import styled from "styled-components";

export const Container_cart = styled.section`
    background: #fff;
    transition: all 0.5s ease;
    height: 70px;
    width: 270px;
    position: fixed;
    bottom: 10px;
    right: 0px;
    display: flex;
    justify-content:space-between;
    flex-direction: column;
    border-radius: 10px 0px 0px 10px;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.49);
    overflow: hidden;


    .cart-icon-container {
        display: flex;
        align-items: center;
        justify-content:space-around;
        width: 100%;
        height: 75px;
        background:#242222;
        padding: 0 15px;
        border-radius: 10px 0 0 0px;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.49);
        cursor: pointer;


        .cart-area {
            position: relative;

            .cart-icon {
                font-size: 2.5rem;
                color:#fff;
            }
            
            .cart-count {
                position: absolute;
                width: 30px;
                height: 30px;
                top: -12px;
                right: 5px;
                left: 56%;
                transform: translateX(-50%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.8rem;
                font-weight: 900;
                color:rgb(0, 255, 4);
                z-index: 1;
                background:rgb(0, 0, 0);
                border: 3px solid #242222;
            }
        }

        p {
            font-size: 0.9rem;
            font-weight: 900;
            color:#fff;
        }

        .total-price {
            max-width: 100px;
            font-size: 0.9rem;
            appearance: none;
            background: #242222;
            outline: none;
            border: none;
            color:rgb(0, 255, 4);
            font-weight: 900;
            text-align: right;
            cursor: pointer;

        }

        .icon-close {
            position: absolute;
            right: 10px;
            top: 6px;
            font-size: 1rem;
            color:#fff;
            cursor: pointer;
        }

    }

    .main-cart {
        flex: 1;
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

        .cart-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 80px;
            background:rgb(255, 255, 255);
            margin-bottom: 10px;
            position: relative;
            border-radius: 5px;
            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.49);

            .icon-delete {
                position: absolute;
                font-size: 1.2rem;
                color:rgb(0, 0, 0);
                cursor: pointer;
                right: 10px;
                top: 8px;
                z-index: 1;
                font-weight: 900;
                font-size: 0.8rem;
                trasition: all 0.2s;

                &:hover {
                    color: #AB0519;
                }
            }

            h3 {
                font-size: 1rem;
                font-weight: 900;
                padding: 5px 5px;
            }
            
            .balls-container {
                display: flex;
                justify-content: space-between;
                padding: 2px 5px;

                .ball {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #AB0519;
                    color: #fff;
                    font-weight: 900;
                    font-size: 0.7rem;
                }
            }

            p {
                font-size: 0.7rem;
                font-weight: 900;
                text-align: right;
                padding: 6px 5px;
            }
        }
    
    }

    .cart-footer {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 20px 0px;
        background: #242222;
        position: relative;

        .delite-all {
            color: #fff;
            font-weight: 900;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.2s;
            position: absolute;
            right: 20px;
            background-color:rgb(0, 0, 0);
            padding: 10px ;
            border-radius:50%;

            &:hover {
                color:rgb(255, 0, 30);
            }
        }


        .btn-finsh {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 30px;
            max-width: 150px;
            min-width: 120px;
            padding: 0 15px;
            background: green;
            border: none;
            border-radius: 4px;
            color: #fff;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            gap: 10px;
            transition: all 0.2s;

            &:hover {
                background:rgb(57, 176, 6);
                color: #fff;
            }
        }
        
`