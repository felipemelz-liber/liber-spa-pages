import React from 'react';
import styled from 'styled-components';
import Tooltip from './Tooltip';

const TooltipContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  box-sizing: border-box;
`;

const Content = styled.div`
  width: 128px;
  font-size: 16px;
`;

export default {
  title: 'Components 1.0|Helpers/Tooltip',
  parameters: {
    jest: ['Tooltip'],
  },
};

export const defaultStory = () => (
  <TooltipContent>
    <Tooltip />
  </TooltipContent>
);

defaultStory.story = {
  name: 'default',
};

export const withLabel = () => (
  <TooltipContent>
    <Tooltip label="Prazo de Vencimento">
      <Content>10 dias úteis</Content>
    </Tooltip>
  </TooltipContent>
);
