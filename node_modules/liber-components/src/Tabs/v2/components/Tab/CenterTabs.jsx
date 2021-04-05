import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import TabsCtrl from './TabsCtrl';
import { SimpleTabs } from '../SimpleTab';
import { metaProperty } from '@babel/types';

const handleClick = (index, setActive) => () => {
  setActive(index);
};

const setAction = (child, index, active, setActive, styleProps) => {
  const { label, children } = child.props;
  return {
    actionTab: [
      React.cloneElement(child, {
        key: uniqueId(`tab_${label}`),
        as: 'div',
        onClick: handleClick(index, setActive),
        active: active === index,
        children: label,
        ...styleProps,
      }),
    ],
    tab: [{ key: uniqueId(label), content: children }],
    counter: 1,
  };
};

const mapDropDownChildren = (active, setActive) => (current, child) => {
  const { actionTab, tab, counter } = setAction(child, current.index, active, setActive);

  return {
    mappedTabs: [...current.mappedTabs, ...actionTab],
    tabs: [...current.tabs, ...tab],
    index: current.index + counter,
  };
};

const setDropDownAction = (dropdown, index, active, setActive) => {
  const children = React.Children.toArray(dropdown.props.children);
  const { mappedTabs, tabs: tab, index: counter } = children.reduce(
    mapDropDownChildren(active, setActive),
    { mappedTabs: [], tabs: [], index },
  );
  return {
    actionTab: [
      React.cloneElement(dropdown, {
        children: mappedTabs,
        active: active >= index && active < counter,
        as: 'div',
      }),
    ],
    tab,
    counter: counter - index,
  };
};

const isDropDown = child => child.type.displayName === 'DropDownTab';

const mapChildren = (active, setActive, styleProps) => (current, child) => {
  const action = isDropDown(child) ? setDropDownAction : setAction;
  const { actionTab, tab, counter } = action(child, current.index, active, setActive, styleProps);

  return {
    mappedTabs: [...current.mappedTabs, ...actionTab],
    tabs: [...current.tabs, ...tab],
    index: current.index + counter,
  };
};

const Tabs = props => {
  const [active, setActive] = useState(0);
  const {
    children,
    activeTab = active,
    onChange = setActive,
    ControlComponent,
    ...styleProps
  } = props;

  const { mappedTabs, tabs } = React.Children.toArray(children).reduce(
    mapChildren(activeTab, onChange, styleProps),
    { mappedTabs: [], tabs: [], index: 0 },
  );

  const header = <SimpleTabs>{mappedTabs}</SimpleTabs>;
  return React.cloneElement(ControlComponent, {
    header: header,
    active: activeTab,
    tabs: tabs,
  });
};

Tabs.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  activeTab: PropTypes.number,
  onChange: PropTypes.func,
  ControlComponent: PropTypes.element,
};

Tabs.defaultProps = {
  activeTab: undefined,
  onChange: undefined,
  ControlComponent: <TabsCtrl header={<div />} active={0} tabs={[]} />,
};

export default Tabs;
