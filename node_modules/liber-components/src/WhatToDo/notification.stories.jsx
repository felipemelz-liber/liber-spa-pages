import React from 'react';
import NotificationBox from './NotificationBox';

export default {
  title: 'Components 1.0|WhatToDo/Notification Box',
  parameters: {
    jest: ['WhatToDo'],
  },
};

export const defaultStory = () => <NotificationBox />;

defaultStory.story = {
  name: 'default',
};

export const withLabel = () => <NotificationBox label="Conteudo" />;

export const withChildren = () => <NotificationBox label="Conteudo">Texto</NotificationBox>;
