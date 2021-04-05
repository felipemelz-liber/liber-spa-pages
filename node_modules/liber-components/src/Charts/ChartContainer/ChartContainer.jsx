import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { handleTheme, handleThemeFromObject } from '../../Themes';

import ChartLabel from '../ChartLabel/ChartLabel';
import DonutChart from '../DonutChart/DonutChart';
import PieChart from '../PieChart/PieChart';

const defaultColors = ['#18d8ee', '#2de8bf', '#537e86', '#40b7c9'];

const charts = [DonutChart, PieChart];

class ChartContainer extends Component {
  constructor(props) {
    super(props);
    this.labelCount = 0;
    let colors = [];
    props.children.forEach(child => {
      colors = this.findColors(child, colors);
    });
    this.state = {
      colors,
      target: null,
    };
  }

  handleEnterChart = (proxy, data, eventKey) => {
    const { onHighlightStart, onHighlightChartStart } = this.props;
    this.setState({ target: eventKey }, () => {
      onHighlightStart(eventKey);
      onHighlightChartStart(proxy, data, eventKey);
    });
  };

  handleLeaveChart = () => {
    const { onHighlightEnd, onHighlightChartEnd } = this.props;
    this.setState({ target: null }, () => {
      onHighlightEnd();
      onHighlightChartEnd();
    });
  };

  handleChartClickEvent = (...args) => {
    const { target } = this.state;
    const eventkey = args[2];
    if (target === null) {
      this.handleEnterChart(...args);
    } else if (target === eventkey) {
      this.handleLeaveChart();
    } else {
      this.handleLeaveChart();
      this.handleEnterChart(...args);
    }
  };

  handleEnterLabel = target => {
    const { onHighlightStart, onHighlightLabelStart } = this.props;
    this.setState({ target }, () => {
      onHighlightStart(target);
      onHighlightLabelStart(target);
    });
  };

  handleLeaveLabel = () => {
    const { onHighlightEnd, onHighlightLabelEnd } = this.props;
    this.setState({ target: null }, () => {
      onHighlightEnd();
      onHighlightLabelEnd();
    });
  };

  handleLabelClickEvent = index => {
    const { target } = this.state;
    if (target === null) {
      this.handleEnterLabel(index);
    } else if (target === index) {
      this.handleLeaveLabel();
    } else {
      this.handleLeaveLabel();
      this.handleEnterLabel(index);
    }
  };

  configClickEvent = (component, clickCallback) => {
    let onClick;
    if (component.props.onClick) {
      onClick = (...args) => {
        component.props.onClick(...args);
        clickCallback(...args);
      };
    } else {
      onClick = clickCallback;
    }
    return { onClick };
  };

  configHoverEvents = (component, enterCallback, leaveCallback) => {
    let onMouseEnter;
    let onMouseLeave;
    if (component.props.onMouseEnter) {
      onMouseEnter = (...args) => {
        component.props.onMouseEnter(...args);
        enterCallback(...args);
      };
    } else {
      onMouseEnter = enterCallback;
    }
    if (component.props.onMouseLeave) {
      onMouseLeave = (...args) => {
        component.props.onMouseLeave(...args);
        leaveCallback(...args);
      };
    } else {
      onMouseLeave = leaveCallback;
    }
    return {
      onMouseEnter,
      onMouseLeave,
    };
  };

  findLabel = component => {
    const child = component;
    if (child.type !== ChartLabel) {
      if (child.props && child.props.children) {
        return React.cloneElement(child, {
          children: Children.map(child.props.children, newChild => this.findLabel(newChild)),
        });
      }
      return child;
    }
    this.labelCount += 1;

    return this.configLabel(child, this.labelCount - 1);
  };

  findColors = (component, list) => {
    const child = component;
    let colors = list;
    if (child.type !== ChartLabel) {
      if (child.props && child.props.children) {
        Children.toArray(child.props.children).forEach(newChild => {
          colors = this.findColors(newChild, colors);
        });
      }
      return colors;
    }

    const themeColor =
      handleThemeFromObject(this.props.theme, 'chartContainer.defaultColors') || [];

    if (child.props.eventkey) {
      colors[child.props.eventkey] = handleTheme(
        themeColor[child.props.eventkey],
        defaultColors[child.props.eventkey],
        child.props.color,
      );
    } else {
      colors.push(
        handleTheme(themeColor[colors.length], defaultColors[colors.length], child.props.color),
      );
    }
    return colors;
  };

  configChart = chart => {
    let events = {};
    switch (this.props.event) {
      case 'click':
        events = this.configClickEvent(chart, this.handleChartClickEvent);
        break;
      case 'hover':
      default:
        events = this.configHoverEvents(chart, this.handleEnterChart, this.handleLeaveChart);
        break;
    }
    return React.cloneElement(chart, {
      ...events,
      colorScale: this.state.colors,
      target: this.state.target,
      targetEvent: this.props.event,
      disableInternalEvents: true,
    });
  };

  configLabel = (label, pos) => {
    let events;
    const { target } = this.state;
    const index = label.props.eventkey || pos.toString();
    switch (this.props.event) {
      case 'click':
        events = this.configClickEvent(label, () => {
          this.handleLabelClickEvent(index);
        });
        break;
      case 'hover':
      default:
        events = this.configHoverEvents(
          label,
          () => {
            this.handleEnterLabel(index);
          },
          () => {
            this.handleLeaveLabel(index);
          },
        );
        break;
    }
    let highlight = '1';
    if (target !== null && target !== undefined) {
      highlight = target === index ? '1' : '0.5';
    }
    return React.cloneElement(label, {
      ...events,
      highlight,
    });
  };

  render() {
    this.labelCount = 0;
    const props = Object.assign({}, this.props);
    delete props.onHighlightStart;
    delete props.onHighlightChartStart;
    delete props.onHighlightLabelStart;
    delete props.onHighlightEnd;
    delete props.onHighlightChartEnd;
    delete props.onHighlightLabelEnd;
    const children = Children.map(this.props.children, child => {
      if (charts.includes(child.type)) {
        return this.configChart(child);
      }
      return this.findLabel(child);
    });
    return <div {...props}>{children}</div>;
  }
}

ChartContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
  event: PropTypes.string,
  theme: PropTypes.objectOf(PropTypes.any),
  onHighlightStart: PropTypes.func,
  onHighlightChartStart: PropTypes.func,
  onHighlightLabelStart: PropTypes.func,
  onHighlightEnd: PropTypes.func,
  onHighlightChartEnd: PropTypes.func,
  onHighlightLabelEnd: PropTypes.func,
};

ChartContainer.defaultProps = {
  event: 'hover',
  theme: undefined,
  onHighlightStart: () => {},
  onHighlightChartStart: () => {},
  onHighlightLabelStart: () => {},
  onHighlightEnd: () => {},
  onHighlightChartEnd: () => {},
  onHighlightLabelEnd: () => {},
};

export default ChartContainer;
