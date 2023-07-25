import styled from "styled-components"

export const GameContainer = styled.main`
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 50px 50px;

    background-color: var( --gray-300);

    > div {
        display: flex;
        flex-direction: column;

        width: 100%;
        height: fit-content;
        max-width: 1000px;
        padding: 20px;
        border-radius: 10px;
        gap: 10px;

        background-color: var(--gray-100);
    }

    .gameDetailsContainer {
        display: flex;
        gap: 10px;

        img {
            height: 280px;
        }

        .details {
            span {
                color: var(--blue-600);
                font-weight: 900;
            }

            h2 {
                margin-bottom: 25px;
                font-size: 35px;
            }

            p {
                font-size: 18px;
                strong {
                color: var(--blue-600);
                font-weight: 700;
                }
            }

            p:nth-last-of-type(1) {
                margin-bottom: 20px;
            }

            .starsContainer {
                display: flex;
                gap: 2px;

                img {
                    height: 15px;
                    width: 15px;
                    fill: #FFF;
                    height: 20px;
                    width: 20px;
                }
            }
        }
    }
`