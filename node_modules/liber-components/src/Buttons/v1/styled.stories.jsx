import React from 'react';
import { PrimaryButton, SecondaryButton, SuccessButton } from '../Buttons';

export default {
  title: 'Components 1.0|Buttons/Styled Button',
};

export const primary = () => <PrimaryButton>Primary Button</PrimaryButton>;
export const secondary = () => <SecondaryButton>Secondary Button</SecondaryButton>;
export const success = () => <SuccessButton>Success Button</SuccessButton>;
