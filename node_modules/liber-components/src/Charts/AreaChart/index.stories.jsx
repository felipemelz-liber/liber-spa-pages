import React from 'react';
import AreaChart from './AreaChart';

export default {
  title: 'Components 1.0|Charts/Area Chart',
  parameters: {
    jest: ['AreaChart'],
  },
};

export const defaultStory = () => <AreaChart />;

defaultStory.story = {
  name: 'default',
};
