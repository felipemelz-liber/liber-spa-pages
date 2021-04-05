import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { quoteAllInvoices, resetInvoices } from '../../actions/VendorInvoicesActions';
import { SelectionControl as BaseControl } from '../../../SelectionControl/SelectionControl';

export const SelectionControl = props => {
  const {
    hasSelectedAllItems,
    unselectedInvoices: unselectedItems,
    invoicesCount: itemsCount,
    selectedInvoices: selectedItems,
    selectAllInvoices: selectAll,
    clearInvoices: clearSelection,
  } = props;

  const mappedProps = {
    hasSelectedAllItems,
    unselectedItems,
    itemsCount,
    selectedItems,
    selectAll,
    clearSelection,
  };

  const itemName = {
    singular: 'título',
    plural: 'títulos',
  };

  return <BaseControl {...mappedProps} itemName={itemName} />;
};

SelectionControl.propTypes = {
  selectedInvoices: PropTypes.arrayOf(PropTypes.number),
  unselectedInvoices: PropTypes.arrayOf(PropTypes.object),
  hasSelectedAllItems: PropTypes.bool,
  invoicesCount: PropTypes.number,
  selectAllInvoices: PropTypes.func,
  clearInvoices: PropTypes.func,
};
SelectionControl.defaultProps = {
  selectedInvoices: [],
  unselectedInvoices: [],
  hasSelectedAllItems: false,
  invoicesCount: 0,
  selectAllInvoices: () => {},
  clearInvoices: () => {},
};

const mapStateToProps = ({
  vendorInvoices: {
    pagination: { count: invoicesCount },
    hasSelectedAllItems,
    selectedInvoices,
    unselectedInvoices,
  },
}) => ({ invoicesCount, selectedInvoices, hasSelectedAllItems, unselectedInvoices });

const mapDispatchToProps = {
  selectAllInvoices: quoteAllInvoices,
  clearInvoices: resetInvoices,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectionControl);
