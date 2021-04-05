import React from 'react';
import { RadioButton } from '../Inputs';

export default {
  title: 'Components 1.0|Input/RadioButton',
  parameters: {
    jest: ['RadioButton'],
  },
};

export const defaultStory = () => <RadioButton>Arya Stark</RadioButton>;

defaultStory.story = {
  name: 'default',
};

export const checked = () => <RadioButton checked>Jon Snow</RadioButton>;
