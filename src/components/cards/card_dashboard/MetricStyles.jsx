import styled from "styled-components";

export const Container_card = styled.div`
    min-width: 210px;
    width: 260px;
    height: 130px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 400px) {
        min-width: 200px;
    }

    .container_top {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 15px;
        position: relative;

        h3 {
            font-size: 1.7rem;
            color: #fff;
        }

        p {
            font-size: 1rem;
            color: #fff;
        }

        .icon_img {
            width: 70px;
            height: 70px;
            color: rgba(255, 255, 255, 0.5);
        }
    }

    .container_bottom {
        display: flex;
        height: 30px;
        align-items: center;
        justify-content: center;
        gap: 15px;
        padding: 0 10px;
        border-radius: 0 0 10px 10px;
        color: #fff;
        background: rgba(0, 0, 0, 0.2);
        cursor: pointer;

        &:hover {
            background: rgba(0, 0, 0, 0.3);
        }
    }

`