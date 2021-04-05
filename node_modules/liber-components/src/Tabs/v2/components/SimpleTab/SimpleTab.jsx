import React from 'react';
import PropTypes from 'prop-types';
import { TooltipBox } from '../../../../Helpers';
import { Tab, Icon, TooltipContent, ChildContainer, tooltipDelay } from './SimpleTab.styles';

const TableTab = React.forwardRef(
  (
    { children, tooltip, tooltipIcon, tooltipDirection, left, tooltipDelay, ...props },
    ref,
  ) => {
    return (
      <Tab {...props} left={left} ref={ref}>
        {!tooltip ? (
          <ChildContainer left={left}>{children}</ChildContainer>
        ) : (
          <TooltipBox
            content={<TooltipContent>{tooltip}</TooltipContent>}
            delay={!!tooltipDelay}
            delayTime={tooltipDelay}
            mount={tooltipDirection}
            fixed
          >
            <ChildContainer left={left}>{children}</ChildContainer>
          </TooltipBox>
        )}
      </Tab>
    );
  },
);

TableTab.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  tooltip: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  tooltipIcon: PropTypes.oneOfType([PropTypes.element]),
  tooltipDirection: PropTypes.string,
  tooltipDelay: PropTypes.number,
  left: PropTypes.bool,
};
TableTab.defaultProps = {
  children: '',
  tooltip: null,
  tooltipIcon: <Icon />,
  tooltipDirection: 'bottom',
  tooltipDelay: 1000,
  left: false,
};

export default TableTab;
