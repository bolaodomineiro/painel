import styled from "styled-components";

export const Aside = styled.aside`
    align-items: center;
    transition: all 0.5s;
    max-width: ${({ $menuToggle }) => ($menuToggle ? "38px" : "170px")};
    height: 100vh;
    background: #242222;
    position: fixed;
    z-index: 100;
    top: 0px;
    left: 0;
    overflow: hidden;

    @media (max-width: 460px) {
        width:40px;
    }

    .logo_area {
        width: 100%;
        padding: 20px 0;
        position: relative;

        img {
            width: 80px;
            height: 80px;
            position: relative;
            left: 44px;

            @media (max-width: 374px) {
                width: 65px;
                height: 65px;
            }
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

        .link {
            text-decoration: none;
        }

        li {
            display: flex;
            min-width: 200px;
            align-items: center;
            padding: 8px  0px 8px 8px;
            color: #fff;
            gap: 15px;
            cursor: pointer;
            font-size: 0.9rem;
            border-bottom: 2px solid #242222;
            border-top: 2px solid #242222;
            overflow: hidden;

            @media (max-width: 900px) {
                min-width: 200px;
            }

            @media (min-width: 800px) {
                &:hover {
                    background: #AB0519;
                }

            }

            .icon {
                width: 20px;
                height: 20px;
            }

        }

        .active {
            background: #AB0519;
        }
    }
`;