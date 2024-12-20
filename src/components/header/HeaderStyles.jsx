import styled from "styled-components";

export const Container_header = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    background: #F3EED9;
    height: 35px;
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
`;