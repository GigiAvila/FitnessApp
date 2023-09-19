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
width: 90vw;
height: 60vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 4px;

`


export const CloseButtonContainer = styled.div`
align-self: flex-end;
height: auto;`

export const ModalTextContainer = styled.div`
width: 100 %;
height: auto; 
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
margin: 1rem;`
