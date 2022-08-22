import React from 'react';
import { Avatar, Coin, Jackpot, Prize, WinnerContainer } from './styles';
import coin from '../../assets/coin.png';
import jackpot from '../../assets/jackpot.png';

function dateDiff(date) {
  const diffInMs = new Date() - new Date(date);
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return diffInDays;
}

export const Winner = (props) => {
  return (
    <>
      <WinnerContainer>
        <Avatar src={props.photo} />
        <span>{`${props.first_name} ${props.last_name}`}</span>
        {!props.isJackpot ? (
          <Prize>
            <span>{props.prize}</span>
            <Coin src={coin} />
          </Prize>
        ) : (
          <Jackpot src={jackpot} />
        )}
        <span>{dateDiff(props.whenWon)}д.</span>
      </WinnerContainer>
    </>
  );
};
