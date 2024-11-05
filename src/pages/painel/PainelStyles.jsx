import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: flex-end;
    height: 100vh;
    width: 100%;

    .content {
        height: 100svh;
        transition: all 0.5s;
        position: relative;
        width:${({ $menuToggle }) => ($menuToggle ? "calc(100% - 38px)" : "calc(100% - 170px)")};

        @media (max-width: 374px) {
            width:${({ $menuToggle }) => ($menuToggle ? "calc(100% - 38px)" : "calc(100% - 150px)")};
        }
    }

`