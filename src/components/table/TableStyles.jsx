import styled from "styled-components";

export const Container_table = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    overflow: auto;

    .header_table, .body_table {
        width: 870px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin:auto;

        ul {
            display: flex;
            width: 100%;
            gap: 10px;
            padding: 10px 0px;
            list-style: none;
            margin-top: 10px;

            li {
                display: flex;
                align-items: center;
                padding: 0px 10px;
                height: 35px;
                font-size: 0.9rem;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
                border-radius: 5px;

                .icon {
                    font-size: 1.4rem;
                    trasition: all 0.3s;
                    cursor: pointer;

                    &:hover {
                        color: #AB0519;
                    }
                }
            }

            li:nth-child(1) {
                width: 60px;
                min-width: 60px;
            }

            li:nth-child(2) {
                width: 170px;
                min-width: 170px; 
            }

            li:nth-child(3) {
                width: 130px;
                min-width: 130px;
            }

            li:nth-child(4) {
                width: 170px;
                min-width: 170px; 
            }

            li:nth-child(5) {
                dplay: flex;
                align-items: center;
                justify-content: center;
                width: 120px;
                min-width: 100px;
            }

            li:nth-child(6) {
                dplay: flex;
                align-items: center;
                justify-content: center;
                width: 90px;
                min-width: 90px;
            }
            
            li:nth-child(7), li:nth-child(8) {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 60px;
                min-width: 60px;
            }

            
        }
    }

    .body_table {

        ul:nth-child(odd) {
            background-color: #F2F1EB  ; 
        }

        ul {
            background-color: #F3EED9;
            border-radius: 5px;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

            li {
                box-shadow:none;

                .image_user {
                    width: 40px;
                    border-radius: 50%;
                }
            }

        }

    }
`