import React from 'react';
import styled from 'styled-components';
// import { action } from '@storybook/addon-actions';
import { Card, CardHeader, CardContent, CardFooter, InnerCard, InnerCardHeader } from './Cards';

const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafdff;
  padding: 64px;
  box-sizing: border-box;
`;

const Content = styled(CardContent)`
  width: 346px;
`;

const text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Duis id pretium sapien, vel vehicula dolor.
  Vestibulum vel diam eu ante mollis eleifend.
  In condimentum est eu finibus faucibus.
  Nam congue urna nec tellus fringilla, quis euismod nulla tempus.
  Aenean convallis aliquam odio, a rutrum lorem mattis in.
  Aliquam eu eros vel ligula accumsan varius at vitae elit.
  Nunc orci urna, feugiat at consequat et, tempus et diam.
  Aenean ex ipsum, mattis at luctus id, suscipit quis urna.
  Nulla facilisi. Suspendisse quis mauris nibh.
  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
  Etiam molestie pulvinar erat id dapibus.
  Integer sit amet lorem dapibus, pharetra neque vel, semper diam.
  Pellentesque pharetra ipsum quis posuere sollicitudin.
  Vivamus tempus feugiat quam, vitae eleifend justo blandit a.
  Maecenas ipsum metus, tempus viverra ultrices eu, posuere et erat.
`;

export default {
  title: 'Components 2.0|Card',

  parameters: {
    jest: ['CardV2'],
  },
};

export const simple = () => (
  <Center>
    <Card version="2" elevation="3">
      <Content version="2">{text}</Content>
    </Card>
  </Center>
);

export const header = () => (
  <Center>
    <Card version="2" elevation="3">
      <CardHeader version="2">Texto de exemplo para o cabeçalho</CardHeader>
      <Content version="2">{text}</Content>
    </Card>
  </Center>
);

export const highlightedHeader = () => (
  <Center>
    <Card version="2" elevation="3">
      <CardHeader version="2" highlight="primary">
        Texto de exemplo para o cabeçalho
      </CardHeader>
      <Content version="2">{text}</Content>
    </Card>
  </Center>
);

highlightedHeader.story = {
  name: 'highlighted header',
};

export const footer = () => (
  <Center>
    <Card version="2" elevation="3">
      <Content version="2">{text}</Content>
      <CardFooter version="2">Exemplo de rodapé quando houver</CardFooter>
    </Card>
  </Center>
);

export const withInnerCard = () => (
  <Center>
    <Card version="2" elevation="3">
      <Content version="2">
        <InnerCard>
          <CardContent>{text}</CardContent>
        </InnerCard>
      </Content>
    </Card>
  </Center>
);

withInnerCard.story = {
  name: 'with inner card',
};

export const withInnerCardAndHeader = () => (
  <Center>
    <Card version="2" elevation="3">
      <Content version="2">
        <InnerCard>
          <InnerCardHeader>Texto de exemplo</InnerCardHeader>
          <CardContent>{text}</CardContent>
        </InnerCard>
      </Content>
    </Card>
  </Center>
);

withInnerCardAndHeader.story = {
  name: 'with inner card and header',
};
