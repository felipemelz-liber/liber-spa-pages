import React from 'react';
import PropTypes from 'prop-types';

export const columnShape = PropTypes.shape({
  name: PropTypes.string,
  label: PropTypes.node.isRequired,
  width: PropTypes.number,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  getCellValue: PropTypes.func,
});

export const sortingShape = PropTypes.shape({
  onSort: PropTypes.func,
  sorting: PropTypes.arrayOf(
    PropTypes.shape({
      columnName: PropTypes.string,
      direction: PropTypes.oneOf(['asc', 'desc', 'none']),
    }),
  ),
  sortedColumns: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.string)]),
});

export const ACTIONS_SPACE = 0.1;
export const SELECTION_SPACE = 0.03;

export const formatMoney = value => String(value.toFixed(2)).replace('.', ',');

export const COLUMNS = [
  {
    width: 12,
    name: 'name',
    label: 'Nome',
    align: 'center',
  },
  {
    width: 20,
    name: 'date',
    label: 'Data',
    align: 'right',
  },
  {
    width: 25,
    name: 'value',
    label: 'Valor',
    align: 'left',
    getCellValue: ({ value }) => `R$ ${formatMoney(value)}`,
  },
];

export const WEIGHTED_COLUMNS = [
  {
    width: 2,
    name: 'name',
    label: 'Nome',
    align: 'center',
  },
  {
    width: 0.5,
    name: 'date',
    label: 'Data',
    align: 'right',
  },
  {
    width: 0.5,
    name: 'value',
    label: 'Valor',
    align: 'left',
    getCellValue: ({ value }) => `R$ ${formatMoney(value)}`,
  },
];

export const ITEMS = [
  {
    id: 1,
    name: 'Item 1',
    date: '01/01/2020',
    value: 100,
  },
  {
    id: 2,
    name: 'Item 2',
    date: '01/01/2020',
    value: 200,
  },
  {
    id: 3,
    name: 'Item 3',
    date: '01/01/2020',
    value: 700,
  },
  {
    id: 4,
    name: 'Item 4',
    date: '01/01/2020',
    value: 300,
  },
  {
    id: 5,
    name: 'Item 5',
    date: '01/01/2020',
    value: 450,
  },
  {
    id: 6,
    name: 'Item 6',
    date: '01/01/2020',
    value: 905,
  },
];

export const ITEMS_EXTENDED = [
  {
    id: 1,
    name: 'Item 1',
    date: '01/01/2020',
    value: 100,
  },
  {
    id: 2,
    name: 'Item 2',
    date: '01/01/2020',
    value: 200,
  },
  {
    id: 3,
    name: 'Item 3',
    date: '01/01/2020',
    value: 700,
  },
  {
    id: 4,
    name: 'Item 4',
    date: '01/01/2020',
    value: 300,
  },
  {
    id: 5,
    name: 'Item 5',
    date: '01/01/2020',
    value: 450,
  },
  {
    id: 6,
    name: 'Item 6',
    date: '01/01/2020',
    value: 905,
  },
  {
    id: 7,
    name: 'Item 7',
    date: '01/01/2020',
    value: 100,
  },
  {
    id: 8,
    name: 'Item 8',
    date: '01/01/2020',
    value: 200,
  },
  {
    id: 9,
    name: 'Item 9',
    date: '01/01/2020',
    value: 700,
  },
  {
    id: 10,
    name: 'Item 10',
    date: '01/01/2020',
    value: 300,
  },
  {
    id: 11,
    name: 'Item 11',
    date: '01/01/2020',
    value: 450,
  },
  {
    id: 6,
    name: 'Item 12',
    date: '01/01/2020',
    value: 905,
  },
  {
    id: 2,
    name: 'Item 13',
    date: '01/01/2020',
    value: 200,
  },
  {
    id: 3,
    name: 'Item 14',
    date: '01/01/2020',
    value: 700,
  },
  {
    id: 4,
    name: 'Item 15',
    date: '01/01/2020',
    value: 300,
  },
  {
    id: 5,
    name: 'Item 16',
    date: '01/01/2020',
    value: 450,
  },
  {
    id: 6,
    name: 'Item 17',
    date: '01/01/2020',
    value: 905,
  },
  {
    id: 1,
    name: 'Item 18',
    date: '01/01/2020',
    value: 100,
  },
  {
    id: 2,
    name: 'Item 19',
    date: '01/01/2020',
    value: 200,
  },
  {
    id: 3,
    name: 'Item 20',
    date: '01/01/2020',
    value: 700,
  },
  {
    id: 4,
    name: 'Item 21',
    date: '01/01/2020',
    value: 300,
  },
  {
    id: 5,
    name: 'Item 22',
    date: '01/01/2020',
    value: 450,
  },
  {
    id: 6,
    name: 'Item 23',
    date: '01/01/2020',
    value: 905,
  },
  {
    id: 1,
    name: 'Item 24',
    date: '01/01/2020',
    value: 100,
  },
  {
    id: 2,
    name: 'Item 25',
    date: '01/01/2020',
    value: 200,
  },
  {
    id: 3,
    name: 'Item 26',
    date: '01/01/2020',
    value: 700,
  },
  {
    id: 4,
    name: 'Item 27',
    date: '01/01/2020',
    value: 300,
  },
];

export const TWO_LINE_COLUMNS = [
  {
    width: 12,
    name: 'name',
    label: 'Nome',
    align: 'center',
  },
  {
    width: 20,
    name: 'date',
    label: (
      <>
        Data 2<br />
        Data 2
      </>
    ),
    align: 'right',
  },
  {
    width: 25,
    name: 'value',
    label: 'Valor',
    align: 'left',
    getCellValue: ({ value }) => `R$ ${formatMoney(value)}`,
  },
];

export const TWO_LINE_ITEMS = [
  {
    id: 1,
    name: 'Item 1',
    date: (
      <>
        01/01/2020
        <br />
        15/01/2020
      </>
    ),
    value: 100,
  },
  {
    id: 2,
    name: 'Item 2',
    date: (
      <>
        01/01/2020
        <br />
        15/01/2020
      </>
    ),
    value: 200,
  },
  {
    id: 3,
    name: 'Item 3',
    date: (
      <>
        01/01/2020
        <br />
        15/01/2020
      </>
    ),
    value: 700,
  },
  {
    id: 4,
    name: 'Item 4',
    date: (
      <>
        01/01/2020
        <br />
        15/01/2020
      </>
    ),
    value: 300,
  },
  {
    id: 5,
    name: 'Item 5',
    date: (
      <>
        01/01/2020
        <br />
        15/01/2020
      </>
    ),
    value: 450,
  },
  {
    id: 6,
    name: 'Item 6',
    date: (
      <>
        01/01/2020
        <br />
        15/01/2020
      </>
    ),
    value: 905,
  },
];
