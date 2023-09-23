import React from 'react';
import { BackgroundImage, SliderItemTextsContainer, SliderItemInfoContainer, SliderItemTextContainer, SliderWrapper, SliderTitle, SliderItemTitle, SliderContainer, SliderItem, SliderItemText } from './Recomendations.Styles';

import { RoutinesDefaultOptionsData } from '../../../data/RoutinesDefaultOptionsData';
import { useTheme } from '@emotion/react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


const Recomendations = ({ onVideoOpen }) => {
  const theme = useTheme();


  return (
    <>
      <BackgroundImage />
      <SliderWrapper>
        <SliderTitle>
          Recommended for you</SliderTitle>
        <SliderContainer>
          {RoutinesDefaultOptionsData.map((routine) => (
            <SliderItem
              key={routine.id}
              bgImage={routine.image}
              onClick={() => onVideoOpen(routine)}>
              <SliderItemTextContainer>
                <SliderItemTitle
                  style={{
                    background: theme.palette.ImpButtonBgColor,
                    color: theme.palette.ImpButtonColorText
                  }}
                >{routine.title}</SliderItemTitle>
                <SliderItemTextsContainer
                  style={{
                    background: theme.palette.ImpButtonBgColor,
                    color: theme.palette.ImpButtonColorText
                  }}>
                  <SliderItemInfoContainer>
                    <PlayCircleIcon fontSize='small' />
                    <SliderItemText>{routine.duration} min</SliderItemText>
                  </SliderItemInfoContainer>
                  <SliderItemInfoContainer>
                    <LocalFireDepartmentIcon fontSize='small' />
                    <SliderItemText >{routine.calories} Cal</SliderItemText>
                  </SliderItemInfoContainer>
                </SliderItemTextsContainer>
              </SliderItemTextContainer>
            </SliderItem>
          ))}
        </SliderContainer>
      </SliderWrapper>
    </>
  )
}

export default Recomendations