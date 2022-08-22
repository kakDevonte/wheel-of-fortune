import React from 'react';
import {
  RouletteContainer,
  RotationContainer,
  RouletteSelectorImage,
} from './styles';
import { WheelCanvas } from '../WheelCanvas';
import img from '../../assets/img.png';

const STARTED_SPINNING = 'started-spinning';
const START_SPINNING_TIME = 2600;
const CONTINUE_SPINNING_TIME = 750;
const STOP_SPINNING_TIME = 8000;
const DEFAULT_SPIN_DURATION = 1.0;

const getRotationDegrees = (prizeNumber, numberOfPrizes) => {
  const degreesPerPrize = 360 / numberOfPrizes;

  const initialRotation = 90 + degreesPerPrize / 2;

  const randomDifference = (-1 + Math.random() * 2) * degreesPerPrize * 0.35;

  const prizeRotation =
    degreesPerPrize * (numberOfPrizes - prizeNumber) -
    initialRotation +
    randomDifference;

  return numberOfPrizes - prizeNumber > numberOfPrizes / 2
    ? -360 + prizeRotation
    : prizeRotation;
};

export const Wheel = ({
  mustStartSpinning,
  prizeNumber,
  onStopSpinning,
  data,
}) => {
  const [wheelData, setWheelData] = React.useState([...data]);
  const [startRotationDegrees, setStartRotationDegrees] = React.useState(0);
  const [finalRotationDegrees, setFinalRotationDegrees] = React.useState(0);
  const [hasStartedSpinning, setHasStartedSpinning] = React.useState(false);
  const [hasStoppedSpinning, setHasStoppedSpinning] = React.useState(false);
  const [isCurrentlySpinning, setIsCurrentlySpinning] = React.useState(false);
  const divRef = React.useRef(null);
  const [isMount, setIsMount] = React.useState(false);
  const mustStopSpinning = React.useRef(false);

  React.useEffect(() => {
    setIsMount(true);
  }, []);

  const normalizedSpinDuration = Math.max(0.01, DEFAULT_SPIN_DURATION);

  const startSpinningTime = START_SPINNING_TIME * normalizedSpinDuration;
  const continueSpinningTime = CONTINUE_SPINNING_TIME * normalizedSpinDuration;
  const stopSpinningTime = STOP_SPINNING_TIME * normalizedSpinDuration;

  const totalSpinningTime =
    startSpinningTime + continueSpinningTime + stopSpinningTime;

  React.useEffect(() => {
    if (mustStartSpinning && !isCurrentlySpinning) {
      setIsCurrentlySpinning(true);
      startSpinning();
      const finalRotationDegreesCalculated = getRotationDegrees(
        prizeNumber,
        wheelData.length
      );
      setFinalRotationDegrees(finalRotationDegreesCalculated);
    }
  }, [mustStartSpinning]);

  React.useEffect(() => {
    if (hasStoppedSpinning) {
      setIsCurrentlySpinning(false);
      setStartRotationDegrees(finalRotationDegrees);
    }
  }, [hasStoppedSpinning]);

  const startSpinning = () => {
    setHasStartedSpinning(true);
    setHasStoppedSpinning(false);
    mustStopSpinning.current = true;
    setTimeout(() => {
      if (mustStopSpinning.current) {
        mustStopSpinning.current = false;
        setHasStartedSpinning(false);
        setHasStoppedSpinning(true);
        onStopSpinning();
      }
    }, totalSpinningTime);
  };

  const getRouletteClass = () => {
    if (hasStartedSpinning) {
      return STARTED_SPINNING;
    }
    return '';
  };

  return (
    <RouletteContainer ref={divRef}>
      <RotationContainer
        className={getRouletteClass()}
        startSpinningTime={startSpinningTime}
        continueSpinningTime={continueSpinningTime}
        stopSpinningTime={stopSpinningTime}
        startRotationDegrees={startRotationDegrees}
        finalRotationDegrees={finalRotationDegrees}
      >
        {isMount && (
          <WheelCanvas
            width={divRef.current.offsetWidth}
            height={divRef.current.offsetHeight}
            data={wheelData}
          />
        )}
      </RotationContainer>
      <RouletteSelectorImage src={img} alt="roulette-static" />
    </RouletteContainer>
  );
};
