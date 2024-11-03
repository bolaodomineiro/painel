import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: flex-end;
    min-height: 100vh;
    width: 100%;

    .content {
        height: 100svh;
        transition: all 0.5s;
        width:${({ $menuToggle }) => ($menuToggle ? "calc(100% - 35px)" : "calc(100% - 170px)")};
        trasition: all 0.5s ;

        @media (max-width: 374px) {
            width:${({ $menuToggle }) => ($menuToggle ? "calc(100% - 35px)" : "calc(100% - 150px)")};
        }
    }

`