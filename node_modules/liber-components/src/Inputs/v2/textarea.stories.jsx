import React from 'react';
import styled from 'styled-components';
import { TextArea } from '../Inputs';

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
  title: 'Components 2.0|Input/TextArea',
  parameters: {
    jest: ['TextArea'],
  },
};

export const defaultStory = () => (
  <Center>
    <TextArea version={2} label="CPF" rows="6" />
  </Center>
);

defaultStory.story = {
  name: 'default',
};

export const withErrorMessage = () => (
  <Center>
    <TextArea version={2} label="CPF" value="226.718.96-0-77" errorMessage="CPF inválido" />
  </Center>
);

export const withHelper = () => (
  <Center>
    <TextArea
      version={2}
      helper="Insira um CPF válido"
      label="CPF"
      hintText="999.999.999-9999999999999999999999"
    />
  </Center>
);
