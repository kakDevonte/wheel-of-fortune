import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 100;

  h1 {
    text-align: center;
    font-family: 'Luckiest Guy', cursive;
    font-size: 2.5em;
    color: #ffffff;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  button {
    width: 150px;
    height: 60px;
  }
`;

export const Prize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 10px;
    height: 2.5em;
    width: 2.5em;
  }
`;
