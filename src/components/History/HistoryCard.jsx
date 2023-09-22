import React, { useContext } from 'react';
import { RoutinesContext } from '../../context/RoutinesContext';
import { useTheme } from '@emotion/react';
import { HistoryCardContainer, PrevRoutineTitleContainer, HistoryTitle, PrevRoutineContainer, PrevRoutineTextContainer } from './HistoryCard.Styles'

const HistoryCard = () => {
  const theme = useTheme();

  const { routines } = useContext(RoutinesContext);

  return (
    <HistoryCardContainer>
      <HistoryTitle>Your routines</HistoryTitle>
      {routines.length > 0 && (
        routines.map((routine) => (
          routine.type !== '' && (
            <PrevRoutineContainer key={routine.id}
              style={{
                border: `1px solid ${theme.palette.hoverColor}`,

              }}>
              <PrevRoutineTextContainer>
                <PrevRoutineTitleContainer>  <h3>{routine.type} </h3>| <h4>{routine.title} </h4></PrevRoutineTitleContainer>
                <h5>{routine.duration} min</h5>
              </PrevRoutineTextContainer>

            </PrevRoutineContainer>
          )
        ))
      )}
    </HistoryCardContainer>
  );
};

export default HistoryCard;
