import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import hydrateStore from '../../views/store';
import VendorAdvances from './components/VendorAdvances';

const VendorAnticipations = ({ token, vendorId, operator, isAdmin, onDetailsClick }) => (
  <>
    <Provider store={hydrateStore({ vendorAdvances: { token, vendorId, operator, isAdmin } })}>
      <VendorAdvances onDetailsClick={onDetailsClick} />
    </Provider>
  </>
);

VendorAnticipations.propTypes = {
  token: PropTypes.string.isRequired,
  vendorId: PropTypes.number.isRequired,
  operator: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    cpf: PropTypes.string,
  }).isRequired,
  isAdmin: PropTypes.bool,
  onDetailsClick: PropTypes.func,
};

VendorAnticipations.defaultProps = {
  isAdmin: false,
  onDetailsClick: () => null,
};

export default VendorAnticipations;
