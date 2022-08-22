import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 93%;
  height: 20%;
  margin-bottom: 5px;
  font-family: 'Luckiest Guy', cursive;
  font-size: 2em;
  letter-spacing: 1px;
  color: #fac269;
  text-shadow: -1px -1px 0 #5f3a00;
  cursor: pointer;
  transition: 300ms;
  border-radius: 10px;
  border-color: #ffcd7e;

  background: linear-gradient(
    241.78deg,
    rgb(188, 0, 0) 27.02%,
    rgb(139, 0, 0) 82.05%
  );

  box-shadow: 0 5px #8a0000, 0 10px 10px rgba(0, 0, 0, 0.25);

  &:active:enabled {
    transform: translateY(5px);
    box-shadow: 0 0 transparent, 0 5px 10px rgba(0, 0, 0, 0.25);
  }

  &:disabled {
    background: linear-gradient(241.78deg, #8a0000 27.02%, #780000 82.05%);
    box-shadow: 0 5px #8a0000, 0 10px 10px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 950px) {
    font-size: 1.5em;
  }

  @media (max-width: 575px) {
    font-size: 0.9em;
  }

  @media (max-width: 330px) {
    font-size: 0.5em;
  }
`;
