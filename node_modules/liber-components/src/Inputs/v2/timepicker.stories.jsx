import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { TimePicker } from '../Inputs';

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
  title: 'Components 2.0|Input/TimePicker',
  parameters: {
    jest: ['TimePicker'],
  },
};

export const defaultStory = () => (
  <Center>
    <TimePicker label="Time" onChange={action('onChange')} />
  </Center>
);

defaultStory.story = {
  name: 'default',
};
