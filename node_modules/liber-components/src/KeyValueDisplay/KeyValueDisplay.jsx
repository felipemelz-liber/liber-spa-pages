import React from 'react';
import PropTypes from 'prop-types';
import { TooltipBox } from '../Helpers';

import { Box, Label, Value, TooltipContainer, IconContainer, Icon } from './KeyValueDisplay.styles';

const KeyValueDisplay = ({ label, children, tooltip, tooltipIcon, tooltipDirection, ...props }) => (
  <Box {...props}>
    <Label>{label}</Label>
    <Value>{children}</Value>
    {tooltip && (
      <TooltipContainer>
        <TooltipBox content={tooltip} mount={tooltipDirection} fixed>
          <IconContainer>{tooltipIcon}</IconContainer>
        </TooltipBox>
      </TooltipContainer>
    )}
  </Box>
);

KeyValueDisplay.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
  tooltipIcon: PropTypes.oneOfType([PropTypes.element]),
  tooltipDirection: PropTypes.string,
};

KeyValueDisplay.defaultProps = {
  label: 'Chave',
  children: 'Valor',
  tooltip: null,
  tooltipIcon: <Icon />,
  tooltipDirection: 'top',
};

export default KeyValueDisplay;
