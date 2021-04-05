import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Header, Label, Slide, BasicHeader } from './styles';
import { Tab } from '../tabsComponents';
import TabHeader from './Header';

function validateTab(props, propName, componentName) {
  let children = props[propName];
  if (children.constructor !== Array) {
    children = Array(children);
  }
  children.forEach(child => {
    if (child.type !== Tab && child.type !== TabHeader) {
      return new Error(`${componentName} only accept Tab or TabHeader as children.`);
    }
    return null;
  });
  return null;
}

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.active || 0,
      ...this.dispartChildren(props.children),
    };
  }

  static getDerivedStateFromProps(nextProps) {
    const { active } = nextProps;
    return active !== null && active !== undefined ? { current: nextProps.active } : {};
  }

  dispartChildren = children => {
    const tabChildren = React.Children.toArray(children).filter(child => child.type === Tab);
    const tabHeader = React.Children.toArray(children).filter(child => child.type === TabHeader)[0];
    return {
      tabChildren,
      tabHeader,
    };
  };

  handleSelection = index => {
    const { active } = this.props;
    if (active === null || active === undefined) {
      this.setState({ current: index });
    }
  };

  render() {
    const { current, tabChildren, tabHeader } = this.state;
    const { children, slideColor, ...props } = this.props;

    const labels = React.Children.toArray(tabChildren).map(child => child.props.label);
    const mappedLabels = labels.map((label, index) => {
      const id = _.uniqueId(label);
      return (
        <Label {...props} htmlFor={id} key={id} active={index === current} data-value={label}>
          <input
            onChange={() => this.handleSelection(index)}
            type="radio"
            name="tabs"
            id={id}
            checked={index === current}
          />
          {label}
        </Label>
      );
    });
    let header;
    if (tabHeader) {
      if (tabHeader.props.asList) {
        header = React.cloneElement(tabHeader, {
          labels: mappedLabels,
          slider: <Slide number={labels.length} current={current} color={slideColor} />,
          header: BasicHeader,
        });
      } else {
        header = React.cloneElement(tabHeader, {
          labels: (
            <BasicHeader>
              {mappedLabels}
              <Slide role="slider" number={labels.length} current={current} color={slideColor} />
            </BasicHeader>
          ),
        });
      }
    } else {
      header = (
        <Header>
          {mappedLabels}
          <Slide number={labels.length} current={current} color={slideColor} />
        </Header>
      );
    }

    return (
      <>
        {header}
        {tabChildren[current]}
      </>
    );
  }
}

Tabs.propTypes = {
  slideColor: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  children: validateTab,
  active: PropTypes.number,
};

Tabs.defaultProps = {
  slideColor: undefined,
  children: <div />,
  active: null,
};

export default Tabs;
