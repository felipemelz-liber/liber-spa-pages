import React from 'react';
import InternalServerError from './InternalServerError';

export default {
  title: 'Components 1.0|Errors/Internal Error',
  parameters: {
    jest: ['InternalServerError'],
  },
};

export const defaultStory = () => <InternalServerError />;

defaultStory.story = {
  name: 'default',
};
