import React from 'react';
import styled from 'styled-components';
import InfoLabel from './InfoLabel';

const TooltipContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  box-sizing: border-box;
`;

export default {
  title: 'Components 1.0|Helpers/Info Label',
  parameters: {
    jest: ['InfoLabel'],
  },
};

export const defaultStory = () => (
  <TooltipContent>
    <InfoLabel />
  </TooltipContent>
);

defaultStory.story = {
  name: 'default',
};

export const withColor = () => (
  <TooltipContent>
    <InfoLabel color="blue" />
  </TooltipContent>
);

export const withLabel = () => (
  <TooltipContent>
    <InfoLabel color="blue" label="Conteudo" />
  </TooltipContent>
);
