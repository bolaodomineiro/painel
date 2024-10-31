import styled from "styled-components";

export const Aside = styled.aside`

    align-items: center;
    height: 100svh;
    width: 170px;
    background: #000;
    position: relative;
    overflow: hidden;
    trasition: all 0.5s ;

    .logo_area {
        width: 170px;
        height: 110px;
        padding: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        img {
            position: absolute;
            top: 15px;  
        }

        .config {
            height: 20px;
            width: 20px;
            position: absolute;
            right: 10px;
            top: 10px;
            color: #fff;
            cursor: pointer;
            z-index: 1;
            trasition: all 0.5s ;   

            &:hover {
                transform: scale(1.1);
            }
        }
    }

    ul {
        list-style: none;

        li {
            display: flex;
            align-items: center;
            padding: 8px ;
            color: #fff;
            gap: 16px;
            cursor: pointer;
            font-size: 0.8rem;
            border: 2px solid #000;

            &:hover {
                background: #AB0519;
            }

            .icon {
                width: 20px;
                height: 20px;
                cusor: pointer;
            }

        }

        .active {
            background: #AB0519;
        }
    }
`;