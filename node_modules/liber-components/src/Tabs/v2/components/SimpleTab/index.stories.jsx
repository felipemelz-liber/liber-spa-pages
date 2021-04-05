import React from 'react';
import styled from 'styled-components';
import { SimpleTab, SimpleTabs } from '../../../tabsComponents';

const Container = styled.div`
  margin: 30px;
`;

export default {
  title: 'Components 2.0|SimpleTabs',
  parameters: {
    jest: ['SimpleTabs'],
  },
};

export const center = () => (
  <Container>
    <SimpleTabs>
      <SimpleTab href="#">Todos</SimpleTab>
      <SimpleTab href="#" tooltip="tooltip" active>
        Disponíveis
      </SimpleTab>
      <SimpleTab href="#" disabled>
        Em Negociação
      </SimpleTab>
    </SimpleTabs>
  </Container>
);

export const left = () => (
  <Container>
    <SimpleTabs left>
      <SimpleTab href="#" left active>
        Todos
      </SimpleTab>
      <SimpleTab href="#" left tooltip="tooltip">
        Disponíveis
      </SimpleTab>
      <SimpleTab href="#" left disabled>
        Em Negociação
      </SimpleTab>
    </SimpleTabs>
  </Container>
);
