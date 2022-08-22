import styled from 'styled-components';

export const HomePage = styled.div`
  height: 100%;
  position: relative;
  display: grid;
  grid-gap: 10px;
  justify-content: center;
  grid-template-columns: calc(100vw - 50%);
  grid-template-rows: 0.1fr 1fr auto auto;

  @media (max-width: 1610px) {
    grid-template-columns: calc(100vw - 40%);
  }
  @media (max-width: 1350px) {
    grid-template-columns: calc(100vw - 30%);
  }
  @media (max-width: 1030px) {
    grid-template-columns: calc(100vw - 20%);
  }
  @media (max-width: 950px) {
    grid-template-columns: calc(100vw - 10%);
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WheelBox = styled.div`
  width: 100%;
  flex: 0 0 60%;
  align-self: center;
  aspect-ratio: 1 / 1;
`;
export const Buttons = styled.div`
  flex: 0 0 40%;
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: end;
  justify-content: space-between;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: 'Luckiest Guy', cursive;
  font-size: 2.5em;
  color: #ffffff;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 400px) {
    font-size: 2em;
  }
`;

export const Winners = styled.div`
  text-align: center;
  padding: 15px;
  max-height: 340px;


  background: linear-gradient(180deg, #3598df 0%, #006bb8 100%);
  box-shadow: inset 1px 5px 4px #1b379f;
  border-radius: 15px;
`;

export const WinnersContainer = styled.div`
  max-height: 200px;
  overflow-y: auto;
`;
