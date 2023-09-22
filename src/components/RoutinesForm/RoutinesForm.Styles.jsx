import styled from "styled-components";


export const FormImgContainer = styled.div`
width: 100%;
height: 80vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius:15px;


`

export const FormTitle = styled.h4`
  font-size: 6vw;
  margin: 0;
  padding: 2vw;
`

export const Form = styled.form`
  width: 100%;
  height: auto;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vw;

`

export const FormLabel = styled.label`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 2vw;

  > select {
    width: 70vw;
    height: 8vw;
    border-radius: 4px;  
    color: grey;
    font-size: 3vw;


    > option {
      color: grey;
      font-size: 3vw;
    }

  }
`

export const LabelText = styled.p`
  width: 100%;
  font-size: 4vw;
  font-weight: bold;
  margin: 0;
`

export const FormInput = styled.input`
  width: 70vw;
  font-size: 3vw;
  height: 8vw;
  padding: 1vw;
  border: none; 
  border-radius: 4px; 

  &::placeholder {
    color: grey; 
    font-size: 3vw; 
  }
`

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
  cursor: pointer;
  
 
`
