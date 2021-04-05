import React from 'react';
import styled from 'styled-components';

import Resizable from './Resizable';

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
  title: 'Components 1.0|DataDisplay/Resizable',
  parameters: {
    jest: ['Resizable'],
  },
};

export const defaultStory = () => (
  <Center>
    <Box>
      <Resizable>{10}</Resizable>
    </Box>
  </Center>
);

defaultStory.story = {
  name: 'default',
};
