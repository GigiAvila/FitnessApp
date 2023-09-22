import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormImgContainer, FormTitle, Form, FormLabel, LabelText, FormInput, ActionButtonsContainer, FormButton } from './RoutinesForm.Styles';
import { useTheme } from '@emotion/react';
import { RoutinesDefaultOptionsData } from '../../data/RoutinesDefaultOptionsData';

const RoutinesForm = ({ onSave, onCancel, routineDataWithType }) => {
  const theme = useTheme();

  const [type, setType] = useState('');

  useEffect(() => {
    if (routineDataWithType && routineDataWithType.type) {
      setType(routineDataWithType.type);
    }
  }, [routineDataWithType]);

  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: routineDataWithType,
  });

  const onSubmit = (formData) => {
    onSave(formData);
  };

  return (
    <FormImgContainer>
      <FormTitle> My Own Routine </FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>
          <LabelText>Date:</LabelText>
          <FormInput type="date" {...register('date', { required: true })} />
          {errors.date && <span style={{ color: 'tomato' }}>This field is required</span>}
        </FormLabel>
        <FormLabel>
          <LabelText>Type:</LabelText>
          <select {...register('type', { required: true })}>
            <option value=''>Select a type</option>
            {RoutinesDefaultOptionsData.map((option, index) => (
              <option key={index} value={option.type}>
                {option.type}
              </option>
            ))}
          </select>
          {errors.type && <span style={{ color: 'tomato' }}>This field is required</span>}
        </FormLabel>
        <FormLabel>
          <LabelText>Level:</LabelText>
          <select {...register('level', { required: true })}>
            <option value=''>Select a level</option>
            <option value='Beginner'> Beginner</option>
            <option value='Intermediate'> Intermediate</option>
            <option value='Advance'> Advance</option>
          </select>
        </FormLabel>
        <FormLabel>
          <LabelText>Routine's name:</LabelText>
          <FormInput type="text" placeholder="Give a title to your new routine" {...register('title', { required: true })} />
          {errors.title && <span style={{ color: 'tomato' }}>This field is required</span>}
        </FormLabel>
        <FormLabel>
          <LabelText>Duration (mins):</LabelText>
          <FormInput type="number" placeholder="Set the time you want to practice" {...register('duration', { required: true })} />
          {errors.duration && <span style={{ color: 'tomato' }}>This field is required</span>}
        </FormLabel>

        <ActionButtonsContainer>
          <FormButton
            type="button"
            onClick={onCancel}
            style={{
              background: theme.palette.ImpButtonBgColor,
              color: theme.palette.ImpButtonColorText,
            }}
          >
            Cancel Routine
          </FormButton>
          <FormButton
            type="submit"
            style={{
              background: theme.palette.ImpButtonBgColor,
              color: theme.palette.ImpButtonColorText,
            }}
          >
            Add Routine
          </FormButton>
        </ActionButtonsContainer>
      </Form>
    </FormImgContainer>
  );
};

export default RoutinesForm;
