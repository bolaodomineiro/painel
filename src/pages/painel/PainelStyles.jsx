import styled from 'styled-components';

export const Container = styled.section`

    display: flex;

    .content {
        flex: 1;
        background: #aaa;

        header {
            display: flex;
            align-items: center;
            background: #F3EED9;
            height: 40px;
            padding: 0 10px;

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
    }
`