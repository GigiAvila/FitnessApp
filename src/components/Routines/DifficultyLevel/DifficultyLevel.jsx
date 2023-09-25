import React, { useState } from 'react';
import { LevelContainer, LevelOption } from './DifficultyLevel.Styles';
import { useTheme } from '@emotion/react';

const DifficultyLevel = ({ onLevelSetup }) => {
  const theme = useTheme();

  const [selectedLevel, setSelectedLevel] = useState('Beginner');


  const handleLevelClick = (selectedLevel) => {
    setSelectedLevel(selectedLevel);
    onLevelSetup(selectedLevel);
    

  };


  return (
    <LevelContainer style={{
      background: theme.palette.ImpButtonColorText,
      color: theme.palette.ImpButtonBgColor
    }}>
      <LevelOption
        style={{
          background: selectedLevel === 'Beginner' ? theme.palette.ImpButtonBgColor : theme.palette.ImpButtonColorText,
          color: selectedLevel === 'Beginner' ? theme.palette.ImpButtonColorText : theme.palette.ImpButtonBgColor
        }}
        onClick={() => handleLevelClick('Beginner')}
      >
        Beginner
      </LevelOption>
      <LevelOption
        style={{
          background: selectedLevel === 'Intermediate' ? theme.palette.ImpButtonBgColor : theme.palette.ImpButtonColorText,
          color: selectedLevel === 'Intermediate' ? theme.palette.ImpButtonColorText : theme.palette.ImpButtonBgColor
        }}
        onClick={() => handleLevelClick('Intermediate')}
      >
        Intermediate
      </LevelOption>
      <LevelOption
        style={{
          background: selectedLevel === 'Advance' ? theme.palette.ImpButtonBgColor : theme.palette.ImpButtonColorText,
          color: selectedLevel === 'Advance' ? theme.palette.ImpButtonColorText : theme.palette.ImpButtonBgColor
        }}
        onClick={() => handleLevelClick('Advance')}
      >
        Advance
      </LevelOption>
    </LevelContainer>
  );
};

export default DifficultyLevel;
