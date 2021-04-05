import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { DefaultAlert, SuccessAlert, WarningAlert, DangerAlert } from './StyledAlert';
import { HelpCircle } from '../Icons/MaterialDesign';

const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafdff;
  padding: 64px;
  box-sizing: border-box;
`;

export default {
  title: 'Components 2.0|Alert',
  parameters: {
    jest: ['StyledAlert'],
  },
};

export const defaultStory = () => {
  return (
    <Center>
      <DefaultAlert>Conteudo de informação</DefaultAlert>
    </Center>
  );
};

defaultStory.story = {
  name: 'default',
};

export const warning = () => {
  return (
    <Center>
      <WarningAlert>Conteudo de informação</WarningAlert>
    </Center>
  );
};

export const success = () => {
  return (
    <Center>
      <SuccessAlert>Conteudo de informação</SuccessAlert>
    </Center>
  );
};

export const danger = () => {
  return (
    <Center>
      <DangerAlert>Conteudo de informação</DangerAlert>
    </Center>
  );
};

export const withAdditionalInformation = () => {
  return (
    <Center>
      <DefaultAlert additionalInfoContent="Conteudo adicional de informação">
        Conteudo de informação
      </DefaultAlert>
    </Center>
  );
};

export const withCustomIcon = () => {
  return (
    <Center>
      <DefaultAlert additionalInfoContent="Conteudo adicional de informação" icon={<HelpCircle />}>
        Conteudo de informação
      </DefaultAlert>
    </Center>
  );
};

export const withOnCloseFunction = () => {
  return (
    <Center>
      <DefaultAlert
        additionalInfoContent="Conteudo adicional de informação"
        onClose={action('clicked')}
      >
        Conteudo de informação
      </DefaultAlert>
    </Center>
  );
};
