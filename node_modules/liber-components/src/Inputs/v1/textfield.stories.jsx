import React from 'react';
import { TextField } from '../Inputs';

export default {
  title: 'Components 1.0|Input/TextField',
  parameters: {
    jest: ['TextField'],
  },
};

export const defaultStory = () => <TextField />;

defaultStory.story = {
  name: 'default',
};

export const disabled = () => <TextField disabled />;

export const withLabel = () => <TextField label="Name" />;

export const withOpenLabel = () => <TextField openLabel label="Name" />;

export const withValue = () => <TextField label="Name" value="Jon Snow" />;

export const withPrefix = () => <TextField prefix="$" value="1000,00" />;

export const withErrorMessage = () => <TextField errorMessage="Campo obrigatório" />;

export const withHelper = () => <TextField helper="Insira um e-mail válido" />;

export const withHintText = () => <TextField hintText="Insira o nome" />;
