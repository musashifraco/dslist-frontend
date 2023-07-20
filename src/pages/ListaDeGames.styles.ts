import styled from "styled-components";

export const GameListContainer = styled.main`
  display: flex;
  justify-content: center;
  height: 100%;

  padding: 50px 50px;

  background-color: var(--gray-300);

  > div {
    width: 100%;
    height: fit-content;
    max-width: 1000px;
    border-radius: 10px;

    h2 {
      color: var(--blue-900);
      font-weight: 900;
      font-size: 30px;
      margin-bottom: 20px;
    }

    .list-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;
export const GameCard = styled.div`
  display: flex;
  height: 100px;
  color: black;
  img {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 100%;
    width: 100px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    background-color: var(--gray-100);

    h3 {
        color: var(--blue-900)
    }

    p {
        color: gray;
    }

    span {
        font-weight: 700;
        color: var(--blue-600);
    }
  }
`;
