import styled from "styled-components";

export const Container_cart = styled.section`
    background: #fff;
    height: calc(100vh - 80px);
    width: 270px;
    position: fixed;
    bottom: 20px;
    right: 0px;
    display: flex;
    justify-content:space-between;
    flex-direction: column;
    trasition: all 0.5s;
    padding: 10px;
    border-radius: 10px 0px 0px 10px;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.49);

    .cart-icon-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 252px;
        background: #AB0519;
        border-radius: 10px;
        padding: 15px;

        .cart-area {
            position: relative;

            .cart-icon {
                font-size: 2.5rem;
                color:#fff;
            }
            
            .cart-count {
                position: absolute;
                min-width: 30px;
                padding: 5px;
                top: -12px;
                right: 5px;
                left: 56%;
                transform: translateX(-50%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.7rem;
                font-weight: 900;
                color:rgb(255, 255, 255);
                z-index: 1;
                background: #AB0519;
                border: 3px solid #AB0519;
            }
        }

        p {
            font-size: 0.9rem;
            font-weight: 900;
            color:#fff;
        }

        span {
            font-size: 0.9rem;
            font-weight: 900;
            color:#fff;
        }
    }

    .main-cart {
        flex: 1;
        overflow: auto;
        padding: 5px 5px 5px 0px;

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
            background: #F3EED9;
            border-radius: 10px;
            padding: 6px;
            margin-bottom: 10px;

            h3 {
                font-size: 0.9rem;
                font-weight: 900;
                padding: 2px 5px;
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
                padding: 2px 5px;
            }
        }
    
    }
`