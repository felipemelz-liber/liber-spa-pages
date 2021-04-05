import React from 'react';
import Dropzone from './Dropzone';

export default {
  title: 'Components 1.0|Dropzone',

  parameters: {
    jest: ['Dropzone'],
  },
};

export const defaultStory = () => <Dropzone>Insira sua imagem aqui</Dropzone>;

defaultStory.story = {
  name: 'default',
};
