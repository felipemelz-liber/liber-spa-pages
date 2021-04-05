import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'liber-components/components/Dialog';
import { SuccessButton, PrimaryButton, AlertButton, ErrorButton } from 'liber-components';
import LoadingButton from '../Buttons/LoadingButton';
import {
  Button,
  DialogContent,
  DialogHeader,
  DialogActions,
  Title,
  IconButton,
  CloseIcon,
} from './ActionsModal.styles';

const ActionsModal = ({ title, children, show, onClose, confirmationButtonProps, closable }) => {
  const renderConfirmationButton = () => {
    const { onConfirmation, disabled, type, text, loading } = confirmationButtonProps;
    const isLoadingButton = loading !== null && loading !== undefined;
    const buttonProps = {
      onClick: onConfirmation,
      disabled,
      children: text ? String(text).toUpperCase() : 'CONFIRMAR',
      version: 2,
    };
    switch (type) {
      case 'primary':
        return isLoadingButton ? (
          <LoadingButton ButtonComponent={PrimaryButton} loading={loading} {...buttonProps} />
        ) : (
          <PrimaryButton {...buttonProps} />
        );
      case 'alert':
        return isLoadingButton ? (
          <LoadingButton ButtonComponent={AlertButton} loading={loading} {...buttonProps} />
        ) : (
          <AlertButton {...buttonProps} />
        );
      case 'error':
        return isLoadingButton ? (
          <LoadingButton ButtonComponent={ErrorButton} loading={loading} {...buttonProps} />
        ) : (
          <ErrorButton {...buttonProps} />
        );
      default:
        return isLoadingButton ? (
          <LoadingButton ButtonComponent={SuccessButton} loading={loading} {...buttonProps} />
        ) : (
          <SuccessButton {...buttonProps} />
        );
    }
  };

  return (
    <Modal show={show} onLeaved={onClose} closable={closable}>
      <DialogHeader>
        <Title>{title}</Title>
        <IconButton size="large" circle onClick={closable ? onClose : undefined} version={2}>
          <CloseIcon />
        </IconButton>
      </DialogHeader>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={closable ? onClose : undefined} version={2}>
          CANCELAR
        </Button>
        {renderConfirmationButton()}
      </DialogActions>
    </Modal>
  );
};

ActionsModal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  show: PropTypes.bool,
  onClose: PropTypes.func,
  closable: PropTypes.bool,
  confirmationButtonProps: PropTypes.shape({
    onConfirmation: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['primary', 'success', 'alert', 'error']),
    text: PropTypes.string,
    loading: PropTypes.bool,
  }),
};

ActionsModal.defaultProps = {
  title: 'Confirmação',
  children: <div />,
  show: true,
  closable: true,
  onClose: () => null,
  confirmationButtonProps: {
    onConfirmation: () => null,
    disabled: false,
    type: 'success',
    text: 'Confirmar',
    loading: null,
  },
};

export default ActionsModal;
