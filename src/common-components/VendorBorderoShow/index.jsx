import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import hydrateStore from '../../views/store';
import VendorBorderoShow from './components/VendorBorderoShow';

const VendorBorderoShowComponent = ({ token, fornecedorId, operator, borderoIds, isAdmin }) => (
  <>
    <Provider
      store={hydrateStore({
        vendorBorderoShow: { token, fornecedorId, operator, borderoIds, isAdmin },
        invoiceDialog: { isAdmin },
      })}
    >
      <VendorBorderoShow />
    </Provider>
  </>
);

VendorBorderoShowComponent.propTypes = {
  token: PropTypes.string.isRequired,
  fornecedorId: PropTypes.number.isRequired,
  operator: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    cpf: PropTypes.string,
  }).isRequired,
  borderoIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  isAdmin: PropTypes.bool,
};

VendorBorderoShowComponent.defaultProps = {
  isAdmin: false,
};

export default VendorBorderoShowComponent;
