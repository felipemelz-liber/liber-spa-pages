import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import momentTimezone from 'moment-timezone';
import _ from 'lodash';
import { extendMoment } from 'moment-range';
import Hammer from 'react-hammerjs';
import {
  VictoryChart, VictoryBar, VictoryAxis, VictoryLabel,
} from 'victory';
import { handleThemeFromObject } from '../../Themes';

import { GraphContainer, Slider } from '../styles';
import { TimeLabelComponent, TimeTickComponent } from '../TimeComponents';
import { getScreenSize } from '../../Util';
import Bar from './Bar';

momentTimezone.tz.setDefault('UTC');
const moment = extendMoment(Moment);

const G = ({ standalone, ...props }) => <g {...props} standalone={standalone.toString()} />;

G.propTypes = {
  standalone: PropTypes.bool,
};
G.defaultProps = {
  standalone: false,
};

const xAxisStyle = theme => ({
  stroke: handleThemeFromObject(theme, 'barChart.xAxis.stroke', '#dfe3eb'),
  strokeWidth: '3px',
});
const yAxisStyle = {
  fill: 'unset',
  stroke: 'unset',
};
const yGridStyle = theme => ({
  stroke: handleThemeFromObject(theme, 'barChart.yAxis.grid', '#dfe3eb'),
});
const yTickLabelStyle = (theme, screenSize) => {
  const small = screenSize === 'small' || screenSize === 'medium';
  return {
    fill: handleThemeFromObject(theme, 'barChart.yAxis.tick', '#8e869c'),
    fontFamily: handleThemeFromObject(theme, 'barChart.yAxis.fontFamily', 'Roboto'),
    fontSize: handleThemeFromObject(
      theme,
      small ? 'barChart.yAxis.fontSize.small' : 'barChart.yAxis.fontSize.large',
      small ? '10px' : '16px',
    ),
    fontWeight: handleThemeFromObject(theme, 'barChart.yAxis.fontWeight', '500'),
  };
};
const xTickStyle = theme => ({
  stroke: handleThemeFromObject(theme, 'barChart.xAxis.stroke', '#dfe3eb'),
  size: 5,
  strokeWidth: '6px',
});
const xTickLabelStyle = theme => ({
  fill: handleThemeFromObject(theme, 'barChart.xAxis.tick', '#8e869c'),
  fontFamily: handleThemeFromObject(theme, 'barChart.xAxis.fontFamily', 'Roboto'),
  fontSize: handleThemeFromObject(theme, 'barChart.xAxis.fontSize', '12px'),
  fontWeight: handleThemeFromObject(theme, 'barChart.xAxis.fontWeight', '500'),
});

const YLabel = (props) => {
  const w = 40;
  const h = 14;
  const xShift = (w + 32) / 2;
  const yShift = h / 2;
  return (
    <Fragment>
      <rect x={props.x - xShift} y={props.y - yShift} ry="4" rx="4" width={w} height={h} fill="#DFE3EB" />
      <VictoryLabel {...props} />
    </Fragment>
  );
};

YLabel.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
};

YLabel.defaultProps = {
  x: undefined,
  y: undefined,
};

class BarChart extends Component {
  constructor(props) {
    super(props);
    const screenSize = getScreenSize(window);
    this.sliderOffset = {
      small: 7,
      medium: 15,
    };
    this.state = {
      screenSize,
      brushDomain: this.getBrushDomain(0, screenSize),
      sliderValue: 0,
    };
  }

  componentDidMount() {
    this.setScreeSize();
    window.addEventListener('resize', this.setScreeSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setScreeSize);
  }

  setScreeSize = () => {
    const screenSize = getScreenSize(window);
    this.setState({
      screenSize,
      brushDomain: this.getBrushDomain(0, screenSize),
      sliderValue: 0,
    });
  }

  getBrushDomain = (sliderValue, screenSize) => {
    const { xDomain, data } = this.props;
    const { first, last } = xDomain;
    if (xDomain.scale === 'time') {
      if (screenSize === 'small' || screenSize === 'medium') {
        const firstDayOfDomain = moment(first || data[0].x).subtract(1, 'days').add(sliderValue, 'days');
        const lastDayOfDomain = moment(firstDayOfDomain).add(this.sliderOffset[screenSize], 'days');
        return [firstDayOfDomain, lastDayOfDomain];
      }
      return [moment(first || data[0].x), last || data[data.length - 1].x];
    }
    return [first || data[0].x, last || data[data.length - 1].x];
  }

