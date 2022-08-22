import styled from 'styled-components';

export const WinnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 52px;
  margin-bottom: 15px;

  background: linear-gradient(180deg, #62b5f0 0%, #046eba 100%);
  box-shadow: 1px 3px 3px rgba(16, 46, 131, 0.5);
  border-radius: 5px;

  color: #ffffff;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-size: 18px;

  text-shadow: -1px -1px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 450px) {
    font-size: 13px;
  }
`;

export const Avatar = styled.img`
  border-radius: 50px;
  width: 2.5em;
  height: 2.5em;
`;

export const Coin = styled.img`
  width: 2.5em;
  height: 2.5em;
`;

export const Jackpot = styled.img`
  height: 1em;
`;

export const Prize = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
