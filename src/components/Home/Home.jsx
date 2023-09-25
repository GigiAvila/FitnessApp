import React, { useState } from 'react';
import Player from './Player/Player';
import Recomendations from './Recommendations/Recomendations';
import { HomeContainer } from './Home.Styles'

const Home = () => {

  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleVideoOpen = (routine) => {
    setSelectedRoutine(routine);
    handleIsOpen(true);
  }

  return (
    <HomeContainer>

      {isOpen ? (<Player handleIsOpen={handleIsOpen} selectedRoutine={selectedRoutine} />) : <Recomendations onVideoOpen={handleVideoOpen} />}


    </HomeContainer>
  );
}

export default Home;
