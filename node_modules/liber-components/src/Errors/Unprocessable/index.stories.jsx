import React from 'react';
import Unprocessable from './Unprocessable';

export default {
  title: 'Components 1.0|Errors/Unprocessable',
  parameters: {
    jest: ['Unprocessable'],
  },
};

export const defaultStory = () => <Unprocessable />;

defaultStory.story = {
  name: 'default',
};
