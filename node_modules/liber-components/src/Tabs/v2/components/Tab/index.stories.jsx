import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab, DropDownTab } from '../../../tabsComponents';

const Container = styled.div`
  margin: 30px;
`;

const Content = styled.div`
  height: 320px;
  width: 100%;
`;

class TabsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  handleChangeTab = index => {
    this.setState({ activeTab: index });
  };

  render() {
    return (
      <Tabs
        type="center"
        version="2"
        onChange={this.handleChangeTab}
        activeTab={this.state.activeTab}
      >
        <Tab version="2" label="Todos">
          Todos Content
        </Tab>
        <Tab version="2" label="Disponível" tooltip="tooltip">
          Disponível Content
        </Tab>
        <Tab version="2" label="Em Negociação">
          Em Negociação Content
        </Tab>
        <Tab version="2" label="Antecipados">
          Antecipados Content
        </Tab>
        <Tab version="2" label="Vencidos">
          Vencidos Content
        </Tab>
      </Tabs>
    );
  }
}

export default {
  title: 'Components 2.0|Tabs',
  parameters: {
    jest: ['Tabs'],
  },
};

export const center = () => (
  <Container>
    <Tabs version="2">
      <Tab version="2" label="Todos">
        Todos Content
      </Tab>
      <Tab version="2" label="Disponível" tooltip="tooltip">
        Disponível Content
      </Tab>
      <Tab version="2" label="Em Negociação">
        Em Negociação Content
      </Tab>
      <Tab version="2" label="Antecipados">
        Antecipados Content
      </Tab>
      <Tab version="2" label="Vencidos">
        Vencidos Content
      </Tab>
    </Tabs>
  </Container>
);

export const withStrongBorder = () => {
  return (
    <Container>
      <Tabs strongBorder version="2">
        <Tab version="2" label="Todos">
          Todos Content
        </Tab>
        <Tab version="2" label="Disponível" tooltip="tooltip">
          Disponível Content
        </Tab>
        <Tab version="2" label="Em Negociação">
          Em Negociação Content
        </Tab>
        <Tab version="2" label="Antecipados">
          Antecipados Content
        </Tab>
        <Tab version="2" label="Vencidos">
          Vencidos Content
        </Tab>
      </Tabs>
    </Container>
  );
};

export const controlledTabs = () => (
  <Container>
    <TabsComponent />
  </Container>
);

export const left = () => (
  <Container>
    <Tabs version="2" type="left">
      <Tab version="2" label="Todos">
        Todos Content
      </Tab>
      <Tab version="2" label="Disponível" tooltip="tooltip">
        Disponível Content
      </Tab>
      <Tab version="2" label="Em Negociação">
        Em Negociação Content
      </Tab>
      <Tab version="2" label="Antecipados">
        Antecipados Content
      </Tab>
      <Tab version="2" label="Vencidos">
        Vencidos Content
      </Tab>
      <Tab version="2" label="Vencidos">
        Vencidos Content
      </Tab>
    </Tabs>
  </Container>
);

export const withDropDown = () => {
  return (
    <Container>
      <Tabs version="2" strongBorder>
        <Tab version="2" label="Disponível" tooltip="tooltip">
          <Content>Disponível Content</Content>
        </Tab>
        <Tab version="2" label="Em Negociação">
          <Content>Em Negociação Content</Content>
        </Tab>
        <Tab version="2" label="Antecipados">
          <Content>Antecipados Content</Content>
        </Tab>
        <DropDownTab minWidth={275} strongBorder label="Aguardando">
          <Tab version="2" label="Aguardando Aceite">
            <Content>Aguardando Aceite Content</Content>
          </Tab>
          <Tab version="2" label="Aguardando Formalização">
            <Content>Aguardando Formalização Content</Content>
          </Tab>
          <Tab version="2" label="Aguardando Pagamento">
            <Content>Aguardando Pagamento Content</Content>
          </Tab>
        </DropDownTab>
        <Tab version="2" label="Vencidos">
          <Content>Vencidos Content</Content>
        </Tab>
      </Tabs>
    </Container>
  );
};
