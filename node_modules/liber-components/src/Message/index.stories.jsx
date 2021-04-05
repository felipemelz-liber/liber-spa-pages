import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { message } from './actions';
import {
  SuccessButton,
  AlertButton,
  ErrorButton,
  PrimaryButton,
  Button,
  SecondaryButton,
} from '../Buttons';
import MessageContainer from './components/MessageContainer';

const Row = styled.div`
  margin: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #405f71;

  & > button,
  & > span {
    margin-right: 12px !important;
  }
`;

const Header = styled.h3`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  color: #405f71;
  margin: 12px;
`;

const Messages = () => (
  <>
    <Header>Básico</Header>
    <Row>
      <PrimaryButton
        version="2"
        onClick={() => {
          console.log(message.prototype.primary);
          message.primary('Conteúdo da informação', 8000);
        }}
      >
        Notificação
      </PrimaryButton>
      <SuccessButton
        version="2"
        onClick={() => {
          message.success('Conteúdo da informação', 8000);
        }}
      >
        Sucesso
      </SuccessButton>
      <AlertButton
        version="2"
        onClick={() => {
          message.alert('Conteúdo da informação', 8000);
        }}
      >
        Alerta
      </AlertButton>
      <ErrorButton
        version="2"
        onClick={() => {
          message.error('Conteúdo da informação', 8000);
        }}
      >
        Error
      </ErrorButton>
      <Button
        version="2"
        onClick={() => {
          message.basic('Conteúdo da informação', 8000);
        }}
      >
        Simple
      </Button>
    </Row>
    <Header>Básico with Action</Header>
    <Row>
      <PrimaryButton
        version="2"
        onClick={() => {
          message.primary(
            'Conteúdo da informação',
            8000,
            <button type="button" onClick={action('click')}>
              Action
            </button>,
          );
        }}
      >
        Notificação
      </PrimaryButton>
      <SuccessButton
        version="2"
        onClick={() => {
          message.success(
            'Conteúdo da informação',
            8000,
            <button type="button" onClick={action('click')}>
              Action
            </button>,
          );
        }}
      >
        Sucesso
      </SuccessButton>
      <AlertButton
        version="2"
        onClick={() => {
          message.alert(
            'Conteúdo da informação',
            8000,
            <button type="button" onClick={action('click')}>
              Action
            </button>,
          );
        }}
      >
        Alerta
      </AlertButton>
      <ErrorButton
        version="2"
        onClick={() => {
          message.error(
            'Conteúdo da informação',
            8000,
            <button type="button" onClick={action('click')}>
              Action
            </button>,
          );
        }}
      >
        Error
      </ErrorButton>
      <Button
        version="2"
        onClick={() => {
          message.info(
            'Conteúdo da informação',
            8000,
            <button type="button" onClick={action('click')}>
              Action
            </button>,
          );
        }}
      >
        Simple
      </Button>
    </Row>
    <Header>Large</Header>
    <Row>
      <PrimaryButton
        version="2"
        onClick={() => {
          message.primary(
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec fringilla arcu ante, a bibendum eros maximus vitae.
              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,
              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,
              sed condimentum nunc hendrerit.
              Praesent ac tellus a arcu vulputate pharetra.`,
            8000,
          );
        }}
      >
        Notificação
      </PrimaryButton>
      <SuccessButton
        version="2"
        onClick={() => {
          message.success(
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec fringilla arcu ante, a bibendum eros maximus vitae.
              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,
              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,
              sed condimentum nunc hendrerit.
              Praesent ac tellus a arcu vulputate pharetra.`,
            8000,
          );
        }}
      >
        Sucesso
      </SuccessButton>
      <AlertButton
        version="2"
        onClick={() => {
          message.alert(
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec fringilla arcu ante, a bibendum eros maximus vitae.
              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,
              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,
              sed condimentum nunc hendrerit.
              Praesent ac tellus a arcu vulputate pharetra.`,
            8000,
          );
        }}
      >
        Alerta
      </AlertButton>
      <ErrorButton
        version="2"
        onClick={() => {
          message.error(
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec fringilla arcu ante, a bibendum eros maximus vitae.
              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,
              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,
              sed condimentum nunc hendrerit.
              Praesent ac tellus a arcu vulputate pharetra.`,
            8000,
          );
        }}
      >
        Error
      </ErrorButton>
      <Button
        version="2"
        onClick={() => {
          message.info(
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec fringilla arcu ante, a bibendum eros maximus vitae.
              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,
              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,
              sed condimentum nunc hendrerit.
              Praesent ac tellus a arcu vulputate pharetra.`,
            8000,
          );
        }}
      >
        Simple
      </Button>
    </Row>
    <Header>Large with action</Header>
    <Row>
      <PrimaryButton
        version="2"
        onClick={() => {
          message.primary(
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec fringilla arcu ante, a bibendum eros maximus vitae.
              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,
              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,
              sed condimentum nunc hendrerit.
              Praesent ac tellus a arcu vulputate pharetra.`,
            8000,
            <button type="button" onClick={action('click')}>
              Action
            </button>,
          );
        }}
      >
        Notificação
      </PrimaryButton>
      <SuccessButton
        version="2"
        onClick={() => {
          message.success(
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec fringilla arcu ante, a bibendum eros maximus vitae.
              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,
              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,
              sed condimentum nunc hendrerit.
              Praesent ac tellus a arcu vulputate pharetra.`,
            8000,
            <button type="button" onClick={action('click')}>
              Action
            </button>,
          );
        }}
      >
        Sucesso
      </SuccessButton>
      <AlertButton
        version="2"
        onClick={() => {
          message.alert(
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec fringilla arcu ante, a bibendum eros maximus vitae.
              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,
              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,
              sed condimentum nunc hendrerit.
              Praesent ac tellus a arcu vulputate pharetra.`,
            8000,
            <button type="button" onClick={action('click')}>
              Action
            </button>,
          );
        }}
      >
        Alerta
      </AlertButton>
      <ErrorButton
        version="2"
        onClick={() => {
          message.error(
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec fringilla arcu ante, a bibendum eros maximus vitae.
              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,
              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,
              sed condimentum nunc hendrerit.
              Praesent ac tellus a arcu vulputate pharetra.`,
            8000,
            <button type="button" onClick={action('click')}>
              Action
            </button>,
          );
        }}
      >
        Error
      </ErrorButton>
      <Button
        version="2"
        onClick={() => {
          message.info(
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec fringilla arcu ante, a bibendum eros maximus vitae.
              Vestibulum aliquam mollis tempus. Donec nibh augue, mattis eu nunc id,
              iaculis tempus justo. Donec sagittis tortor iaculis turpis luctus,
              sed condimentum nunc hendrerit.
              Praesent ac tellus a arcu vulputate pharetra.`,
            8000,
            <button type="button" onClick={action('click')}>
              Action
            </button>,
          );
        }}
      >
        Simple
      </Button>
    </Row>
    <Header>In Sequence</Header>
    <Row>
      <SecondaryButton
        version="2"
        onClick={() => {
          message.info('This is the first message').then(() => {
            message.success('This is the second message').then(() => {
              message.alert('This is the third message').then(() => {
                message.error('This is the last message');
              });
            });
          });
        }}
      >
        In Sequence
      </SecondaryButton>
    </Row>
    <MessageContainer />
  </>
);

export default {
  title: 'Components 2.0|Message',
  parameters: {
    jest: ['Tag'],
  },
};

export const messageStory = () => <Messages />;

messageStory.story = {
  name: 'Message',
};
