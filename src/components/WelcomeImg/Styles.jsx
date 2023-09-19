import styled from "styled-components";
import { themeLight, themeDark } from '../../Styles/theme';


export const WelcomeImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
`;

export const WelcomeImg = styled.img`
  width: 100%;
  height: auto;
`;

export const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    ${({ themeProvide }) => (themeProvide === themeDark ? "#1d1d1c" : "#e6e6e6")} 100%
  );
  pointer-events: none;
`;
