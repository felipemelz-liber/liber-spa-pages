import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import { LoginContainer, Footer as LoginFooter } from './LoginForm.styles';
import { Button } from '../Buttons';

const Footer = styled(LoginFooter)`
  background-color: #009dff;
`;

export default {
  title: 'Components 2.0|LoginForm',

  parameters: {
    jest: ['LoginForm'],
  },
};

export const form = () => (
  <LoginForm onFieldChange={action('onFieldChange')} onSubmit={action('onSubmit')} />
);

export const formCustomTitle = () => (
  <LoginForm
    title="Formulário"
    onFieldChange={action('onFieldChange')}
    onSubmit={action('onSubmit')}
  />
);

formCustomTitle.story = {
  name: 'form/custom title',
};

export const formCustomButton = () => (
  <LoginForm
    button={<Button version={2}>Enviar</Button>}
    onFieldChange={action('onFieldChange')}
    onSubmit={action('onSubmit')}
  />
);

formCustomButton.story = {
  name: 'form/custom button',
};

export const formCustomLogo = () => (
  <LoginForm
    logo={<img src="https://baconmockup.com/300/200" alt="Bacon" title="Bacon" />}
    onFieldChange={action('onFieldChange')}
    onSubmit={action('onSubmit')}
  />
);

formCustomLogo.story = {
  name: 'form/custom logo',
};

export const container = () => <LoginContainer />;

export const footer = () => <Footer />;
