import React from 'react';
import NotFound from './NotFound';

export default {
  title: 'Components 1.0|Errors/Not Found',
  parameters: {
    jest: ['NotFound'],
  },
};

export const defaultStory = () => <NotFound />;

defaultStory.story = {
  name: 'default',
};