  getRangeTicks = (range, offset, offsetBy, skip) => {
    const { screenSize } = this.state;
    const arr = Array.from(range.by(
      offsetBy,
      { step: screenSize === 'small' || screenSize === 'medium' ? 0 : offset },
    ));
    let skipCounter = skip;
    return arr.reduce((prev, next, index) => {
      prev.ticks.push(next);
      let showLabel = false;
      if (skipCounter === skip) {
        showLabel = true;
        skipCounter = 0;
      } else {
        skipCounter += 1;
      }
      prev.config.push({
        showTick: true,
        showLabel,
        showLine: false,
        showMonthLabel: index === 0,
        format: offsetBy,
      });
      return prev;
    }, { ticks: [], config: [] });
  }

  getSeparators = (range, filter) => {
    const def = { ticks: [], config: [], strings: [] };
    if (filter) {
      const arr = Array.from(range.by('day'));
      return arr.reduce(
        (prev, next) => {
          const marker = next.startOf(filter);
          if (range.contains(marker) && !prev.strings.includes(marker.format('MM'))) {
            prev.ticks.push(marker);
            prev.strings.push(marker.format('MM'));
            prev.config.push({
              showTick: false,
              showLabel: false,
              showLine: true,
              lineColor: handleThemeFromObject(this.props.theme, 'barChart.separator', '#dfe3eb'),
              showSeparatorLabel: true,
              separator: filter,
            });
          }
          return prev;
        },
        def,
      );
    }
    return def;
  }

  getTickValues = (start, finish, offset, offsetBy, skip, separator, past) => {
    const { xDomain, data } = this.props;
    const { first, last } = xDomain;
    let ticks;
    let config;
    const today = moment().startOf(offsetBy);
    const range = moment.range(start, finish);
    const separators = this.getSeparators(range, separator);
    let configTicks = this.getRangeTicks(range, offset, offsetBy, skip);
    configTicks = this.addFinish(configTicks, finish);
    if (!past && !!start.isSame(first || data[0].x)) {
      configTicks.config[0].separator = separator;
      configTicks.config[0].showLine = true;
      configTicks.config[0].showSeparatorLabel = true;
      configTicks.config[0].lineColor = handleThemeFromObject(this.props.theme, 'barChart.separator', '#dfe3eb');
    }
    if (range.contains(today)) {
      const todayConfig = {
        today: true,
        start: null,
        format: offsetBy,
      };
      if (!past && !!today.isSame(first || data[0].x)) {
        todayConfig.start = true;
        todayConfig.separator = separator;
      } else if (past && !!today.isSame(last || data[data.length - 1].x)) {
        todayConfig.start = false;
      }
      ticks = [...separators.ticks, ...configTicks.ticks, today];
      config = [...separators.config, ...configTicks.config, todayConfig];
    } else {
      ticks = [...separators.ticks, ...configTicks.ticks];
      config = [...separators.config, ...configTicks.config];
    }
    return {
      ticks,
      config,
    };
  }

  getBarSize = (screenSize, padding, first, last, width) => {
    switch (screenSize) {
      case 'large':
      case 'extraLarge':
        return ((width - (padding.left + padding.right)) / moment(last).diff(moment(first), 'days')) - 5;
      case 'small':
      case 'medium':
        return ((width - (padding.left + padding.right)) / (this.sliderOffset[screenSize] + 1)) - 5;
      default:
        return 15;
    }
  }

  addFinish = (configTicks, finish) => {
    const config = configTicks;
    const lastTick = configTicks.ticks[configTicks.config.length - 1];
    const lastConfig = configTicks.config[configTicks.config.length - 1];
    const diff = finish.diff(lastTick, 'days');
    if (diff <= 1) {
      config.ticks[configTicks.config.length - 1] = finish;
    } else {
      config.ticks.push(finish);
      config.config.push({ ...lastConfig });
    }
    return config;
  }

  colors = () => {
    const { barColors, theme } = this.props;
    const handled = handleThemeFromObject(theme, 'barChart.color', '#50e3c2', barColors);

    if (typeof barColors === 'string' || barColors instanceof String) {
      return {
        pastColor: handled,
        futureColor: handled,
      };
    }
    return handled;
  }

  padding = () => {
    const { screenSize } = this.state;
    const { padding } = this.props;
    const small = screenSize === 'small' || screenSize === 'medium';
    if (Number.isInteger(padding)) {
      return {
        top: padding,
        bottom: padding,
        left: small ? 0 : padding,
        right: small ? 0 : padding,
      };
    }
    return small ? { ...padding, left: 0, right: 0 } : padding;
  }

