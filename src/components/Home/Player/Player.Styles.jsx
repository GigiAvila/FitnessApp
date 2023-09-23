import styled from "styled-components";

export const VideoPopover = styled.div`
position: fixed;
inset: 0;
display: flex;
justify-content: center;
align-items: center;
height:90vh;
display: flex;
flex-direction: column;
gap: 3vw;

`

export const Tooltip = styled.span`
position: fixed;
top: 40px;
left: 50px;
padding: 0.5vw;
border-radius: 4px;
z-index:1; 
font-weight: bold;
`
