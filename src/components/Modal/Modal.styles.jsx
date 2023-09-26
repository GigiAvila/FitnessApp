import styled from "styled-components";
import { Link } from "react-router-dom";


export const ModalPopover = styled.div`
position: fixed;
inset: 0;
display: flex;
justify-content: center;
align-items: center;



`


export const ModalContainer = styled.div`
min-width: 92vw;
max-width: 100vw;
height: auto;
min-height: 75vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 15px;

`


export const CloseButtonContainer = styled.div`
align-self: flex-end;
height: auto;
padding: 2vw;`

export const ModalTextContainer = styled.div`
width: 100%;
height: auto; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`


export const CloseEditionButtonContainer = styled.div`
width: 100%;
display:flex;
justify-content: flex-end;
align-items: center;
`

export const CloseEditionButton = styled(Link)`
width: auto;
padding: 0.5rem;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;
margin: 1rem;
`
