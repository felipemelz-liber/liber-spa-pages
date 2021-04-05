import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '../Dialog/Dialog';
import { DialogContent, DialogUpperText, DialogText } from './CancellationDialog.styles';

const CancellationDialog = ({ onClose, onConfirm, open }) => {
  return (
    <Dialog
      title="Cancelar Antecipação"
      open={open}
      onClose={onClose}
      confirmationButtonProps={{
        color: 'danger',
        onConfirm,
      }}
    >
      <DialogContent>
        <DialogUpperText>
          Esta ação não poderá ser desfeita. As ofertas serão canceladas e poderão apresentar
          valores diferentes para antecipações futuras.
        </DialogUpperText>
        <DialogText>Deseja continuar com o cancelamento?</DialogText>
      </DialogContent>
    </Dialog>
  );
};

CancellationDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  // advanceId: PropTypes.string,
};

CancellationDialog.defaultProps = {
  open: false,
  onClose: () => {},
  onConfirm: () => {},
  // advanceId: '',
};

export default CancellationDialog;
