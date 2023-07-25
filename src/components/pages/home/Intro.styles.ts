import styled from "styled-components";

export const IntroMain = styled.main`
  display: flex;
  justify-content: left;
  align-items: center;

  height: 100%;
  width: 100%;

  background-color: var(--blue-900);

  img {
    position: absolute;
    right: 300px;

    height: 550px;
  }
`;

export const TextContainer = styled.div`
  z-index: 100;

  display: flex;
  justify-content: center;
  flex-direction: column;
  transform: translateX(60%);

  height: 550px;
  width: 450px;

  word-break: break-all;

  span {
    font-weight: 700;
    font-size: 30px;
    color: var(--blue-400);
  }

  h1,
  p {
    color: var(--gray-100);
  }

  h1 {
    padding-right: 50px;
    margin-bottom: 25px;
    font-size: 60px;
  }

  p {
    margin-bottom: 40px;

    font-weight: 500;
    font-size: 20px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    border-radius: 10px;

    background-color: var(--blue-400);
  }

  button {
    height: 100%;
    width: 100%;
    border: none;
    
    background-color: transparent;

    color: var(--blue-900);
    font-weight: 500;
    font-size: 25px;
  }
`;
