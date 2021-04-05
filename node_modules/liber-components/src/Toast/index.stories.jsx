import React, { useState } from 'react';
import styled from 'styled-components';
import ToastContainer from './components/ToastContainer';
import { toast, dispel } from './actions';
import {
  SuccessButton,
  AlertButton,
  ErrorButton,
  PrimaryButton,
  Button,
  SecondaryButton,
} from '../Buttons';

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

export default {
  title: 'Components 2.0|Toast',
  parameters: {
    jest: ['Tag'],
  },
};

export const toastsStory = () => {
  const [toasts, setToasts] = useState([]);
  const [largerToast, setLargerToast] = useState(false);
  return (
    <>
      <Header>Básico</Header>
      <Row>
        <PrimaryButton
          version="2"
          onClick={() => {
            setLargerToast(false);
            const id = toast('Conteúdo da informação', 'info', 8000);
            setToasts([...toasts, id]);
          }}
        >
          Notificação
        </PrimaryButton>
        <SuccessButton
          version="2"
          onClick={() => {
            setLargerToast(false);
            const id = toast('Conteúdo da informação', 'success', 8000);
            setToasts([...toasts, id]);
          }}
        >
          Sucesso
        </SuccessButton>
        <AlertButton
          version="2"
          onClick={() => {
            setLargerToast(false);
            const id = toast('Conteúdo da informação', 'warning', 8000);
            setToasts([...toasts, id]);
          }}
        >
          Alerta
        </AlertButton>
        <ErrorButton
          version="2"
          onClick={() => {
            setLargerToast(false);
            const id = toast('Conteúdo da informação', 'error', 8000);
            setToasts([...toasts, id]);
          }}
        >
          Error
        </ErrorButton>
        <Button
          version="2"
          onClick={() => {
            setLargerToast(false);
            const id = toast('Conteúdo da informação', null, 8000);
            setToasts([...toasts, id]);
          }}
        >
          Simple
        </Button>
      </Row>
      <Header>Com Informação extra</Header>
      <Row>
        <PrimaryButton
          version="2"
          onClick={() => {
            setLargerToast(false);
            const id = toast(
              {
                message: 'Conteúdo da informação',
                info: 'Há 10 minutos',
              },
              'info',
              8000,
            );
            setToasts([...toasts, id]);
          }}
        >
          Notificação
        </PrimaryButton>
        <SuccessButton
          version="2"
          onClick={() => {
            setLargerToast(false);
            const id = toast(
              {
                message: 'Conteúdo da informação',
                info: 'Há 10 minutos',
              },
              'success',
              8000,
            );
            setToasts([...toasts, id]);
          }}
        >
          Sucesso
        </SuccessButton>
        <AlertButton
          version="2"
          onClick={() => {
            setLargerToast(false);
            const id = toast(
              {
                message: 'Conteúdo da informação',
                info: 'Há 10 minutos',
              },
              'warning',
              8000,
            );
            setToasts([...toasts, id]);
          }}
        >
          Alerta
        </AlertButton>
        <ErrorButton
          version="2"
          onClick={() => {
            setLargerToast(false);
            const id = toast(
              {
                message: 'Conteúdo da informação',
                info: 'Há 10 minutos',
              },
              'error',
              8000,
            );
            setToasts([...toasts, id]);
          }}
        >
          Error
        </ErrorButton>
        <Button
          version="2"
          onClick={() => {
            setLargerToast(false);
            const id = toast(
              {
                message: 'Conteúdo da informação',
                info: 'Há 10 minutos',
              },
              null,
              8000,
            );
            setToasts([...toasts, id]);
          }}
        >
          Simple
        </Button>
      </Row>
      <Header>Com um conteúdo grande</Header>
      <Row>
        <PrimaryButton
          version="2"
          onClick={() => {
            setLargerToast(false);
            const id = toast(
              {
                message: 'Conteúdo da informação',
                content: `Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Donec fringilla arcu ante,
                 a bibendum eros maximus vitae. Vestibulum aliquam mollis tempus.
                 Donec nibh augue, mattis eu nunc id, iaculis tempus justo.
                 Donec sagittis tortor iaculis turpis luctus,
                 sed condimentum nunc hendrerit.
                 Praesent ac tellus a arcu vulputate pharetra.`,
              },
              'info',
              8000,
            );
            setToasts([...toasts, id]);
          }}
        >
          Notificação
        </PrimaryButton>
        <SuccessButton
          version="2"
          onClick={() => {
            setLargerToast(false);
            const id = toast(
              {
                message: 'Conteúdo da informação',
                content: `Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Donec fringilla arcu ante,
                 a bibendum eros maximus vitae. Vestibulum aliquam mollis tempus.
                 Donec nibh augue, mattis eu nunc id, iaculis tempus justo.
                 Donec sagittis tortor iaculis turpis luctus,
                 sed condimentum nunc hendrerit.
                 Praesent ac tellus a arcu vulputate pharetra.`,
              },
              'success',
              8000,
            );
            setToasts([...toasts, id]);
          }}
        >
          Sucesso
        </SuccessButton>
        <AlertButton
          version="2"
          onClick={() => {
            setLargerToast(false);
            const id = toast(
              {
                message: 'Conteúdo da informação',
                content: `Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Donec fringilla arcu ante,
                 a bibendum eros maximus vitae. Vestibulum aliquam mollis tempus.
                 Donec nibh augue, mattis eu nunc id, iaculis tempus justo.
                 Donec sagittis tortor iaculis turpis luctus,
                 sed condimentum nunc hendrerit.
                 Praesent ac tellus a arcu vulputate pharetra.`,
              },
              'warning',
              8000,
            );
            setToasts([...toasts, id]);
          }}
        >
          Alerta
        </AlertButton>
        <ErrorButton
          version="2"
          onClick={() => {
            setLargerToast(false);
            const id = toast(
              {
                message: 'Conteúdo da informação',
                content: `Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Donec fringilla arcu ante,
                 a bibendum eros maximus vitae. Vestibulum aliquam mollis tempus.
                 Donec nibh augue, mattis eu nunc id, iaculis tempus justo.
                 Donec sagittis tortor iaculis turpis luctus,
                 sed condimentum nunc hendrerit.
                 Praesent ac tellus a arcu vulputate pharetra.`,
              },
              'error',
              8000,
            );
            setToasts([...toasts, id]);
          }}
        >
          Error
        </ErrorButton>
        <Button
          version="2"
          onClick={() => {
            setLargerToast(false);
            const id = toast(
              {
                message: 'Conteúdo da informação',
                content: `Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Donec fringilla arcu ante,
                 a bibendum eros maximus vitae. Vestibulum aliquam mollis tempus.
                 Donec nibh augue, mattis eu nunc id, iaculis tempus justo.
                 Donec sagittis tortor iaculis turpis luctus,
                 sed condimentum nunc hendrerit.
                 Praesent ac tellus a arcu vulputate pharetra.`,
              },
              null,
              8000,
            );
            setToasts([...toasts, id]);
          }}
        >
          Simple
        </Button>
      </Row>
      <Header>Com width setado manualmente</Header>
      <Row>
        <PrimaryButton
          version="2"
          onClick={() => {
            setLargerToast(true);
            const id = toast(
              {
                message: 'Ops.. Algumas assinaturas não foram realizadas!',
                content: 'Veja as assinaturas pendentes e tente novamente',
              },
              'info',
              8000,
            );
            setToasts([...toasts, id]);
          }}
        >
          Notificação
        </PrimaryButton>
        <SuccessButton
          version="2"
          onClick={() => {
            setLargerToast(true);
            const id = toast(
              {
                message: 'Ops.. Algumas assinaturas não foram realizadas!',
                content: 'Veja as assinaturas pendentes e tente novamente',
              },
              'success',
              8000,
            );
            setToasts([...toasts, id]);
          }}
        >
          Sucesso
        </SuccessButton>
        <AlertButton
          version="2"
          onClick={() => {
            setLargerToast(true);
            const id = toast(
              {
                message: 'Ops.. Algumas assinaturas não foram realizadas!',
                content: 'Veja as assinaturas pendentes e tente novamente',
              },
              'warning',
              8000,
            );
            setToasts([...toasts, id]);
          }}
        >
          Alerta
        </AlertButton>
        <ErrorButton
          version="2"
          onClick={() => {
            setLargerToast(true);
            const id = toast(
              {
                message: 'Ops.. Algumas assinaturas não foram realizadas!',
                content: 'Veja as assinaturas pendentes e tente novamente',
              },
              'error',
              800000,
              'abcdefghijk',
              900,
            );
            setToasts([...toasts, id]);
          }}
        >
          Error
        </ErrorButton>
        <Button
          version="2"
          onClick={() => {
            setLargerToast(true);
            const id = toast(
              {
                message: 'Ops.. Algumas assinaturas não foram realizadas!',
                content: 'Veja as assinaturas pendentes e tente novamente',
              },
              null,
              8000,
            );
            setToasts([...toasts, id]);
          }}
        >
          Simple
        </Button>
      </Row>
      <Row>Id do ultimo toast :&nbsp;{toasts[toasts.length - 1]}</Row>
      <Row>
        <SecondaryButton
          version="2"
          onClick={() => {
            setLargerToast(false);
            toasts.forEach($toast => {
              dispel($toast);
            });
            setToasts([]);
          }}
        >
          Fechar Todas
        </SecondaryButton>
      </Row>
      {largerToast ? <ToastContainer customWidth={850} /> : <ToastContainer />}
    </>
  );
};

toastsStory.story = {
  name: 'toasts',
};
