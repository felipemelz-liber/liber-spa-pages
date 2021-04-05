import React from 'react';
import Greeter from './Greeter';

export default {
  title: 'Components 1.0|Greeter',

  parameters: {
    jest: ['Greeter'],
  },
};

export const defaultStory = () => <Greeter />;

defaultStory.story = {
  name: 'default',
};
