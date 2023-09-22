import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormLabel, LabelText, FormInput, ActionButtonsContainer, FormButton } from './UserProfileForm.styles'
import { useTheme } from '@emotion/react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const UserProfileForm = ({ onSave, onCancel, user }) => {
  const theme = useTheme();

  const initialUserData = {
    ...user,
  };

  const { handleSubmit, register } = useForm({
    defaultValues: initialUserData,
  });

  const onSubmit = (formData) => {
    console.log(formData);
    alert('You are about to change your profile information ⚠️');
    onSave(formData);

  };

  const saveButtonRef = useRef(null);

  useEffect(() => {
    if (saveButtonRef.current) {
      saveButtonRef.current.focus();

    }
  }, []);


  return (
    <>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>
          <LabelText>Introduce your name:</LabelText>
          <FormInput type="text" placeholder='Introduce your name' {...register('name')} />
        </FormLabel>
        <FormLabel>
          <LabelText>Introduce your age:</LabelText>
          <FormInput type="number" placeholder='Introduce your age' {...register('age')} />
        </FormLabel>
        <FormLabel>
          <LabelText>Introduce tu weight (kg):</LabelText>
          <FormInput type="number" placeholder='Introduce your weight' {...register('weight')} />
        </FormLabel>
        <FormLabel>
          <LabelText>Introduce tu height (cm):</LabelText>
          <FormInput type="number" placeholder='Introduce your height' {...register('height')} />
        </FormLabel>

        <ActionButtonsContainer>
          <FormButton
            type="button"
            onClick={onCancel}
            style={{
              background: theme.palette.ImpButtonBgColor,
              color: theme.palette.ImpButtonColorText
            }}
          >
            Cancel
          </FormButton>
          <FormButton
            type="submit"
            ref={saveButtonRef}
            style={{
              background: theme.palette.ImpButtonBgColor,
              color: theme.palette.ImpButtonColorText
            }}
          >
            Save changes
          </FormButton>
        </ActionButtonsContainer>
      </Form>
    </>
  );

};

export default UserProfileForm;
