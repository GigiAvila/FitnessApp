import React from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import styled from 'styled-components'

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  width: 90vw;

  @media (min-width: 768px) {
    width: 50vw;
  }
`

const Button = styled.div`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 4vw;
  gap: 5px;

  @media (min-width: 768px) {
    font-size: 2vw;
  }
`

function VideoButtons({ handlePrevVideo, handleNextVideo }) {
  return (
    <ButtonsContainer>
      <Button onClick={handlePrevVideo}>
        <ArrowCircleLeftIcon fontSize='large' />
        <span>Previous</span>
      </Button>
      <Button onClick={handleNextVideo}>
        <span>Next</span>
        <ArrowCircleRightIcon fontSize='large' />
      </Button>
    </ButtonsContainer>
  )
}

export default VideoButtons
