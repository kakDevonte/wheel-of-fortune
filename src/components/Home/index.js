import React from 'react';
import { Wheel } from '../Wheel';
import { Button } from '../Button';
import { InfoBlock } from '../InfoBlock';
import { Winner } from '../Winner';
import { WinWindow } from '../WinWindow';
import { Buttons, Content, HomePage, Title, WheelBox, Winners } from './styles';

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
  const [mustSpin, setMustSpin] = React.useState(false);
  const [prizeNumber, setPrizeNumber] = React.useState(0);
  const [showWin, setShowWin] = React.useState(false);
  const [isMount, setIsMount] = React.useState(false);

  React.useEffect(() => {
    setIsMount(true);
  }, []);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  React.useEffect(() => {
    if (!mustSpin && isMount) setShowWin(true);
  }, [mustSpin]);

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
            <InfoBlock title={'JACKPOT 1000'} />
            <InfoBlock title={'BALANCE 100999'} />
            <Button
              onClick={handleSpinClick}
              title={'SPIN WHEEL'}
              disabled={mustSpin}
            />
          </Buttons>
        </Content>
        <Winners>
          <Title>WINNERS</Title>
          {[...Array(14)].map((item, index) => (
            <Winner key={index} />
          ))}
        </Winners>
      </HomePage>
    </div>
  );
};
