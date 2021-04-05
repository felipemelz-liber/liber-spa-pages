import React from 'react';
import { ModalButton, ModalPrimaryButton, ModalSuccessButton, ModalDangerButton } from '../Buttons';

export default {
  title: 'Components 1.0|Buttons/Modal Button',
};

export const defaultStory = () => <ModalButton>Default Modal Button</ModalButton>;

defaultStory.story = {
  name: 'default',
};

export const primary = () => <ModalPrimaryButton>Modal Primary Button</ModalPrimaryButton>;
export const success = () => <ModalSuccessButton>Modal Success Button</ModalSuccessButton>;
export const danger = () => <ModalDangerButton>Modal Danger Button</ModalDangerButton>;
