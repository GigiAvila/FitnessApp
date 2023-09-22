import React, { useContext } from 'react';
import { RoutinesContext } from '../../context/RoutinesContext';
import { useTheme } from '@emotion/react';
import { PrevRoutineImageContainer, PrevRoutineImage, HistoryCardContainer, PrevRoutineTitleContainer, HistoryTitle, PrevRoutineContainer, PrevRoutineTextContainer } from './HistoryCard.Styles'
import { RoutinesDefaultOptionsData } from '../../data/RoutinesDefaultOptionsData';
import CancelIcon from '@mui/icons-material/Cancel';

const HistoryCard = () => {
  const theme = useTheme();

  const { routines, removeRoutine } = useContext(RoutinesContext);



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
                <h5 style={{
                  background: theme.palette.ImpButtonBgColor,
                  color: theme.palette.ImpButtonColorText
                }}> Workout for {routine.level}</h5>
                <h5>{routine.duration} min</h5>
              </PrevRoutineTextContainer>
              <PrevRoutineImageContainer>
                {RoutinesDefaultOptionsData.map((defaultRoutine, index) => {
                  if (routine.type === defaultRoutine.type) {
                    return <PrevRoutineImage key={index} src={defaultRoutine.image} alt='RoutineImage' />;
                  }
                  return null;
                })}
              </PrevRoutineImageContainer>
              <CancelIcon
                onClick={() => removeRoutine(routine.id)}
                style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                }}
              />
            </PrevRoutineContainer>
          )
        ))
      )}
    </HistoryCardContainer>
  );
};

export default HistoryCard;
