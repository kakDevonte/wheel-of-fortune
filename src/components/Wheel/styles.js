import styled from 'styled-components';

export const RouletteContainer = styled.div`
  position: relative;
  height: 100%;

  background: linear-gradient(180deg, #3496df 11.29%, #016cb9 94.98%);
  box-shadow: inset 1px 5px 4px #1b379f;
  border-radius: 15px;

  object-fit: contain;
  flex-shrink: 0;
  z-index: 5;
  pointer-events: none;
`;

export const RotationContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(${(props) => props.startRotationDegrees}deg);
  &.started-spinning {
    animation: spin ${({ startSpinningTime }) => startSpinningTime / 1000}s
        cubic-bezier(0.71, 0.29, 0.96, 0.9) 0s 1 normal forwards running,
      continueSpin ${({ continueSpinningTime }) => continueSpinningTime / 1000}s
        linear ${({ startSpinningTime }) => startSpinningTime / 1000}s 1 normal
        forwards running,
      stopSpin ${({ stopSpinningTime }) => stopSpinningTime / 1000}s
        cubic-bezier(0, 0, 0.35, 1.02)
        ${({ startSpinningTime, continueSpinningTime }) =>
          (startSpinningTime + continueSpinningTime) / 1000}s
        1 normal forwards running;
  }
  @keyframes spin {
    from {
      transform: rotate(${(props) => props.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(props) => props.startRotationDegrees + 360}deg);
    }
  }
  @keyframes continueSpin {
    from {
      transform: rotate(${(props) => props.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(props) => props.startRotationDegrees + 360}deg);
    }
  }
  @keyframes stopSpin {
    from {
      transform: rotate(${(props) => props.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(props) => 1440 + props.finalRotationDegrees}deg);
    }
  }
`;

export const RouletteSelectorImage = styled.img`
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;

  position: absolute;
  z-index: 1;
  width: 5%;
  right: 48%;
  top: 0;
`;
