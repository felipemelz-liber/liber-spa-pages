import React from 'react';
import { ActionButton } from '../Buttons';

export default {
  title: 'Components 1.0|Buttons/Action Button',
  parameters: {
    jest: ['ActionButton'],
  },
};

export const defaultStory = () => <ActionButton>Action Button</ActionButton>;

defaultStory.story = {
  name: 'default',
};

export const withType = () => <ActionButton type="primary">Action Button</ActionButton>;
