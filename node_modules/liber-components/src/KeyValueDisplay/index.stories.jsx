import React from 'react';
import styled from 'styled-components';
import { FaExclamationCircle } from '../Icons';
import KeyValueDisplay from './KeyValueDisplay';

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

const Icon = styled(FaExclamationCircle)`
  fill: #009dff;
  --size: 16px;
  min-width: var(--size);
  min-height: var(--size);
  max-width: var(--size);
  max-height: var(--size);
`;

export default {
  title: 'Components 2.0|KeyValueDisplay',
  parameters: {
    jest: ['KeyValueDisplay'],
  },
};

export const defaultStory = () => (
  <Center>
    <KeyValueDisplay />
  </Center>
);

defaultStory.story = {
  name: 'default',
};

export const withTooltip = () => (
  <Center>
    <KeyValueDisplay tooltip="Tooltip text" label="lalala" />
  </Center>
);

withTooltip.story = {
  name: 'with tooltip',
};

export const withTooltipOnTop = () => (
  <Center>
    <KeyValueDisplay tooltip="Tooltip text" tooltipDirection="top" />
  </Center>
);

withTooltipOnTop.story = {
  name: 'with tooltip on top',
};

export const withTooltipOnRight = () => (
  <Center>
    <KeyValueDisplay tooltip="Tooltip text" tooltipDirection="right" />
  </Center>
);

withTooltipOnRight.story = {
  name: 'with tooltip on right',
};

export const withTooltipOnBottom = () => (
  <Center>
    <KeyValueDisplay tooltip="Tooltip text" tooltipDirection="bottom" />
  </Center>
);

withTooltipOnBottom.story = {
  name: 'with tooltip on bottom',
};

export const withTooltipOnLeft = () => (
  <Center>
    <KeyValueDisplay tooltip="Tooltip text" tooltipDirection="left" />
  </Center>
);

withTooltipOnLeft.story = {
  name: 'with tooltip on left',
};

export const withTooltipCustomIcon = () => (
  <Center>
    <KeyValueDisplay tooltip="Tooltip text" tooltipIcon={<Icon />} />
  </Center>
);

withTooltipCustomIcon.story = {
  name: 'with tooltip custom icon',
};
