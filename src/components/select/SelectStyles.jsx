import styled from "styled-components";

export const Container_select = styled.div`
    cursor: pointer;
    position: relative;
    max-width: 180px;
    min-width: 160px;

    .select_header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        width: 100%;
        height: 30px;
        background: #fff;
        padding: 0px 15px;
        border-radius: 4px;
        box-shadow: inset 1px 1px 4px #7979797c;
    }

    .select_header h3{
        font-size: 1rem;
        color: #000;

        @media (max-width: 374px) {
            font-size: 0.9rem;
        }
    }

    .select_list {
        overflow: hidden;
        transition: all 0.5s;
        position: absolute;
        min-width: 160px;
        top: 47px;
        left: 0px;
        background-color: #fff;
        box-shadow: 0px 1px 6px #7979797c;
        z-index: 99;

        @media (max-width: 374px) {
            width: 140px;
        }

        li {
            display: flex;
            align-items: center;
            padding: 0px 14px;
            width: 100%;
            height: 35px;
            font-size: 1rem;
            font-weight: 500;
            border-bottom: 1px solid #aaa;
            trasition: all 0.3s;

            &:hover {
                background-color: #AB0519;
                color: #fff;
            }
        }
    }

    .icone_select {
        color: #000;
    }

`