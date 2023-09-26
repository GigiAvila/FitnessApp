import React, { useState } from 'react';
import { BackgroundImage, SliderItemTextsContainer, SliderItemInfoContainer, SliderItemTextContainer, SliderWrapper, SliderTitle, SliderItemTitle, SliderContainer, SliderItem, SliderItemText } from './Recomendations.Styles';
import { RoutinesDefaultOptionsData } from '../../../data/RoutinesDefaultOptionsData';
import { useTheme } from '@emotion/react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import DifficultyLevel from '../../Routines/DifficultyLevel/DifficultyLevel';

const Recomendations = ({ onVideoOpen }) => {
  const theme = useTheme();
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [routinesDefaultOptionsData, setRoutinesDefaultOptionsData] = useState(RoutinesDefaultOptionsData);

  const handleHomeLevelSetup = (selectedLevel) => {
    setSelectedLevel(selectedLevel);
  };


  const filteredRoutines = selectedLevel
    ? routinesDefaultOptionsData.filter((routine) => routine.level === selectedLevel)
    : routinesDefaultOptionsData.filter((routine) => routine.level === 'Beginner');



  return (
    <>
      <BackgroundImage />
      <SliderWrapper>
        <SliderTitle>Recommended for you</SliderTitle>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <DifficultyLevel onLevelSetup={handleHomeLevelSetup} />
        </div>

        <SliderContainer>
          {filteredRoutines.map((routine) => (
            <SliderItem
              key={routine.id}
              bgImage={routine.image}
              onClick={() => onVideoOpen(routine)}
            >
              <SliderItemTextContainer>
                <SliderItemTitle
                  style={{
                    background: theme.palette.ImpButtonBgColor,
                    color: theme.palette.ImpButtonColorText,
                  }}
                >
                  {routine.title}
                </SliderItemTitle>
                <SliderItemTitle
                  style={{
                    background: theme.palette.ImpButtonBgColor,
                    color: theme.palette.ImpButtonColorText,
                  }}
                >
                  {routine.level}
                </SliderItemTitle>
                <SliderItemTextsContainer
                  style={{
                    background: theme.palette.ImpButtonBgColor,
                    color: theme.palette.ImpButtonColorText,
                  }}
                >
                  <SliderItemInfoContainer>
                    <PlayCircleIcon fontSize='small' />
                    <SliderItemText>{routine.duration} min</SliderItemText>
                  </SliderItemInfoContainer>
                  <SliderItemInfoContainer>
                    <LocalFireDepartmentIcon fontSize='small' />
                    <SliderItemText>{routine.calories} Cal</SliderItemText>
                  </SliderItemInfoContainer>
                </SliderItemTextsContainer>
              </SliderItemTextContainer>
            </SliderItem>
          ))}
        </SliderContainer>
      </SliderWrapper>
    </>
  );
};

export default Recomendations;
