import styled from "styled-components";

export const Container_card = styled.div`
    width: 220px;
    height: 100px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 520px) {
        width: 170px;
        height: 105px;
    }

    @media (max-width: 450px) {
        width: 155px;
        height: 105px;
    }

    @media (max-width: 375px) {
        min-width: 155px;
        height: 90px;
    }

    @media (max-width: 370px) {
        min-width: 100%;
    }

    .container_top {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 12px;
        position: relative;
        // border: 1px solid #000;

        h3 {
            font-size: 1.3rem;
            color: #fff;

            @media (max-width: 400px) {
                font-size: 1.1rem;
            }
        }

        p {
            font-size: 0.9rem;
            color: #fff;

            @media (max-width: 400px) {
                font-size: 0.8rem;
            }
        }

        .icon_img {
            width: 40px;
            height: 40px;
            color: rgba(255, 255, 255, 0.5);

            @media (max-width: 380px) {
                width: 30px;
                height: 30px;
            }
        }
    }

    .container_bottom {
        display: flex;
        height: 25px;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 0 10px;
        border-radius: 0 0 6px 6px;
        color: #fff;
        background: rgba(0, 0, 0, 0.2);
        cursor: pointer;

        p {
            font-size: 0.8rem;
        }

        &:hover {
            background: rgba(0, 0, 0, 0.3);
        }
    }

`