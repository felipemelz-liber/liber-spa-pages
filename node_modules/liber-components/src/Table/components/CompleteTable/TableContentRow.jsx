import React from 'react';
import PropTypes from 'prop-types';
import { SelectionTableBody as TableBody } from '../SelectionTable/SelectionTable';
import { RowFreeWidth, Row, ContentRow, Table } from './CompleteTable.styles';
import { HeaderContent } from './TableHeader.styles';

const TableContentRow = ({ children, availableSpace, isHeader }) => {
  return (
    <ContentRow width={`${availableSpace * 100}%`}>
      <RowFreeWidth percentWidth="100">
        <Table>
          {isHeader ? (
            <HeaderContent>
              <Row>{children}</Row>
            </HeaderContent>
          ) : (
            <TableBody>
              <Row>{children}</Row>
            </TableBody>
          )}
        </Table>
      </RowFreeWidth>
    </ContentRow>
  );
};

TableContentRow.propTypes = {
  children: PropTypes.node.isRequired,
  availableSpace: PropTypes.number.isRequired,
  isHeader: PropTypes.bool,
};

TableContentRow.defaultProps = {
  isHeader: false
}

export default TableContentRow;
