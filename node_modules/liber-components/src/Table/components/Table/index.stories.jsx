import React from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderColumn,
  TableBody,
  TableRowColumn,
} from './Table';

export default {
  title: 'Components 1.0|Table/Simple Table',
  parameters: {
    jest: ['Table'],
  },
};

export const simpleTable = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Número</TableHeaderColumn>
        <TableHeaderColumn>Fornecedor</TableHeaderColumn>
        <TableHeaderColumn>Prazo</TableHeaderColumn>
        <TableHeaderColumn>Valor a Receber</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>Liber Capital</TableRowColumn>
        <TableRowColumn>24/08/2019</TableRowColumn>
        <TableRowColumn>R$ 2500</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Centauro</TableRowColumn>
        <TableRowColumn>10/05/2019</TableRowColumn>
        <TableRowColumn>R$ 1000</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);
