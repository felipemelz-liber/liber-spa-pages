import React from 'react';
import styled from 'styled-components';
import { ActionContainer } from './styles';

import ActionDisplay from './ActionDisplay';

const Center = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 200px;
`;

export default {
  title: 'Components 1.0|DataDisplay/Action Display',
  parameters: {
    jest: ['ActionDisplay'],
  },
};

export const withValue = () => (
  <Center>
    <Box>
      <ActionDisplay value={100000}>
        <ActionContainer />
      </ActionDisplay>
    </Box>
  </Center>
);

export const withLabel = () => (
  <Center>
    <Box>
      <ActionDisplay value={100000} label="Valor a liquidar">
        <ActionContainer />
      </ActionDisplay>
    </Box>
  </Center>
);

export const withCurrency = () => (
  <Center>
    <Box>
      <ActionDisplay value={100000} label="Valor a liquidar" currency="R$">
        <ActionContainer />
      </ActionDisplay>
    </Box>
  </Center>
);
