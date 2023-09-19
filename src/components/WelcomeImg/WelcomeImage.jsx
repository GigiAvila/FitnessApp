import React from 'react';
import { WelcomeImgWrapper, WelcomeImg, Mask } from './Styles'; // Agrega Mask para la máscara degradada
import WelcomePhoto from '../../../public/WelcomePhoto1.jpg';

const WelcomeImage = ({ themeProvide }) => {
  return (
    <>
      <WelcomeImgWrapper>
        <WelcomeImg src={WelcomePhoto} alt='GirlWorkingOUtWelcomePhoto' />
        <Mask themeProvide={themeProvide} />
      </WelcomeImgWrapper>

    </>
  );
};

export default WelcomeImage;
