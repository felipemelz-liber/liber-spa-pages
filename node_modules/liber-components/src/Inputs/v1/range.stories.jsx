import React from 'react';
import { RangeField } from '../Inputs';

export default {
  title: 'Components 1.0|Input/RangeField',
  parameters: {
    jest: ['RangeField'],
  },
};

export const defaultStory = () => <RangeField />;

defaultStory.story = {
  name: 'default',
};

export const withLabel = () => <RangeField label="Selecione o valor" />;

export const withMin = () => <RangeField min={20} />;

export const withMax = () => <RangeField max={50} />;

export const withSelectedRange = () => <RangeField from={15} to={25} />;
