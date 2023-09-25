import React from 'react';
import { ExerciseWrapper, ExercisesTitle, ExercisesContainer, ExerciseTextContainer, ExerciseContainer, DataContainer, ExerciseTitle, ExerciseText } from './RoutineExercisesStyles'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import RepeatIcon from '@mui/icons-material/Repeat';
import { useTheme } from '@emotion/react';


const RoutinesExercises = ({ selectedRoutine }) => {
  const theme = useTheme();


  return (
    <ExerciseWrapper>
      <ExercisesTitle>Preview</ExercisesTitle>
      <ExercisesContainer>
        {selectedRoutine.exercises.map((exercise, index) => (
          <ExerciseContainer
            key={index}
            style={{
              border: `1px solid ${theme.palette.hoverColor}`,

            }}>
            <ExerciseTextContainer>
              <ExerciseTitle>{exercise.name}</ExerciseTitle>
              <DataContainer><FormatListNumberedIcon fontSize="small" /><ExerciseText>Sets: {exercise.series}</ExerciseText></DataContainer>
              <DataContainer><RepeatIcon fontSize="small" /><ExerciseText>Times:{exercise.repetitions}</ExerciseText></DataContainer>


            </ExerciseTextContainer>
            <video controls>
              <source src={exercise.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </ExerciseContainer>
        ))}
      </ExercisesContainer>
    </ExerciseWrapper>
  );
};

export default RoutinesExercises;
