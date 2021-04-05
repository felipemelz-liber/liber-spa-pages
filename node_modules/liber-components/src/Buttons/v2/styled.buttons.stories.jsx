import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { MdHelpCircle } from '../../Icons';
import {
  Button,
  PrimaryButton,
  SecondaryButton,
  SuccessButton,
  AlertButton,
  ErrorButton,
  FlatButton,
} from '../Buttons';

export default {
  title: 'Components 2.0|Buttons/Styled Buttons/Buttons',
  parameters: {
    jest: ['StyledButtons'],
  },
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  align-items: flex-start;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 8px;
`;

export const flat = () => (
  <>
    <Button version={2} size="small" onClick={action('clicked')}>
      Flat
    </Button>
    <br />
    <br />
    <Button version={2} size="small" onClick={action('clicked')}>
      <MdHelpCircle />
      Flat
    </Button>
    <br />
    <br />
    <Button version={2} onClick={action('clicked')}>
      Flat
    </Button>
    <br />
    <br />
    <Button version={2} onClick={action('clicked')}>
      <MdHelpCircle />
      Flat
    </Button>
    <br />
    <br />
    <Button version={2} size="large" onClick={action('clicked')}>
      Flat
    </Button>
    <br />
    <br />
    <Button version={2} disabled onClick={action('clicked')}>
      Flat
    </Button>
    <br />
    <br />
    <Button version={2} size="large" onClick={action('clicked')}>
      <MdHelpCircle /> Flat
    </Button>
    <br />
    <br />
    <Button version={2} circle size="large" onClick={action('clicked')}>
      <MdHelpCircle />
    </Button>
  </>
);
export const newFlat = () => (
  <>
    <Container>
      <Column>
        <FlatButton size="small" onClick={action('clicked')}>
          Flat
        </FlatButton>
        <br />
        <br />
        <FlatButton size="small" onClick={action('clicked')}>
          <MdHelpCircle />
          Flat
        </FlatButton>
        <br />
        <br />
        <FlatButton size="small" onClick={action('clicked')}>
          <MdHelpCircle />
          Flat
        </FlatButton>
        <br />
        <br />
        <FlatButton onClick={action('clicked')}>Flat</FlatButton>
        <br />
        <br />
        <FlatButton onClick={action('clicked')}>
          <MdHelpCircle />
          Flat
        </FlatButton>
        <br />
        <br />
        <FlatButton size="large" onClick={action('clicked')}>
          Flat
        </FlatButton>
        <br />
        <br />
        <FlatButton disabled onClick={action('clicked')}>
          Flat
        </FlatButton>
        <br />
        <br />
        <FlatButton size="large" onClick={action('clicked')}>
          <MdHelpCircle /> Flat
        </FlatButton>
        <br />
        <br />
        <FlatButton circle size="large" onClick={action('clicked')}>
          <MdHelpCircle />
        </FlatButton>
      </Column>
      <Column>
        <FlatButton color="danger" size="small" onClick={action('clicked')}>
          Flat
        </FlatButton>
        <br />
        <br />
        <FlatButton color="danger" size="small" onClick={action('clicked')}>
          <MdHelpCircle />
          Flat
        </FlatButton>
        <br />
        <br />
        <FlatButton color="danger" size="small" onClick={action('clicked')}>
          <MdHelpCircle />
          Flat
        </FlatButton>
        <br />
        <br />
        <FlatButton color="danger" onClick={action('clicked')}>
          Flat
        </FlatButton>
        <br />
        <br />
        <FlatButton color="danger" onClick={action('clicked')}>
          <MdHelpCircle />
          Flat
        </FlatButton>
        <br />
        <br />
        <FlatButton color="danger" size="large" onClick={action('clicked')}>
          Flat
        </FlatButton>
        <br />
        <br />
        <FlatButton color="danger" disabled onClick={action('clicked')}>
          Flat
        </FlatButton>
        <br />
        <br />
        <FlatButton color="danger" size="large" onClick={action('clicked')}>
          <MdHelpCircle /> Flat
        </FlatButton>
        <br />
        <br />
        <FlatButton color="danger" circle size="large" onClick={action('clicked')}>
          <MdHelpCircle />
        </FlatButton>
      </Column>
    </Container>
  </>
);

export const primary = () => (
  <>
    <PrimaryButton version={2} size="small" onClick={action('clicked')}>
      Primary
    </PrimaryButton>
    <br />
    <br />
    <PrimaryButton version={2} size="small" onClick={action('clicked')}>
      <MdHelpCircle />
      Primary
    </PrimaryButton>
    <br />
    <br />
    <PrimaryButton version={2} onClick={action('clicked')}>
      Primary
    </PrimaryButton>
    <br />
    <br />
    <PrimaryButton version={2} onClick={action('clicked')}>
      <MdHelpCircle />
      Primary
    </PrimaryButton>
    <br />
    <br />
    <PrimaryButton outlined version={2} onClick={action('clicked')}>
      <MdHelpCircle />
      Primary
    </PrimaryButton>
    <br />
    <br />
    <PrimaryButton version={2} size="large" onClick={action('clicked')}>
      Primary
    </PrimaryButton>
    <br />
    <br />
    <PrimaryButton version={2} disabled onClick={action('clicked')}>
      Primary
    </PrimaryButton>
    <br />
    <br />
    <PrimaryButton version={2} size="large" onClick={action('clicked')}>
      <MdHelpCircle />
      Primary
    </PrimaryButton>
    <br />
    <br />
    <PrimaryButton version={2} size="large" onClick={action('clicked')}>
      <MdHelpCircle />
    </PrimaryButton>
    <br />
    <br />
    <PrimaryButton version={2} circle size="large" onClick={action('clicked')}>
      <MdHelpCircle />
    </PrimaryButton>
  </>
);

export const secondary = () => (
  <>
    <SecondaryButton version={2} size="small" onClick={action('clicked')}>
      Primary
    </SecondaryButton>
    <br />
    <br />
    <SecondaryButton version={2} size="small" onClick={action('clicked')}>
      <MdHelpCircle />
      Primary
    </SecondaryButton>
    <br />
    <br />
    <SecondaryButton version={2} onClick={action('clicked')}>
      Primary
    </SecondaryButton>
    <br />
    <br />
    <SecondaryButton version={2} onClick={action('clicked')}>
      <MdHelpCircle />
      Primary
    </SecondaryButton>
    <br />
    <br />
    <SecondaryButton version={2} size="large" onClick={action('clicked')}>
      Primary
    </SecondaryButton>
    <br />
    <br />
    <SecondaryButton version={2} disabled onClick={action('clicked')}>
      Primary
    </SecondaryButton>
    <br />
    <br />
    <SecondaryButton version={2} size="large" onClick={action('clicked')}>
      <MdHelpCircle />
      Primary
    </SecondaryButton>
    <br />
    <br />
    <SecondaryButton version={2} size="large" onClick={action('clicked')}>
      <MdHelpCircle />
    </SecondaryButton>
    <br />
    <br />
    <SecondaryButton version={2} circle size="large" onClick={action('clicked')}>
      <MdHelpCircle />
    </SecondaryButton>
  </>
);

export const success = () => (
  <>
    <SuccessButton version={2} size="small" onClick={action('clicked')}>
      Success
    </SuccessButton>
    <br />
    <br />
    <SuccessButton version={2} size="small" onClick={action('clicked')}>
      <MdHelpCircle />
      Success
    </SuccessButton>
    <br />
    <br />
    <SuccessButton version={2} onClick={action('clicked')}>
      Success
    </SuccessButton>
    <br />
    <br />
    <SuccessButton version={2} onClick={action('clicked')}>
      <MdHelpCircle />
      Success
    </SuccessButton>
    <br />
    <br />
    <SuccessButton outlined version={2} onClick={action('clicked')}>
      <MdHelpCircle />
      Success
    </SuccessButton>
    <br />
    <br />
    <SuccessButton version={2} size="large" onClick={action('clicked')}>
      Success
    </SuccessButton>
    <br />
    <br />
    <SuccessButton version={2} disabled onClick={action('clicked')}>
      Success
    </SuccessButton>
    <br />
    <br />
    <SuccessButton version={2} size="large" onClick={action('clicked')}>
      <MdHelpCircle />
      Success
    </SuccessButton>
    <br />
    <br />
    <SuccessButton version={2} size="large" onClick={action('clicked')}>
      <MdHelpCircle />
    </SuccessButton>
    <br />
    <br />
    <SuccessButton version={2} circle size="large" onClick={action('clicked')}>
      <MdHelpCircle />
    </SuccessButton>
  </>
);

export const alert = () => (
  <>
    <AlertButton version={2} size="small" onClick={action('clicked')}>
      Alert
    </AlertButton>
    <br />
    <br />
    <AlertButton version={2} size="small" onClick={action('clicked')}>
      <MdHelpCircle />
      Alert
    </AlertButton>
    <br />
    <br />
    <AlertButton version={2} onClick={action('clicked')}>
      Alert
    </AlertButton>
    <br />
    <br />
    <AlertButton version={2} onClick={action('clicked')}>
      <MdHelpCircle />
      Alert
    </AlertButton>
    <br />
    <br />
    <AlertButton outlined version={2} onClick={action('clicked')}>
      <MdHelpCircle />
      Alert
    </AlertButton>
    <br />
    <br />
    <AlertButton version={2} size="large" onClick={action('clicked')}>
      Alert
    </AlertButton>
    <br />
    <br />
    <AlertButton version={2} disabled onClick={action('clicked')}>
      Alert
    </AlertButton>
    <br />
    <br />
    <AlertButton version={2} size="large" onClick={action('clicked')}>
      <MdHelpCircle />
      Alert
    </AlertButton>
    <br />
    <br />
    <AlertButton version={2} size="large" onClick={action('clicked')}>
      <MdHelpCircle />
    </AlertButton>
    <br />
    <br />
    <AlertButton version={2} circle size="large" onClick={action('clicked')}>
      <MdHelpCircle />
    </AlertButton>
  </>
);

export const error = () => (
  <>
    <ErrorButton version={2} size="small" onClick={action('clicked')}>
      Error
    </ErrorButton>
    <br />
    <br />
    <ErrorButton version={2} size="small" onClick={action('clicked')}>
      <MdHelpCircle />
      Error
    </ErrorButton>
    <br />
    <br />
    <ErrorButton version={2} onClick={action('clicked')}>
      Error
    </ErrorButton>
    <br />
    <br />
    <ErrorButton version={2} onClick={action('clicked')}>
      <MdHelpCircle />
      Error
    </ErrorButton>
    <br />
    <br />
    <ErrorButton outlined version={2} onClick={action('clicked')}>
      <MdHelpCircle />
      Error
    </ErrorButton>
    <br />
    <br />
    <ErrorButton version={2} disabled onClick={action('clicked')}>
      <MdHelpCircle />
      Error
    </ErrorButton>
    <br />
    <br />
    <ErrorButton version={2} size="large" onClick={action('clicked')}>
      Error
    </ErrorButton>
    <br />
    <br />
    <ErrorButton version={2} size="large" onClick={action('clicked')}>
      <MdHelpCircle />
      Error
    </ErrorButton>
    <br />
    <br />
    <ErrorButton version={2} size="large" onClick={action('clicked')}>
      <MdHelpCircle />
    </ErrorButton>
    <br />
    <br />
    <ErrorButton version={2} circle size="large" onClick={action('clicked')}>
      <MdHelpCircle />
    </ErrorButton>
  </>
);
