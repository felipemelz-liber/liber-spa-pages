import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import hydrateStore from '../../views/store';
import VendorInvoices from './components/VendorInvoices/VendorInvoices';

const VendorInvoicesComponent = ({ token, vendorId, canInputXml, inputXmlPath, isAdmin }) => (
  <>
    <Provider
      store={hydrateStore({
        vendorInvoices: { token, vendorId, canInputXml, inputXmlPath, isAdmin },
        invoiceDialog: { isAdmin },
      })}
    >
      <VendorInvoices />
    </Provider>
  </>
);

VendorInvoicesComponent.propTypes = {
  token: PropTypes.string.isRequired,
  vendorId: PropTypes.number.isRequired,
  inputXmlPath: PropTypes.string,
  canInputXml: PropTypes.bool,
  isAdmin: PropTypes.bool,
};

VendorInvoicesComponent.defaultProps = {
  inputXmlPath: '',
  canInputXml: false,
  isAdmin: false,
};

export default VendorInvoicesComponent;
