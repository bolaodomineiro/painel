import styled from "styled-components";

export const Aside = styled.aside`
    align-items: center;
    transition: all 0.5s;
    max-width: ${({ menuToggle }) => (menuToggle ? "36px" : "200px")};
    height: 100svh;
    background: #000;
    position: fixed;
    z-index: 2;
    top: 0px;
    left: 0;
    overflow: hidden;

    @media (max-width: 770px) {
        min-width: ${({ menuToggle }) => (menuToggle ? "36px" : "160px")};
    }

    .logo_area {
        width: 100%;
        padding: 20px 0;
        position: relative;

        img {
            position: relative;
            left: 48px;
        }

        .config {
            display: flex;
            width: 40px;
            height: 40px;
            justify-content: center;
            align-items: center;
            height: 20px;
            width: 20px;
            position: absolute;
            right: 10px;
            top: 8px;
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
            min-width: 200px;
            align-items: center;
            padding: 8px  0px 8px 8px;
            color: #fff;
            gap: 18px;
            cursor: pointer;
            font-size: 0.9rem;
            border-bottom: 2px solid #000;
            border-top: 2px solid #000;
            overflow: hidden;

            @media (max-width: 900px) {
                min-width: 200px;
            }

            &:hover {
                background: #AB0519;
            }

            .icon {
                width: 16px;
                height: 16px;
            }

        }

        .active {
            background: #AB0519;
        }
    }
`;