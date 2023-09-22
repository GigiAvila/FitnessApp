import React from 'react'
import { RoutinesDefaultOptionsData } from '../../data/RoutinesDefaultOptionsData'
import { RoutineCardWrapper, RountineChip, RoutineInfoContainer, RoutineTitleContainer, RoutineChips, ButtonActionsWrapper } from './RoutineCard.Styles'
import { useTheme } from '@emotion/react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CardioImgBG from '../../../public/cardioBG.jpg'
import YogaImgBG from '../../../public/yogaBG.png'
import StrengthImgBG from '../../../public/StrengthBG.png'
import MartialArtsImgBG from '../../../public/MartialArtsBG.png'

const getBackgroundImage = (type) => {
  switch (type) {
    case 'Cardio':
      return CardioImgBG;
    case 'Strength':
      return StrengthImgBG;
    case 'Yoga':
      return YogaImgBG;
    case 'Martial Arts':
      return MartialArtsImgBG;
    default:
      return '';
  }
};

const RoutineCard = ({ onCancel, onSave, routineDataWithType }) => {
  const selectedRoutine = RoutinesDefaultOptionsData.find((routine) => routine.type === routineDataWithType.type);
  const theme = useTheme();
  const backgroundImage = getBackgroundImage(selectedRoutine.type);

  return (
    <>
      <RoutineCardWrapper
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <ArrowBackIosIcon
          onClick={() => onCancel()}
          style={{
            color: '#ffffff',
            position: 'fixed',
            top: '20px',
            left: '20px',
          }}
        />

        <RoutineInfoContainer
          style={{
            background: theme.palette.background,
            color: theme.palette.color,
          }}
        >
          <RoutineTitleContainer>
            <h4>{selectedRoutine.type} for {routineDataWithType.level ? (routineDataWithType.level).toLowerCase() : 'beginner'}</h4>
            <h5></h5>
          </RoutineTitleContainer>
          <RoutineChips>
            <RountineChip
              style={{
                background: theme.palette.SecondaryButtonBgColor,
                color: theme.palette.SecondaryButtonColorText,
              }}
            >
              <LocalFireDepartmentIcon fontSize="small" />
              <p>{selectedRoutine.duration} min</p>
            </RountineChip>
            <RountineChip
              style={{
                background: theme.palette.SecondaryButtonBgColor,
                color: theme.palette.SecondaryButtonColorText,
              }}
            >
              <PlayCircleIcon fontSize="small" />
              <p>{selectedRoutine.calories} Cal</p>
            </RountineChip>
          </RoutineChips>
          <p>{selectedRoutine.description}</p>
          <ButtonActionsWrapper>
            <button
              onClick={() => onSave(selectedRoutine)}
              style={{
                background: theme.palette.ImpButtonBgColor,
                color: theme.palette.ImpButtonColorText,
              }}
            >
              Start Workout
            </button>
            <button
              onClick={() => onCancel()}
              style={{
                background: theme.palette.ImpButtonBgColor,
                color: theme.palette.ImpButtonColorText,
              }}
            >
              Return
            </button>
          </ButtonActionsWrapper>
        </RoutineInfoContainer>
      </RoutineCardWrapper>
    </>
  );
};

export default RoutineCard;
