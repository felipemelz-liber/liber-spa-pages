import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { DateTimePicker } from '../Inputs';

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
  title: 'Components 2.0|Input/DateTimePicker',
  parameters: {
    jest: ['DateTimePicker'],
  },
};

export const defaultStory = () => (
  <Center>
    <DateTimePicker label="Time" onChange={action('onChange')} />
  </Center>
);

defaultStory.story = {
  name: 'default',
};
