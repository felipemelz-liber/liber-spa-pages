import React from 'react';
import PropTypes from 'prop-types';
import { mdiBroom, mdiCheckAll } from '@mdi/js';
import { Container, SelectedText, SelectActions, Icon, Spacer } from './SelectionControl.styles';
import { dispatchDataLayerEvent } from '../../vendor/Utils';

const getSelectedText = selectionProps => {
  const { selectedItems, unselectedItems, hasSelectedAllItems, itemsCount } = selectionProps;
  const selectedItemsCount = selectedItems.length;

  if (hasSelectedAllItems) {
    return unselectedItems.length === 0 ? `Todos os ${itemsCount}` : selectedItemsCount;
  }

  return selectedItemsCount;
};

export const SelectionControl = props => {
  const {
    unselectedItems,
    hasSelectedAllItems,
    itemsCount,
    selectedItems,
    selectAll,
    clearSelection,
    itemName,
    actions,
    isAdmin,
  } = props;

  const hasAllInvoicesSelected =
    (hasSelectedAllItems && unselectedItems.length === 0) || selectedItems.length === itemsCount;

  const { singular, plural } = itemName;

  const isPlural = () => hasSelectedAllItems || selectedItems.length > 1;

  const handleSelectAllClick = () => {
    dispatchDataLayerEvent('titulosSelecionarTodos', isAdmin);

    selectAll();
  };

  const handleClearSelectionClick = () => {
    dispatchDataLayerEvent('titulosLimparSelecao', isAdmin);

    clearSelection();
  };

  return hasSelectedAllItems || selectedItems.length > 0 ? (
    <Container>
      <SelectedText>{`${getSelectedText(props)} ${
        isPlural() ? `${plural} foram selecionados` : `${singular} foi selecionado`
      }`}</SelectedText>
      {!hasAllInvoicesSelected ? (
        <SelectActions onClick={handleSelectAllClick}>
          <Icon path={mdiCheckAll} />
          {`Selecionar todos os ${itemsCount} ${plural}`}
        </SelectActions>
      ) : null}
      <SelectActions onClick={handleClearSelectionClick}>
        <Icon path={mdiBroom} /> Limpar seleção
      </SelectActions>
      <Spacer />
      {actions}
    </Container>
  ) : null;
};

SelectionControl.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.number),
  unselectedItems: PropTypes.arrayOf(PropTypes.object),
  hasSelectedAllItems: PropTypes.bool,
  itemsCount: PropTypes.number,
  selectAll: PropTypes.func,
  clearSelection: PropTypes.func,
  itemName: PropTypes.shape({
    singular: PropTypes.string,
    plural: PropTypes.string,
  }),
  actions: PropTypes.node,
  isAdmin: PropTypes.bool,
};

SelectionControl.defaultProps = {
  selectedItems: [],
  unselectedItems: [],
  hasSelectedAllItems: false,
  itemsCount: 0,
  selectAll: () => {},
  clearSelection: () => {},
  itemName: {
    singular: 'item',
    plural: 'itens',
  },
  actions: null,
  isAdmin: false,
};

export default SelectionControl;
