import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../Buttons';

export default {
  title: 'Components 1.0|Buttons/Simple Button',
};

export const defaultStory = () => <Button onClick={action('clicked')}>Default Button</Button>;

defaultStory.story = {
  name: 'default',
};
