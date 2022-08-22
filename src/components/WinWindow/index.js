import React from 'react';
import { Container, Prize } from './styles';
import { Button } from '../Button';
import coin from '../../assets/coin.png';
export const WinWindow = ({ prize, setShowWin }) => {
  return (
    <Container>
      <h1>YOU WIN!</h1>
      <Prize>
        <h1>{prize}</h1>
        <img src={coin} />
      </Prize>
      <Button onClick={() => setShowWin(false)} title={'GREAT'} />
    </Container>
  );
};
