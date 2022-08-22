import React from 'react';
import { Avatar, Coin, Jackpot, Prize, WinnerContainer } from './styles';
import coin from '../../assets/coin.png';
import jackpot from '../../assets/jackpot.png';

const imageSrc =
  'https://sun4-17.userapi.com/s/v1/ig1/9RMLFwGfxMOkQcm-MsKsUFWbkQIF1jq3C5Dj8tXDu-1UpSCoEfxGaVEdOCF2g4JSpKLxg3gg.jpg?size=100x100&quality=96&crop=172,80,254,254&ava=1';

export const Winner = () => {
  const j = 'jackpot';
  return (
    <>
      <WinnerContainer>
        <Avatar src={imageSrc} />
        <span>Александр Хатюшин</span>
        {j !== 'jackpot' ? (
          <Prize>
            <span>100</span>
            <Coin src={coin} />
          </Prize>
        ) : (
          <Jackpot src={jackpot} />
        )}
        <span>24 c.</span>
      </WinnerContainer>
    </>
  );
};
