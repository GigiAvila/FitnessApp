import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Form = styled.form`
width: 100%;
height: auto;
padding: 2vw;
display: flex;
flex-direction: column;
align-items: center;
gap: 1vw;

`

export const FormLabel = styled.label`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
gap: 0.5vw;

> select {
  height: 8vw;
  padding: 1vw;
  font-size:3vw;
  
}
`

export const LabelText = styled.p`
width: 100%;
font-size: 4vw;
font-weight: bold;

`

export const FormInput = styled.input`
width: 60vw;
font-size: 3vw;
height: 8vw;
padding: 1vw;`


export const ActionButtonsContainer = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 4vw;
margin-top: 4vw;
`

export const FormButton = styled.button`
border-radius: 5px;
height: 4vh;
border: none;
font-size: 3.5vw;

  `
