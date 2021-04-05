import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import Modal from './Modal';
import { PrimaryButton } from '../../Buttons';
import { ModalContainer, ModalContent, ModalButtons } from '../../GenericStyles';

const Container = styled.div`
  width: 200px;
  height: 150px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CustomContentContainer = styled.div`
  padding: 48px;
`;

export default {
  title: 'Components 1.0|Dialog/Modal',
  parameters: {
    jest: ['Modal'],
  },
};

export const defaultStory = () => {
  const [state, setState] = React.useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setState(true);
        }}
      >
        Open Modal
      </button>
      <Modal
        show={state}
        elementId="root"
        onLeaved={() => {
          setState(false);
          action('left');
        }}
      >
        <ModalContainer>
          <ModalContent>Content</ModalContent>
          <ModalButtons>
            <PrimaryButton
              version={2}
              onClick={() => {
                setState(false);
              }}
            >
              CLOSE
            </PrimaryButton>
          </ModalButtons>
        </ModalContainer>
      </Modal>
    </>
  );
};

defaultStory.story = {
  name: 'default',
};

export const withPosition = () => {
  const [state, setState] = React.useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setState(true);
        }}
      >
        Open Modal
      </button>
      <Modal
        show={state}
        elementId="root"
        position={{ x: 20, y: 20 }}
        // animation="ease-in-out"
        animateFrom="-40px"
        duration={120}
        onLeaved={() => {
          setState(false);
          action('left');
        }}
      >
        <Container>;)</Container>
      </Modal>
    </>
  );
};

export const fast = () => {
  const [state, setState] = React.useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setState(true);
          setTimeout(() => {
            setState(false);
          }, 500);
        }}
      >
        Open Modal
      </button>
      <Modal show={state} elementId="root" onLeaved={action('left')}>
        <ModalContainer>
          <ModalContent>Content</ModalContent>
          <ModalButtons>
            <PrimaryButton
              version={2}
              onClick={() => {
                setState(false);
              }}
            >
              CLOSE
            </PrimaryButton>
          </ModalButtons>
        </ModalContainer>
      </Modal>
    </>
  );
};

export const fullscreen = () => {
  const [state, setState] = React.useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setState(true);
        }}
      >
        Open Modal
      </button>
      <Modal
        show={state}
        elementId="root"
        onLeaved={() => {
          setState(false);
          action('left');
        }}
        fullscreen
      >
        <CustomModalContainer>
          <CustomContentContainer>-- Content --</CustomContentContainer>
          <PrimaryButton
            version={2}
            onClick={() => {
              setState(false);
            }}
          >
            CLOSE
          </PrimaryButton>
        </CustomModalContainer>
      </Modal>
    </>
  );
};
