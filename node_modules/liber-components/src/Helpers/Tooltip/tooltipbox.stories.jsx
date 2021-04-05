import React from 'react';
import styled from 'styled-components';
import TooltipBox from './TooltipBox';

const TooltipContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  box-sizing: border-box;
`;

const FixedTootlipContent = styled(TooltipContent)`
  width: 50%;
  height: 100px;
  margin: 100px;
  margin-left: 200px;
  padding: 0px;
  border: 1px solid blue;
`;

const tooltipContentComponent = <TooltipContent>Conteudo</TooltipContent>;

export default {
  title: 'Components 1.0|Helpers/Tooltip Box',

  parameters: {
    jest: ['TooltipBox'],
  },
};

export const defaultStory = () => (
  <TooltipBox content={tooltipContentComponent}>
    <TooltipContent>Passe o mouse aqui!</TooltipContent>
  </TooltipBox>
);

defaultStory.story = {
  name: 'default',
};

export const defaultContentPositionStart = () => (
  <TooltipBox contentPosition="start" content={tooltipContentComponent}>
    <TooltipContent>Passe o mouse aqui!</TooltipContent>
  </TooltipBox>
);

defaultContentPositionStart.story = {
  name: 'default contentPosition = start',
};

export const defaultWithContentPositionMiddle = () => (
  <TooltipBox contentPosition="middle" content={tooltipContentComponent}>
    <TooltipContent>Passe o mouse aqui!</TooltipContent>
  </TooltipBox>
);

defaultWithContentPositionMiddle.story = {
  name: 'default with contentPosition = middle',
};

export const defaultContentPositionEnd = () => (
  <TooltipBox contentPosition="end" content={tooltipContentComponent}>
    <TooltipContent>Passe o mouse aqui!</TooltipContent>
  </TooltipBox>
);

defaultContentPositionEnd.story = {
  name: 'default contentPosition = end',
};

export const fixed = () => (
  <TooltipBox fixed content={tooltipContentComponent}>
    <FixedTootlipContent>Passe o mouse aqui!</FixedTootlipContent>
  </TooltipBox>
);

export const fixedWithContentPositionStart = () => (
  <TooltipBox fixed contentPosition="start" content={tooltipContentComponent}>
    <FixedTootlipContent>Passe o mouse aqui!</FixedTootlipContent>
  </TooltipBox>
);

fixedWithContentPositionStart.story = {
  name: 'fixed with contentPosition = start',
};

export const fixedWithContentPositionMiddle = () => (
  <TooltipBox fixed contentPosition="middle" content={tooltipContentComponent}>
    <FixedTootlipContent>Passe o mouse aqui!</FixedTootlipContent>
  </TooltipBox>
);

fixedWithContentPositionMiddle.story = {
  name: 'fixed with contentPosition = middle',
};

export const fixedWithContentPositionEnd = () => (
  <TooltipBox fixed contentPosition="end" content={tooltipContentComponent}>
    <FixedTootlipContent>Passe o mouse aqui!</FixedTootlipContent>
  </TooltipBox>
);

fixedWithContentPositionEnd.story = {
  name: 'fixed with contentPosition = end',
};

export const fixedWithContentPositionStartOnBottom = () => (
  <TooltipBox fixed contentPosition="start" mount="bottom" content={tooltipContentComponent}>
    <FixedTootlipContent>Passe o mouse aqui!</FixedTootlipContent>
  </TooltipBox>
);

fixedWithContentPositionStartOnBottom.story = {
  name: 'fixed with contentPosition = start on bottom',
};
