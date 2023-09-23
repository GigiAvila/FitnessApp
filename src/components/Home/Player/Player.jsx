import React, { useState, useEffect, useContext } from 'react';
import ReactPlayer from 'react-player';
import { VideoPopover, Tooltip } from './Player.Styles';
import ReactDOM from 'react-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useTheme } from '@emotion/react';
import VideoButtons from './VideoButtons';
import EndRoutineMessage from './EndRoutineMessage';
import { RoutinesContext } from '../../../context/RoutinesContext';

function Player({ handleIsOpen, selectedRoutine }) {
  const theme = useTheme();
  const { addRoutine } = useContext(RoutinesContext);




  const [showTooltip, setShowTooltip] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleNextVideo = () => {
    if (currentVideoIndex < selectedRoutine.exercises.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setShowMessage(true);
      addRoutine(selectedRoutine);
      console.log(selectedRoutine)

    }
  };


  const handlePrevVideo = () => {
    if (currentVideoIndex === selectedRoutine.exercises.length - 1) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  useEffect(() => {
    setCurrentVideoIndex(0);
  }, [selectedRoutine]);

  return (
    <>
      {ReactDOM.createPortal(
        <VideoPopover
          style={{
            background: theme.palette.background,
          }}
        >
          <ArrowBackIosIcon
            style={{
              color: theme.palette.color,
              position: 'fixed',
              top: '20px',
              left: '20px',
            }}
            onClick={handleIsOpen}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          {showTooltip && (
            <Tooltip
              style={{
                background: theme.palette.color,
                color: theme.palette.background,
              }}
            >
              Go back to Home 🏠
            </Tooltip>
          )}
          <h2>{selectedRoutine.title}</h2>
          <h5>{selectedRoutine.type}</h5>
          <ReactPlayer
            url={selectedRoutine.exercises[currentVideoIndex].video}
            width="90%"
            height="auto"
            controls
            config={{
              file: {
                attributes: {
                  playsInline: true,
                  preload: 'auto',
                },
              },
            }}
            onEnded={handleNextVideo}
          />
          <VideoButtons handleNextVideo={handleNextVideo} handlePrevVideo={handlePrevVideo} />

          {showMessage ?
            (<EndRoutineMessage />) : null
          }
        </VideoPopover>,
        document.getElementById('portal')
      )}
    </>
  );
}

export default Player;
