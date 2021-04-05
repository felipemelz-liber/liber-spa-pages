import React from 'react';
import styled from 'styled-components';
import { NumberField } from '../Inputs';

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
  title: 'Components 2.0|Input/NumberField',
  parameters: {
    jest: ['NumberField'],
  },
};

export const defaultStory = () => (
  <Center>
    <NumberField label="Label do input" />
  </Center>
);

defaultStory.story = {
  name: 'default',
};

export const withMinValue = () => (
  <Center>
    <NumberField label="Label do input" min={0} />
  </Center>
);

withMinValue.story = {
  name: 'with min value',
};

export const withMaxValue = () => (
  <Center>
    <NumberField label="Label do input" max={10} />
  </Center>
);

withMaxValue.story = {
  name: 'with max value',
};

export const withMinAndMaxValue = () => (
  <Center>
    <NumberField label="Label do input" min={2} max={10} />
  </Center>
);

withMinAndMaxValue.story = {
  name: 'with min and max value',
};

export const withFloatValue = () => (
  <Center>
    <NumberField label="Label do input" step={0.01} precision={2} />
  </Center>
);

withFloatValue.story = {
  name: 'with float value',
};
