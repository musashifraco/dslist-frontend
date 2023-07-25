import styled from "styled-components"

export const ListContainer = styled.main`
    display: flex;
    justify-content: center;
    height: 100%;

    padding: 50px 50px;

    background-color: var( --gray-300);

    > div {
        width: 100%;
        height: fit-content;
        max-width: 1000px;
        padding: 25px 15px;
        border-radius: 10px;

        background-color: var(--gray-100);

        h2 {
            color: var(--blue-900);
            font-weight: 900;
            font-size: 30px;
            margin-bottom: 20px;
        }
    }

    p {
        color: var(--blue-600);
        font-weight: 700;
        font-size: 20px;

        &:hover {
            color: var(--blue-600-hover);
        }
    }
`

export const List = styled.div`
`

