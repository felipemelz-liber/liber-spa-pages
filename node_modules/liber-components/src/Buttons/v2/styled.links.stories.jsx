import React from 'react';
import styled from 'styled-components';
import { MdHelpCircle } from '../../Icons';
import {
  Link,
  PrimaryLink,
  SecondaryLink,
  SuccessLink,
  AlertLink,
  ErrorLink,
  FlatLink,
} from '../Buttons';

export default {
  title: 'Components 2.0|Buttons/Styled Buttons/Links',
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
    <Link version={2} size="small" href="#link">
      Flat
    </Link>
    <br />
    <br />
    <Link version={2} href="#link">
      Flat
    </Link>
    <br />
    <br />
    <Link version={2} href="#link" disabled>
      Flat Disabled
    </Link>
    <br />
    <br />
    <Link version={2} size="large" href="#link">
      Flat
    </Link>
    <br />
    <br />
    <Link version={2} circle size="large" href="#link">
      <MdHelpCircle />
    </Link>
  </>
);
export const newFlat = () => (
  <>
    <Container>
      <Column>
        <FlatLink size="small" href="#link">
          Flat
        </FlatLink>
        <br />
        <br />
        <FlatLink href="#link">Flat</FlatLink>
        <br />
        <br />
        <FlatLink href="#link" disabled>
          Flat disabled
        </FlatLink>
        <br />
        <br />
        <FlatLink size="large" href="#link">
          Flat
        </FlatLink>
        <br />
        <br />
        <FlatLink circle size="large" href="#link">
          <MdHelpCircle />
        </FlatLink>
      </Column>
      <Column>
        <FlatLink color="danger" size="small" href="#link">
          Flat
        </FlatLink>
        <br />
        <br />
        <FlatLink color="danger" href="#link">
          Flat
        </FlatLink>
        <br />
        <br />
        <FlatLink color="danger" href="#link">
          Flat disabled
        </FlatLink>
        <br />
        <br />
        <FlatLink color="danger" size="large" href="#link">
          Flat
        </FlatLink>
        <br />
        <br />
        <FlatLink color="danger" circle size="large" href="#link">
          <MdHelpCircle />
        </FlatLink>
      </Column>
    </Container>
  </>
);

export const primary = () => (
  <>
    <PrimaryLink version={2} size="small" href="#link">
      Primary
    </PrimaryLink>
    <br />
    <br />
    <PrimaryLink version={2} href="#link">
      Primary
    </PrimaryLink>
    <br />
    <br />
    <PrimaryLink version={2} href="#link" disabled>
      Primary disabled
    </PrimaryLink>
    <br />
    <br />
    <PrimaryLink outlined version={2} href="#link">
      Primary
    </PrimaryLink>
    <br />
    <br />
    <PrimaryLink version={2} size="large" href="#link">
      Primary
    </PrimaryLink>
    <br />
    <br />
    <PrimaryLink version={2} size="large" href="#link">
      <MdHelpCircle />
    </PrimaryLink>
    <br />
    <br />
    <PrimaryLink version={2} circle size="large" href="#link">
      <MdHelpCircle />
    </PrimaryLink>
  </>
);

export const secondary = () => (
  <>
    <SecondaryLink version={2} size="small" href="#link">
      Secondary
    </SecondaryLink>
    <br />
    <br />
    <SecondaryLink version={2} href="#link">
      Secondary
    </SecondaryLink>
    <br />
    <br />
    <SecondaryLink version={2} href="#link" disabled>
      Secondary disabled
    </SecondaryLink>
    <br />
    <br />
    <SecondaryLink version={2} size="large" href="#link">
      Secondary
    </SecondaryLink>
    <br />
    <br />
    <SecondaryLink version={2} size="large" href="#link">
      <MdHelpCircle />
    </SecondaryLink>
    <br />
    <br />
    <SecondaryLink version={2} circle size="large" href="#link">
      <MdHelpCircle />
    </SecondaryLink>
  </>
);

export const success = () => (
  <>
    <SuccessLink version={2} size="small" href="#link">
      Success
    </SuccessLink>
    <br />
    <br />
    <SuccessLink version={2} href="#link">
      Success
    </SuccessLink>
    <br />
    <br />
    <SuccessLink version={2} href="#link" disabled>
      Success disabled
    </SuccessLink>
    <br />
    <br />
    <SuccessLink outlined version={2} href="#link">
      Success
    </SuccessLink>
    <br />
    <br />
    <SuccessLink version={2} size="large" href="#link">
      Success
    </SuccessLink>
    <br />
    <br />
    <SuccessLink version={2} size="large" href="#link">
      <MdHelpCircle />
    </SuccessLink>
    <br />
    <br />
    <SuccessLink version={2} circle size="large" href="#link">
      <MdHelpCircle />
    </SuccessLink>
  </>
);

export const alert = () => (
  <>
    <AlertLink version={2} size="small" href="#link">
      Alert
    </AlertLink>
    <br />
    <br />
    <AlertLink version={2} href="#link">
      Alert
    </AlertLink>
    <br />
    <br />
    <AlertLink version={2} href="#link" disabled>
      Alert disabled
    </AlertLink>
    <br />
    <br />
    <AlertLink outlined version={2} href="#link">
      Alert
    </AlertLink>
    <br />
    <br />
    <AlertLink version={2} size="large" href="#link">
      Alert
    </AlertLink>
    <br />
    <br />
    <AlertLink version={2} size="large" href="#link">
      <MdHelpCircle />
    </AlertLink>
    <br />
    <br />
    <AlertLink version={2} circle size="large" href="#link">
      <MdHelpCircle />
    </AlertLink>
  </>
);

export const error = () => (
  <>
    <ErrorLink version={2} size="small" href="#link">
      Error
    </ErrorLink>
    <br />
    <br />
    <ErrorLink version={2} href="#link">
      Error
    </ErrorLink>
    <br />
    <br />
    <ErrorLink version={2} href="#link" disabled>
      Error disabled
    </ErrorLink>
    <br />
    <br />
    <ErrorLink outlined version={2} href="#link">
      Error
    </ErrorLink>
    <br />
    <br />
    <ErrorLink version={2} size="large" href="#link">
      Error
    </ErrorLink>
    <br />
    <br />
    <ErrorLink version={2} size="large" href="#link">
      <MdHelpCircle />
    </ErrorLink>
    <br />
    <br />
    <ErrorLink version={2} circle size="large" href="#link">
      <MdHelpCircle />
    </ErrorLink>
  </>
);
