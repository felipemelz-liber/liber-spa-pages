import React from 'react';
import styled from 'styled-components';

import BarDisplay from './BarDisplay';

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
  title: 'Components 1.0|DataDisplay/Bar Display',
  parameters: {
    jest: ['BarDisplay'],
  },
};

export const defaultStory = () => (
  <Center>
    <Box>
      <BarDisplay>100.000,00</BarDisplay>
    </Box>
  </Center>
);

defaultStory.story = {
  name: 'default',
};

export const withLabel = () => (
  <Center>
    <Box>
      <BarDisplay label="Patrimônio">100.000,00</BarDisplay>
    </Box>
  </Center>
);

export const withPrefix = () => (
  <Center>
    <Box>
      <BarDisplay label="Patrimônio" prefix="R$">
        100.000,00
      </BarDisplay>
    </Box>
  </Center>
);

export const withSectors = () => (
  <Center>
    <Box>
      <BarDisplay
        label="Patrimônio"
        prefix="R$"
        sectors={[
          {
            percentage: '100%',
            color: ['#2DE8BF', '#88f3e2'],
          },
        ]}
      >
        100.000,00
      </BarDisplay>
    </Box>
  </Center>
);
