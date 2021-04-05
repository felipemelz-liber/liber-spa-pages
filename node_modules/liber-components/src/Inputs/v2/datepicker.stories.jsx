import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { DatePicker } from '../Inputs';

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
  title: 'Components 2.0|Input/DatePicker',
  parameters: {
    jest: ['DatePicker'],
  },
};

export const defaultStory = () => (
  <Center>
    <DatePicker onChange={action('onChange')} />
  </Center>
);

defaultStory.story = {
  name: 'default',
};
