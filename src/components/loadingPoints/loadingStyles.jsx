import styled from "styled-components";

export const Loading_container = styled.div`
    display: flex;
    gap: 5px;

    .dot {
        width: 6px;
        height: 6px;
        background-color: black;
        border-radius: 50%;
        opacity: 0; /* Inicialmente invisível */
        animation: fadeInOut 1.8s infinite;
    }

    .dot:nth-child(1) {
        animation-delay: 0s;
    }
    .dot:nth-child(2) {
        animation-delay: 0.3s;
    }
    .dot:nth-child(3) {
        animation-delay: 0.6s;
    }

    @keyframes fadeInOut {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }

`