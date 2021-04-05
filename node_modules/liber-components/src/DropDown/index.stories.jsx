import React from 'react';
import DropDown from './components/DropDown';
import { Option } from './components/styles';

export default {
  title: 'Components 1.0|DropDown',
  parameters: {
    jest: ['DropDown'],
  },
};

export const defaultStory = () => (
  <DropDown>
    <Option value="last-6-months">Últimos 6 meses</Option>
    <Option value="last-12-months">Últimos 12 meses</Option>
    <Option value="since-beginning">Desde o Início</Option>
  </DropDown>
);

defaultStory.story = {
  name: 'default',
};
