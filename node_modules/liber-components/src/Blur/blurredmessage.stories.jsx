import React from 'react';
import styled from 'styled-components';
import BlurredMessage from './BlurredMessage';

export default {
  title: 'Components 2.0|BlurredMessage',
  parameters: {
    jest: ['BlurredMessage'],
  },
};

const Container = styled.div`
  width: 400px;
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

export const basic = () => (
  <Container>
    <BlurredMessage>{text}</BlurredMessage>
  </Container>
);

export const transparent = () => (
  <Container>
    <BlurredMessage blur={0}>
      {text}
      <button type="button">botao habilitado pois blur = 0</button>
    </BlurredMessage>
  </Container>
);

export const withOverlay = () => (
  <Container>
    <BlurredMessage
      overlay={
        <MessageContainer>
          Area desabilitada por algum motivo
          <button type="button">click me</button>
        </MessageContainer>
      }
    >
      {text}
      <button type="button">botao desabilitado</button>
    </BlurredMessage>
  </Container>
);
