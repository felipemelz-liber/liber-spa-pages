import React from 'react';
import PropTypes from 'prop-types';
import ClickOutside from '../../../../Util/ClickOutside';
import { Tab, Content } from './DropDownTab.styles';

const toogleContent = (open, setOpen) => () => {
  setOpen(!open);
};

const closeContent = setOpen => () => {
  setOpen(false);
};

const handleSelection = setCurrent => event => {
  const { target } = event;
  const label = target.getAttribute('label');
  if (label) {
    setCurrent(label);
  }
};

const DropDownTab = ({ active, minWidth, children: childrenProp, strongBorder, label }) => {
  const children = React.Children.toArray(childrenProp);
  if (!children || children.length < 2) {
    throw new Error('You need at least two children, dumbass!');
  }
  const [open, setOpen] = React.useState(false);
  return (
    <Tab
      as="div"
      active={active}
      onClick={toogleContent(open, setOpen)}
      minWidth={minWidth}
      strongBorder={strongBorder}
    >
      <ClickOutside onOutsideClick={closeContent(setOpen)}>
        {label}
        <Content open={open} strongBorder={strongBorder}>
          {children}
        </Content>
      </ClickOutside>
    </Tab>
  );
};

DropDownTab.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  active: PropTypes.bool,
  minWidth: PropTypes.number,
  strongBorder: PropTypes.bool,
  label: PropTypes.node,
};

DropDownTab.defaultProps = {
  active: false,
  minWidth: undefined,
  strongBorder: false,
  label: 'Opções',
};

DropDownTab.displayName = 'DropDownTab';

export default DropDownTab;
