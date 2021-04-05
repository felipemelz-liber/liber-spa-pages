import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab, TabHeader } from '../tabsComponents';

const TabLabel = styled.div`
  & > div {
    padding: 4px;
  }
`;

const Container = styled.div`
  margin: 30px;
`;

export default {
  title: 'Components 1.0|Tabs',
  parameters: {
    jest: ['Tabs'],
  },
};

export const defaultStory = () => (
  <Container>
    <Tabs>
      <TabHeader>{labels => <TabLabel>{labels}</TabLabel>}</TabHeader>
      <Tab label="Todos">Todos</Tab>
      <Tab label="Disponível">Disponível</Tab>
      <Tab label="Em Negociação">Em Negociação</Tab>
      <Tab label="Em Negociação">Em Negociação</Tab>
      <Tab label="Antecipados">Antecipados</Tab>
      <Tab label="Vencidos">Vencidos</Tab>
    </Tabs>
  </Container>
);

defaultStory.story = {
  name: 'default',
};
