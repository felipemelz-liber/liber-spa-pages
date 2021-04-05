import React from 'react';
import LoadingSpinner from './LoadingSpinner';

export default {
  title: 'Components 1.0|Loading/Spinner',

  parameters: {
    jest: ['LoadingSpinner'],
  },
};

export const defaultStory = () => <LoadingSpinner />;

defaultStory.story = {
  name: 'default',
};
