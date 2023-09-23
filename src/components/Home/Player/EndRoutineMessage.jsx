import React from 'react';
import { EndRoutineContainer, Title, Subtitle, Message } from './EndRoutineMessage.Styles'
import { useTheme } from '@emotion/react';

const EndRoutineMessage = () => {
  const theme = useTheme();

  return (
    <EndRoutineContainer
      style={{
        background: theme.palette.SecondaryButtonBgColor,
      }}>
      <Title>Great job!</Title>
      <Subtitle>You have completed this practice</Subtitle>
      <Message>Remember to stay hydrated and take a moment to rest.</Message>
    </EndRoutineContainer>
  );
};

export default EndRoutineMessage;
