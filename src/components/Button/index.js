import React from 'react';
import { ButtonContainer} from './styles';

export const Button = ({ onClick, title, disabled }) => {
  return (
    <>
      <ButtonContainer
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </ButtonContainer>
    </>
  );
};
