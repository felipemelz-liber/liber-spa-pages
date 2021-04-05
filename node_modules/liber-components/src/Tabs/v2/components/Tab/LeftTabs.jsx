import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import TabsCtrl from './TabsCtrl';
import { SimpleTabs } from '../SimpleTab';
import { HeaderContainer, Slider } from './Tabs.styles';

class Tabs extends Component {
  state = {
    active: 0,
    size: 0,
  };

  tabs = [];

  componentDidMount = () => {
    const { active } = this.state;
    const { activeTab = active } = this.props;

    setTimeout(() => {
      this.setState({ size: this.tabs[activeTab].offsetWidth });
    }, 0);
  };

  handleClick = active => () => {
    const { onChange } = this.props;
    const currentTab = this.tabs[active];
    onChange(active);
    this.setState({
      active,
      size: currentTab.offsetWidth,
    });
  };

  tabRef = index => element => {
    this.tabs[index] = element;
  };

  mapChildren = active => (current, child, index) => {
    const { label, children } = child.props;
    return {
      mappedTabs: [
        ...current.mappedTabs,
        React.cloneElement(child, {
          key: uniqueId(`tab_${label}`),
          ref: this.tabRef(index),
          left: true,
          showUnderline: false,
          as: 'button',
          onClick: this.handleClick(index),
          active: active === index,
          children: label,
        }),
      ],
      tabs: [...current.tabs, { key: uniqueId(label), content: children }],
    };
  };

  render() {
    const { active, size } = this.state;
    const { children, activeTab = active, ControlComponent } = this.props;
    const { mappedTabs, tabs } = React.Children.toArray(children).reduce(
      this.mapChildren(activeTab),
      { mappedTabs: [], tabs: [] },
    );
    const header = (
      <HeaderContainer>
        <SimpleTabs left>{mappedTabs}</SimpleTabs>
        <Slider active={activeTab} size={size} />
      </HeaderContainer>
    );
    return React.cloneElement(ControlComponent, {
      header: header,
      active: activeTab,
      tabs: tabs,
    });
  }
}

Tabs.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  activeTab: PropTypes.number,
  onChange: PropTypes.func,
  ControlComponent: PropTypes.element,
};

Tabs.defaultProps = {
  activeTab: undefined,
  onChange: () => {},
  ControlComponent: <TabsCtrl header={<div />} active={0} tabs={[]} />,
};

export default Tabs;
