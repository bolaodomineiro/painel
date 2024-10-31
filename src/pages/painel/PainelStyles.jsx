import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    height: 100svh;
    width: 100%;

    .content {
        align-items: center;
        height: 100svh;
        width: 100%;
        background: #aaa;
        overflow: auto;
        trasition: all 0.5s ;

        header {
            display: flex;
            width: 100%;
            align-items: center;
            background: #F3EED9;
            height: 40px;
            padding: 0 15px;

            .icon {
                width: 30px;
                height: 30px;
                cursor: pointer;
                color: #000;
                trasition: all 0.5s;

                &:hover {
                    color:  #AB0519;;
                }
            }   
        }

        .container_cards {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            padding: 10px 0 10px 10px;
            overflow: auto;

            @media (max-width: 400px) {
                padding: 10px 0 10px 8px;
            }

            .area_cards {
                display: flex;
                min-width: 83%;
                justify-content: space-between;
                align-items: center;
                gap: 15px;
                overflow: auto;
                padding: 0px 10px 0px 0px;
            }
        }
    }
`