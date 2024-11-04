import styled from "styled-components";

export const Container_card = styled.div`
    flex: 1;
    min-width: 175px; ;
    height: 110px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 550px) {
        min-width: 180px;
    }

    @media (max-width: 375px) {
        min-width: 100%;
    }

    .container_top {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 16px;
        position: relative;
        gap: 5px;

        h3 {
            font-size: 1.2rem;
            color: #fff;
            padding-bottom: 6px;

            @media (max-width: 374px) {
                font-size: 1rem;
            }
        }

        p {
            font-size: 1rem;
            color: #fff;

            @media (max-width: 374px) {
                font-size: 0.9rem;
            }
        }

        .icon_img {
            width: 40px;
            height: 40px;
            color: rgba(255, 255, 255, 0.5);
        }
    }

    .container_bottom {
        display: flex;
        height: 30px;
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