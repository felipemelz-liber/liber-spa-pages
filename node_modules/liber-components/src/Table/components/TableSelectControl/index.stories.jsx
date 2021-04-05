import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import TableSelectControl from './TableSelectControl';

const Container = styled.div`
  margin: 20px;
`;

const CustomizedSelectControl = styled(TableSelectControl)`
  width: auto;
`;

export default {
  title: 'Components 2.0|Table/Table Select Control',
};

export const emptyType = () => (
  <Container>
    <TableSelectControl
      selectedTitles={0}
      totalSelectedTitles="0,00"
      onDeselect={action('clicked')}
      type="empty"
    />
  </Container>
);

export const singleType = () => (
  <Container>
    <TableSelectControl
      selectedTitles={1}
      totalSelectedTitles="1.234,56"
      onDeselect={action('clicked')}
      type="single"
    />
  </Container>
);

export const multipleType = () => (
  <Container>
    <TableSelectControl
      selectedTitles={15}
      totalSelectedTitles="123.478,10"
      type="multiple"
      onDeselect={action('clicked')}
    />
  </Container>
);

export const customizedSelectControl = () => (
  <Container>
    <CustomizedSelectControl
      selectedTitles={15}
      totalSelectedTitles="123.478,10"
      type="multiple"
      onDeselect={action('clicked')}
    />
  </Container>
);
