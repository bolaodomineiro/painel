import styled from "styled-components";

export const Container_BarChart = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;

    @media (max-width: 600px) {
        overflow-x: scroll;
    }

    .header-chart {
        display: flex;
        flex-wrap: wrap-reverse;
        align-items: center;   
        width: 100%;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
        padding: 10px 10px;

        h2 {
            font-size: 1.2rem;
            margin-left: 10px;

            @media (max-width: 648px) {
                margin-left: 0;
            }
        }
    }

    section {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 10px;
    }

    .chart-container {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 10px 0;

        @media (max-width: 600px) {
            justify-content: flex-start;
        }


        .chart {
            max-width: 760px;
            // min-width: 280px;
            height: 300px;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
        }
    }

    

`