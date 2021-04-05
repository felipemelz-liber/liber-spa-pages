import React, { useState, useEffect } from 'react';
import LinearProgress from './LinearProgress';

export default {
  title: 'Components 1.0|LinearProgress',

  parameters: {
    jest: ['LinearProgress'],
  },
};

export const defaultStory = () => <LinearProgress />;

defaultStory.story = {
  name: 'default',
};

export const withValue = () => <LinearProgress determinate value={50} />;
export const withValueAndHeight = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) setProgress(progress + 5);
      else setProgress(0);
    }, 800);
    return () => {
      clearInterval(interval);
    };
  });
  return <LinearProgress height={16} determinate value={progress} />;
};
export const withValueIndeterminate = () => <LinearProgress height={16} />;

withValue.story = {
  name: 'with value',
};