  renderXAxis = () => {
    const {
      xDomain, width, height, data, theme,
    } = this.props;
    const padding = this.padding();
    const { brushDomain, screenSize } = this.state;
    const {
      first,
      last,
      offsetBy = 'days',
      offset = 4,
      skip = 0,
      timeSeparator = 'month',
      count = 0,
      past = false,
      scale = 'time',
    } = xDomain;
    const props = {
      width,
      height,
      standalone: false,
      style: {
        axis: xAxisStyle(theme),
        ticks: xTickStyle(theme),
        tickLabels: xTickLabelStyle(theme),
      },
    };

    if (scale === 'time') {
      const { ticks, config } = this.getTickValues(
        moment(brushDomain[0]),
        moment(brushDomain[1]),
        offset,
        offsetBy,
        skip,
        timeSeparator,
        past,
      );
      props.tickValues = ticks;
      props.tickLabelComponent = (
        <TimeLabelComponent
          config={config}
          lineSize={height - (padding.top + padding.bottom)}
          screenSize={screenSize}
        />
      );
      props.tickComponent = (<TimeTickComponent config={config} />);
    } else {
      const domain = [first || data[0].x, last || data[data.length - 1].x];
      if (domain.every(item => _.isNumber(item))) {
        props.domain = domain;
      }
      props.tickCount = count > 0 ? count : null;
    }
    return (
      <VictoryAxis
        {...props}
      />
    );
  }

  renderYAxis = (label = true, grid = true) => {
    const { screenSize } = this.state;
    const {
      yDomain, width, height, theme,
    } = this.props;
    const small = screenSize === 'small' || screenSize === 'large';
    const {
      first = 0,
      last = 30,
      count = 3,
      format = t => `R$ ${Math.round(t)}k`,
    } = yDomain;
    return (
      <VictoryAxis
        dependentAxis
        width={width}
        height={height}
        domain={[first, last]}
        tickCount={count}
        tickFormat={format}
        standalone={false}
        offsetX={small && label ? 47 : undefined}
        tickLabelComponent={small && label ? <YLabel /> : undefined}
        style={{
          axis: yAxisStyle,
          grid: grid ? yGridStyle(theme) : undefined,
          tickLabels: yTickLabelStyle(theme, screenSize),
        }}
      />
    );
  }

  renderBars = () => {
    const {
      data, onClick, xDomain, width,
      hoverEvents,
    } = this.props;
    const { first, last } = xDomain;
    const {
      screenSize,
    } = this.state;
    const mouseIn = {
      target: 'data',
      mutation: props => ({
        style: {
          opacity: 1,
          cursor: props.style.cursor,
          width: props.style.width,
        },
      }),
    };
    const mouseOut = {
      target: 'data',
      mutation: props => ({
        style: {
          opacity: 1,
          cursor: props.style.cursor,
          width: props.style.width,
        },
      }),
    };
    const opacityIn = {
      target: 'data',
      eventKey: 'all',
      mutation: props => ({
        style: {
          opacity: 0.5,
          cursor: props.style.cursor,
          width: props.style.width,
          transition: 'opacity 200ms ease-in',
        },
      }),
    };
    const opacityOut = {
      target: 'data',
      eventKey: 'all',
      mutation: props => ({
        style: {
          opacity: 1,
          cursor: props.style.cursor,
          width: props.style.width,
          transition: 'opacity 100ms ease-in',
        },
      }),
    };
    const eventHandlers = {
      onClick: (...args) => { onClick(...args); },
      onMouseEnter: () => (hoverEvents ? [opacityIn, mouseIn] : []),
      onMouseLeave: () => (hoverEvents ? [opacityOut, mouseOut] : []),
    };

    const events = [
      {
        target: 'data',
        eventHandlers,
      },
    ];
    const padding = this.padding();
    const colors = this.colors();
    const barWidth = this.getBarSize(screenSize, padding, first, last, width);

    return (
      <VictoryBar
        style={{
          data: {
            fill: colors.futureColor,
            cursor: hoverEvents ? 'pointer' : null,
            width: barWidth > 7 ? barWidth : 7,
          },
        }}
        data={data}
        events={events}
        groupComponent={<g clipPath="url(#victory-clip-2)" />}
        dataComponent={<Bar colors={colors} hoverEvents={hoverEvents} />}
      />
    );
  }

