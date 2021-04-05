import React from 'react';
import SimpleDisplay from './SimpleDisplay';

export default {
  title: 'Components 1.0|DataDisplay/Simple Display',
  parameters: {
    jest: ['SimpleDisplay'],
  },
};

export const defaultStory = () => <SimpleDisplay>752.235,65</SimpleDisplay>;

defaultStory.story = {
  name: 'default',
};

export const withLabel = () => <SimpleDisplay label="Valor a Receber">752.235,65</SimpleDisplay>;

export const withPrefix = () => (
  <SimpleDisplay label="Valor a Receber" prefix="R$">
    752.235,65
  </SimpleDisplay>
);
