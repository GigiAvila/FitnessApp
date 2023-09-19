import styled from "styled-components";
import { Link } from "react-router-dom";




export const ProfileCardWrapper = styled.div`
width: 90%;
padding: 2vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
border-radius: 4px;


 > p {
  font-size: 5vw;
}
`

export const ProfileTitleContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 5vw;`


export const UserAvatarContainer = styled.div`
width: 20vw;
height: auto;
`

export const UserAvatarPhoto = styled.img`
width: 100%;
height: auto;
border-radius: 50%;`


export const ProfileName = styled.h3`
font-size: 8vw;
`

export const ProfileDataContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 5vw;
`

export const ProfileDataButton = styled(Link)`
width: 40%;
padding: 0.5rem;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;

align-self: flex-end;
font-size: 4vw;
`

