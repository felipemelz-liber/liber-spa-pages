import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, DownloadIcon } from './components/Table.styles.jsx';

export const filtersPropTypes = PropTypes.shape({
  'q[created_at_eq]': PropTypes.string,
  'q[created_at_gteq]': PropTypes.string,
  'q[created_at_lteq]': PropTypes.string,
});

export const CONFIRMATION_HIST_COLUMNS = [
  {
    name: 'slug',
    label: 'Código',
    width: 12,
    align: 'center',
  },
  {
    name: 'value',
    label: 'Valor Total',
    width: 18,
    align: 'right',
    getCellValue: ({ value }) => `R$ ${value}`,
  },
  {
    name: 'created_at',
    label: 'Data de Criação',
    width: 18,
    align: 'right',
  },
  {
    name: 'contract',
    label: 'Contrato',
    width: 25,
    align: 'left',
    // eslint-disable-next-line react/prop-types
    getCellValue: ({ contract = '#' }) => (
      <StyledButton version={2} size="small" href={contract} download>
        <DownloadIcon />
        Download
      </StyledButton>
    ),
  },
];
