import React from 'react';
import { Wheel } from '../Wheel';
import { Button } from '../Button';
import { InfoBlock } from '../InfoBlock';
import { Winner } from '../Winner';
import { WinWindow } from '../WinWindow';
import {
  Buttons,
  Content,
  HomePage,
  Title,
  WheelBox,
  Winners,
  WinnersContainer,
} from './styles';
import { useWheelActions, useWheelState } from '../../contexts/wheel-context';

const data = [
  { label: 10 },
  { label: 100 },
  { label: 150 },
  { label: 200 },
  { label: 250 },
  { label: 400 },
  { label: 750 },
  { label: 'JACKPOT' },
];

export const Home = () => {
  const [prizeNumber, setPrizeNumber] = React.useState(0);
  const [mustSpin, setMustSpin] = React.useState(false);
  const [showWin, setShowWin] = React.useState(false);
  const [isMount, setIsMount] = React.useState(false);
  const [jackpot, setJackpot] = React.useState(0);
  const { changeBalance, getWinners, addWinner } = useWheelActions();
  const { user, winners, userInfo } = useWheelState();

  React.useEffect(() => {
    setIsMount(true);
    getWinners();
  }, []);

  React.useEffect(() => {
    if (winners.length > 0) {
      let sum = 0;
      for (let winner in winners) {
          sum += 100;
        }
      }
      setJackpot(sum);
    } else {
      setJackpot(1000);
    }
  }, [winners]);

  React.useEffect(() => {
    if (!mustSpin && isMount) {
      setShowWin(true);

      //Условие нужное что бы приложение не крашилось без vk-api
      if (!user) return;

      let balance = 0;
      if (data[prizeNumber].label === 'JACKPOT') {
        balance = Number(user.balance) + jackpot;
      } else {
        balance = Number(user.balance) + data[prizeNumber].label;
      }
      changeBalance({ id: user.id, balance });
      const { first_name, last_name, photo_100 } = userInfo;
      const winner = {
        first_name,
        last_name,
        prize:
          data[prizeNumber].label === 'JACKPOT'
            ? jackpot
            : data[prizeNumber].label,
        isJackpot: data[prizeNumber].label === 'JACKPOT',
        photo: photo_100,
        whenWon: new Date(),
      };
      addWinner(winner);
    }
  }, [mustSpin]);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);

    //Условие нужное что бы приложение не крашилось без vk-api
    if (!user) return;

    const balance = Number(user.balance) - 100;
    changeBalance({ id: user.id, balance });
  };

  return (
    <div>
      {showWin && (
        <WinWindow prize={data[prizeNumber].label} setShowWin={setShowWin} />
      )}
      <HomePage>
        <Title>WHEEL OF FORTUNE</Title>
        <Content>
          <WheelBox>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
              onStopSpinning={() => {
                setMustSpin(false);
              }}
            />
          </WheelBox>
          <Buttons>
            <InfoBlock title={`JACKPOT ${jackpot}`} />
            <InfoBlock title={`BALANCE ${user ? user.balance : '0'}`} />
            <Button
              onClick={handleSpinClick}
              title={'SPIN WHEEL'}
              disabled={mustSpin}
            />
          </Buttons>
        </Content>
        <Winners>
          <Title>WINNERS</Title>
          <WinnersContainer>
            {winners
              .slice(0)
              .reverse()
              .map((winner, index) => (
                <Winner key={index} {...winner} />
              ))}
          </WinnersContainer>
        </Winners>
      </HomePage>
    </div>
  );
};
