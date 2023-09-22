import React, { useContext, useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { ProfileCardWrapper, ProfileTitleContainer, UserAvatarContainer, UserAvatarPhoto, ProfileName, ProfileDataContainer, ProfileDataButton } from './ProfileCard.styles'
import { useTheme } from '@emotion/react';
import avatarPhoto from '../../../public/avatar.png'
import { UserContext } from '../../context/UserContext';
import Modal from '../Modal/Modal'
import UserProfileForm from '../UserProfileForm/UserProfileForm';


const ProfileCard = () => {
  const theme = useTheme();
  const { user, setUser } = useContext(UserContext)

  const [isOpen, setIsOpen] = useState(false);

  const handleSaveChanges = (formData) => {
    setUser(formData);
    setIsOpen(false);
  }


  return (

    <>
      <ProfileCardWrapper style={{
        border: `1px solid ${theme.palette.border}`
      }}>
        {user.name ? (
          <>
            <ProfileTitleContainer>
              <UserAvatarContainer><UserAvatarPhoto src={avatarPhoto} alt='avatarphoto' /></UserAvatarContainer>
              <ProfileName>{user.name}</ProfileName>

            </ProfileTitleContainer>

            <ProfileDataContainer>
              <p>{user.age || '-'} years</p>
              <p>{user.weight || '-'} Kg</p>
              <p>{user.height || '-'} cm</p>
            </ProfileDataContainer>
          </>

        ) : (
          <p>Please complete your profile information</p>
        )}
        <ProfileDataButton
          onClick={() => setIsOpen(true)}
          style={{
            background: theme.palette.ImpButtonBgColor,
            color: theme.palette.ImpButtonColorText
          }}
        >Edit profile <KeyboardArrowRightIcon /> </ProfileDataButton>
      </ProfileCardWrapper>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <UserProfileForm
          user={user}
          onCancel={() => setIsOpen(false)}
          onSave={handleSaveChanges}
        />
      </Modal>
    </>
  )
}

export default ProfileCard