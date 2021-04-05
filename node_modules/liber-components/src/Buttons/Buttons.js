import styled from 'styled-components';
import { wrapper } from '../Util/VersionWrapper';

import {
  Button as V1Button,
  PrimaryButton as V1PrimaryButton,
  SecondaryButton as V1SecondaryButton,
  SuccessButton as V1SuccesssButton,
  Link as V1Link,
  PrimaryLink as V1PrimaryLink,
  SecondaryLink as V1SecondaryLink,
  SuccessLink as V1SuccessLink,
} from './v1/StyledButtons';

import {
  Button as V2Button,
  PrimaryButton as V2PrimaryButton,
  SecondaryButton as V2SecondaryButton,
  SuccessButton as V2SuccesssButton,
  AlertButton as V2AlertButton,
  ErrorButton as V2ErrorButton,
  Link as V2Link,
  PrimaryLink as V2PrimaryLink,
  SecondaryLink as V2SecondaryLink,
  SuccessLink as V2SuccessLink,
  AlertLink as V2AlertLink,
  ErrorLink as V2ErrorLink,
  // FlatButton,
  // FlatLink,
} from './v2/StyledButtons';

export { default as ActionButton } from './v1/ActionButton';
export {
  ModalButton,
  ModalPrimaryButton,
  ModalSuccessButton,
  ModalDangerButton,
} from './v1/ModalButtons';

export const Button = styled(wrapper([V1Button, V2Button]))``;
export const PrimaryButton = styled(wrapper([V1PrimaryButton, V2PrimaryButton]))``;
export const SecondaryButton = styled(wrapper([V1SecondaryButton, V2SecondaryButton]))``;
export const SuccessButton = styled(wrapper([V1SuccesssButton, V2SuccesssButton]))``;
export const AlertButton = styled(wrapper([V2AlertButton]))``;
export const ErrorButton = styled(wrapper([V2ErrorButton]))``;
export const Link = styled(wrapper([V1Link, V2Link]))``;
export const PrimaryLink = styled(wrapper([V1PrimaryLink, V2PrimaryLink]))``;
export const SecondaryLink = styled(wrapper([V1SecondaryLink, V2SecondaryLink]))``;
export const SuccessLink = styled(wrapper([V1SuccessLink, V2SuccessLink]))``;
export const AlertLink = styled(wrapper([V2AlertLink]))``;
export const ErrorLink = styled(wrapper([V2ErrorLink]))``;
export { FlatButton } from './v2/StyledButtons';
export { FlatLink } from './v2/StyledButtons';
