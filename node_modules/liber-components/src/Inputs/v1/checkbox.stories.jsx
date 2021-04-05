import React from 'react';
import { Checkbox } from '../Inputs';

export default {
  title: 'Components 1.0|Input/Checkbox',
  parameters: {
    jest: ['Checkbox'],
  },
};

export const defaultStory = () => <Checkbox />;

defaultStory.story = {
  name: 'default',
};

export const checked = () => <Checkbox checked />;
