import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: flex-end;
    min-height: 100svh;
    width: 100%;

    .content {
        height: 100svh;
        transition: all 0.5s;
        width:${({ menuToggle }) => (menuToggle ? "calc(100% - 35px)" : "calc(100% - 200px)")};
        trasition: all 0.5s ;

        header {
            display: flex;
            width: 100%;
            align-items: center;
            background: #F3EED9;
            height: 35px;
            padding: 0 15px;
            position: fixed;
            z-index: 2;

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
        }

        .container_cards {
            display: flex;
            flex-wrap: wrap;
            flex-direction:  ;
            justify-content: center;
            gap: 8px;
            padding: 8px;
            margin-top: 35px;

            @media (max-width: 590px) {
                align-items: center;
                flex-direction: row;
            }
        }
    }
`