import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { DateTimeRangePicker } from '../Inputs';

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
  title: 'Components 2.0|Input/DateTimeRangePicker',
  parameters: {
    jest: ['DateTimeRangePicker'],
  },
};

export const defaultStory = () => (
  <Center>
    <DateTimeRangePicker onChange={action('onChange')} label="DateTimeRangePicker" />
  </Center>
);

defaultStory.story = {
  name: 'default',
};

export const wihthoutLabel = () => (
  <Center>
    <DateTimeRangePicker onChange={action('onChange')} />
  </Center>
);

wihthoutLabel.story = {
  name: 'wihthout label',
};

export const withPlaceholderHintText = () => (
  <Center>
    <DateTimeRangePicker
      label="DateTimeRangePicker"
      onChange={action('onChange')}
      placeholder="placeholder"
    />
  </Center>
);

withPlaceholderHintText.story = {
  name: 'with placeholder(hintText)',
};

export const error = () => (
  <Center>
    <DateTimeRangePicker
      label="DateTimeRangePicker"
      onChange={action('onChange')}
      errorMessage="Error Message"
    />
  </Center>
);

export const disabled = () => (
  <Center>
    <DateTimeRangePicker label="DateTimeRangePicker" onChange={action('onChange')} disabled />
  </Center>
);