  render() {
    const {
      height, width, xDomain, yDomain,
    } = this.props;
    const padding = this.padding();
    const { first, last } = xDomain;
    const { screenSize } = this.state;
    const small = screenSize === 'small' || screenSize === 'medium';
    return (
      <Hammer
        onPan={small
          ? (e) => {
            const events = {
              panright: -0.4,
              panleft: 0.4,
            };
            const { sliderValue } = this.state;
            const value = sliderValue + events[e.additionalEvent];
            const min = 0;
            const max = moment(last).diff(moment(first), 'days') - this.sliderOffset[screenSize];
            if (value >= min && value <= max) {
              this.setState(prevState => ({
                sliderValue: parseFloat(value, 10),
                brushDomain: this.getBrushDomain(parseFloat(value, 10), prevState.screenSize),
              }));
            }
          } : null}
        direction="DIRECTION_HORIZONTAL"
      >
        <div>
          <VictoryChart
            bindTooltipToMouse
            width={width}
            height={height}
            domainPadding={{ x: xDomain.padding || 15, y: yDomain.padding || null }}
            scale={{ x: xDomain.scale || 'time', y: yDomain.scale || 'linear' }}
            containerComponent={<GraphContainer />}
            domain={{ x: this.state.brushDomain }}
            padding={padding}
          >

            <G>
              <defs>
                <clipPath id="victory-clip-2">
                  <rect
                    x={small ? '0' : '70'}
                    y="50"
                    width={width - (padding.left + padding.right)}
                    height={height - (padding.top + padding.bottom)}
                    role="presentation"
                    shapeRendering="auto"
                    vectorEffect="non-scaling-stroke"
                  />
                </clipPath>
              </defs>
            </G>
            {this.renderYAxis()}
            {this.renderBars()}
            {this.renderXAxis()}
            {small ? this.renderYAxis(true, false) : null}


          </VictoryChart>
          {
          small
            ? (
              <Slider
                width={width}
                value={this.state.sliderValue}
                min={0}
                max={moment(last).diff(moment(first), 'days') - this.sliderOffset[screenSize]}
                onChange={(event) => {
                  const { value } = event.target;
                  this.setState(prevState => ({
                    sliderValue: parseInt(value, 10),
                    brushDomain: this.getBrushDomain(parseInt(value, 10), prevState.screenSize),
                  }));
                }}
              />
            )
            : null
        }
        </div>
      </Hammer>
    );
  }
}

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  xDomain: PropTypes.shape({
    scale: PropTypes.string,
    timeSeparator: PropTypes.string,
    first: PropTypes.any,
    last: PropTypes.any,
    offsetBy: PropTypes.string,
    offset: PropTypes.number,
    skip: PropTypes.number,
    count: PropTypes.number,
  }),
  yDomain: PropTypes.shape({
    scale: PropTypes.string,
    first: PropTypes.any,
    last: PropTypes.any,
    offset: PropTypes.number,
    count: PropTypes.number,
    format: PropTypes.func,
  }),
  height: PropTypes.number,
  width: PropTypes.number,
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      top: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number,
      right: PropTypes.number,
    }),
  ]),
  barColors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pastColor: PropTypes.string,
      futureColor: PropTypes.string,
    }),
  ]),
  theme: PropTypes.objectOf(PropTypes.any),
  hoverEvents: PropTypes.bool,
  onClick: PropTypes.func,
};

BarChart.defaultProps = {
  data: [
    { x: momentTimezone('2018-09-28'), y: 27 },
    { x: momentTimezone('2018-09-30'), y: 27 },
    { x: momentTimezone('2018-10-02'), y: 10 },
    { x: momentTimezone('2018-10-04'), y: 10 },
    { x: momentTimezone('2018-10-18'), y: 26 },
    { x: momentTimezone('2018-10-20'), y: 20 },
    { x: momentTimezone('2018-10-27'), y: 20 },
  ],
  xDomain: {
    scale: 'time',
    timeSeparator: 'month',
    past: false,
    first: momentTimezone('2018-10-01'),
    last: momentTimezone('2018-10-28'),
    offsetBy: 'days',
    offset: 4,
    skip: 0,
    count: 0,
    padding: 15,
  },
  yDomain: {
    scale: 'linear',
    marker: null,
    first: 0,
    last: 30,
    offset: 0,
    count: 3,
    format: t => `R$ ${Math.round(t)}k`,
    padding: null,
  },
  height: 400,
  width: 1160,
  padding: {
    top: 50, bottom: 60, left: 70, right: 50,
  },
  barColors: '',
  theme: null,
  hoverEvents: true,
  onClick: () => {},
};

export default BarChart;
