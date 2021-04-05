import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  SelectedTitles,
  TotalSelectedTitles,
  Currency,
  DeselectIndicator,
} from './TableSelectControl.styles';

const renderSelectedTitlesLabel = (selectedTitles) => {
  if (!selectedTitles) {
    return 'Nenhum título selecionado';
  }
  if (selectedTitles === 1) {
    return `${selectedTitles} título selecionado`;
  }
  return `${selectedTitles} títulos selecionados`;
};

const TableSelectControl = (props) => {
  const {
    totalSelectedTitles,
    selectedTitles,
    onDeselect,
    type,
  } = props;
  return (
    <Container {...props}>
      <SelectedTitles type={type}>{renderSelectedTitlesLabel(selectedTitles)}</SelectedTitles>
      <TotalSelectedTitles type={type} onClick={onDeselect}>
        <Currency type={type}>R$</Currency>{totalSelectedTitles}
        {type !== 'empty' && <DeselectIndicator type={type} />}
      </TotalSelectedTitles>
    </Container>
  );
};

TableSelectControl.propTypes = {
  selectedTitles: PropTypes.number,
  totalSelectedTitles: PropTypes.string,
  type: PropTypes.string,
  onDeselect: PropTypes.func,
};

TableSelectControl.defaultProps = {
  selectedTitles: 0,
  totalSelectedTitles: '0,00',
  type: 'empty',
  onDeselect: () => {},
};

export default TableSelectControl;
