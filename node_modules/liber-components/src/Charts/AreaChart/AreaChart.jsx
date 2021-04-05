import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import momentTimezone from 'moment-timezone';
import _ from 'lodash';
import Hammer from 'react-hammerjs';
import { extendMoment } from 'moment-range';
import {
  VictoryChart,
  VictoryAxis,
  VictoryArea,
  VictoryLine,
  VictoryVoronoiContainer,
  VictoryScatter,
  VictoryLabel,
} from 'victory';
import { handleThemeFromObject } from '../../Themes';
import { GraphVoronoiContainer, Slider } from '../styles';
import { TimeLabelComponent, TimeTickComponent } from '../TimeComponents';
import { getScreenSize } from '../../Util';
import { Tooltip } from '../../Helpers';
import Dot from './Dot';

momentTimezone.tz.setDefault('UTC');
const moment = extendMoment(Moment);

const G = ({ standalone, ...props }) => <g {...props} standalone={standalone.toString()} />;
const Circle = ({ standalone, ...props }) => <circle {...props} standalone={standalone.toString()} />;

G.propTypes = {
  standalone: PropTypes.bool,
};
G.defaultProps = {
  standalone: false,
};

Circle.propTypes = {
  standalone: PropTypes.bool,
};
Circle.defaultProps = {
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

class AreaChart extends Component {
  constructor(props) {
    super(props);
    const screenSize = getScreenSize(window);
    const { offsetBy = 'days' } = props.xDomain;
    this.sliderOffset = {
      small: 3,
      medium: 12,
    };
    this.state = {
      screenSize,
      ...this.getBrushDomain(0, screenSize, offsetBy),
      sliderValue: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.setScreeSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setScreeSize);
  }

  setScreeSize = () => {
    const screenSize = getScreenSize(window);
    const { offsetBy = 'days' } = this.props.xDomain;
    this.setState({
      screenSize,
      ...this.getBrushDomain(0, screenSize, offsetBy),
      sliderValue: 0,
    });
  }

  getBrushDomain = (sliderValue, screenSize, offsetBy) => {
    const { xDomain, data } = this.props;
    const { first, last } = xDomain;
    if (xDomain.scale === 'time') {
      if (screenSize === 'small' || screenSize === 'medium') {
        const firstDayOfDomain = moment(first || data[0].x).add(sliderValue, offsetBy);
        let lastDayOfDomain = moment(firstDayOfDomain).add(this.sliderOffset[screenSize], offsetBy);
        if (last.diff(lastDayOfDomain, offsetBy) < 1) {
          lastDayOfDomain = last;
        }
        if (
          moment(last || data[data.length - 1].x).diff(moment(first || data[0].x), offsetBy)
          > this.sliderOffset[screenSize]) {
          return { brushDomain: [firstDayOfDomain, lastDayOfDomain], showHandle: true };
        }
      }
      return { brushDomain: [moment(first || data[0].x), moment(last || data[data.length - 1].x)], showHandle: false };
    }
    return { brushDomain: [first || data[0].x, last || data[data.length - 1].x], showHandle: false };
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
              lineColor: '#dfe3eb',
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

  getTickValues = (start, finish, offset, offsetBy, currMarker, skip, separator, past) => {
    const { xDomain, data } = this.props;
    const { first, last } = xDomain;
    let ticks;
    let config;
    const today = moment().startOf(currMarker);
    const range = moment.range(start, finish);
    const separators = this.getSeparators(range, separator);
    let configTicks = this.getRangeTicks(range, offset, offsetBy, skip);
    configTicks = this.addFinish(configTicks, offsetBy, currMarker, finish);
    if (!past && !!start.isSame(first || data[0].x)) {
      configTicks.config[0].separator = separator;
      configTicks.config[0].showLine = !!separator;
      configTicks.config[0].showSeparatorLabel = !!separator;
      configTicks.config[0].lineColor = '#dfe3eb';
    }
    if (range.contains(today)) {
      const todayConfig = {
        today: true,
        start: null,
        format: currMarker,
      };
      if (!past && !!today.isSame(first || data[0].x)) {
        todayConfig.start = true;
        todayConfig.separator = separator || offsetBy;
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

  addFinish = (configTicks, offsetBy, currMarker, finish) => {
    const config = configTicks;
    const lastTick = configTicks.ticks[configTicks.config.length - 1];
    const lastConfig = JSON.parse(JSON.stringify(configTicks.config[configTicks.config.length - 1]));
    lastConfig.showLabel = moment(finish).startOf(currMarker).isSame(moment(finish).startOf(offsetBy));
    const diff = finish.diff(lastTick, currMarker);
    if (diff <= 1) {
      if (currMarker === 'day') {
        config.ticks[configTicks.config.length - 1] = finish;
      }
    } else {
      config.ticks.push(finish);
      config.config.push({ ...lastConfig });
    }
    return config;
  }

  colors = () => {
    const { barColors } = this.props;
    if (typeof barColors === 'string' || barColors instanceof String) {
      return {
        pastColor: barColors,
        futureColor: barColors,
      };
    }
    return barColors;
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
      offsetBy = 'month',
      currMarker = 'day',
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
        currMarker,
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

  renderArea = () => {
    const {
      data, interpolation,
    } = this.props;

    return (
      <VictoryArea
        style={{
          data: {
            fill: 'url(#gradient)',
            strokeWidth: '0px',
          },
        }}
        data={data}
        interpolation={interpolation}
        groupComponent={<g clipPath="url(#victory-clip-2)" />}
      />
    );
  }

  renderScater = () => {
    const {
      data, xDomain,
    } = this.props;
    const colors = this.colors();
    return (
      <VictoryScatter
        data={data}
        size={5}
        style={{ data: { strokeWidth: 3, stroke: xDomain.past ? colors.pastColor : colors.futureColor, fill: '#fff' } }}
        dataComponent={<Dot />}
      />
    );
  }

  renderLine = () => {
    const {
      data, interpolation, xDomain,
    } = this.props;
    const colors = this.colors();
    return (
      <VictoryLine
        style={{
          data: {
            stroke: xDomain.past ? colors.pastColor : colors.futureColor,
            strokeWidth: '3px',
          },
        }}
        data={data}
        interpolation={interpolation}
        groupComponent={<g clipPath="url(#victory-clip-2)" />}
      />
    );
  }

  render() {
    const {
      height, width, xDomain, yDomain, hoverEvents,
    } = this.props;
    const padding = this.padding();
    const { first, last, offsetBy } = xDomain;
    const {
      screenSize,
      showTooltip,
      position,
      dotPosition,
      tooltip,
    } = this.state;
    const colors = this.colors();
    const small = screenSize === 'small' || screenSize === 'medium';
    return (
      <Hammer
        onPan={small
          ? (e) => {
            const events = {
              panright: -0.1,
              panleft: 0.1,
            };
            const { sliderValue } = this.state;
            const value = sliderValue + events[e.additionalEvent];
            const min = 0;
            const max = moment(last).diff(moment(first), offsetBy) - this.sliderOffset[screenSize] || 0;
            if (value >= min && value <= max) {
              this.setState(prevState => ({
                sliderValue: parseFloat(value, 10),
                ...this.getBrushDomain(parseFloat(value, 10), prevState.screenSize, offsetBy),
              }));
            }
          } : null}
        direction="DIRECTION_HORIZONTAL"
      >
        <div>
          <GraphVoronoiContainer
            width={width}
          >
            <VictoryChart
              width={width}
              height={height}
              domainPadding={{ x: xDomain.padding || 15, y: yDomain.padding || null }}
              scale={{ x: xDomain.scale || 'time', y: yDomain.scale || 'linear' }}
              containerComponent={(
                <VictoryVoronoiContainer
                  voronoiDimension="x"
                  disable={!hoverEvents}
                />
            )}
              domain={{ x: this.state.brushDomain }}
              padding={padding}
            >
              {this.renderYAxis()}
              <G>
                <defs>
                  {
                  this.state.showHandle
                    ? (
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
                    )
                    : null
                }
                  <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor={xDomain.past ? colors.pastColor : colors.futureColor}
                      stopOpacity="0.5"
                    />
                    <stop
                      offset="100%"
                      stopColor={xDomain.past ? colors.pastColor : colors.futureColor}
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
              </G>
              {this.renderArea()}
              {this.renderLine()}
              {this.renderScater()}
              {this.renderXAxis()}
              {small ? this.renderYAxis(true, false) : null}

              {
              showTooltip && hoverEvents && !this.state.showHandle
                ? (
                  <Circle
                    cx={dotPosition.x}
                    cy={dotPosition.y}
                    r="5"
                    stroke={xDomain.past ? colors.pastColor : colors.futureColor}
                    strokeWidth="3"
                    fill="#fff"
                    style={{
                      cursor: 'pointer',
                      pointerEvents: 'none',
                    }}
                  />
                )
                : null
            }
            </VictoryChart>
          </GraphVoronoiContainer>
          {
          this.state.showHandle
            ? (
              <Slider
                width={width}
                value={this.state.sliderValue}
                min={0}
                max={moment(last).diff(moment(first), offsetBy) - this.sliderOffset[screenSize] || 0}
                onChange={(event) => {
                  const { value } = event.target;
                  this.setState(prevState => ({
                    sliderValue: parseInt(value, 10),
                    ...this.getBrushDomain(parseInt(value, 10), prevState.screenSize, offsetBy),
                  }));
                }}
              />
            )
            : null
        }
          {
          showTooltip && hoverEvents && !this.state.showHandle
            ? (
              <Tooltip
                type="floater"
                mount="top"
                mousePadding={25}
                show={showTooltip}
                position={position}
                label={tooltip.label}
              >
                {tooltip.content}
              </Tooltip>
            )
            : null
        }
        </div>
      </Hammer>
    );
  }
}

AreaChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  interpolation: PropTypes.string,
  xDomain: PropTypes.shape({
    scale: PropTypes.string,
    timeSeparator: PropTypes.string,
    first: PropTypes.any,
    last: PropTypes.any,
    offsetBy: PropTypes.string,
    currMarker: PropTypes.string,
    offset: PropTypes.number,
    skip: PropTypes.number,
    count: PropTypes.number,
    padding: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.array,
    ]),
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

AreaChart.defaultProps = {
  data: [
    { x: momentTimezone('2018-04-01'), y: 10 },
    { x: momentTimezone('2018-05-01'), y: 80 },
    { x: momentTimezone('2018-06-01'), y: 30 },
    { x: momentTimezone('2018-07-01'), y: 50 },
    { x: momentTimezone('2018-08-01'), y: 78 },
    { x: momentTimezone('2018-09-01'), y: 78 },
    { x: momentTimezone('2018-09-28'), y: 78 },
  ],
  interpolation: 'stepAfter',
  xDomain: {
    scale: 'time',
    timeSeparator: null,
    past: true,
    first: momentTimezone('2018-04-01'),
    last: momentTimezone('2018-09-28'),
    offsetBy: 'month',
    currMarker: 'day',
    offset: 1,
    skip: 0,
    count: 0,
    padding: [15, 25],
  },
  yDomain: {
    scale: 'linear',
    marker: null,
    first: 0,
    last: 100,
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
  barColors: '#50e3c2',
  theme: null,
  hoverEvents: true,
  onClick: () => {},
};

export default AreaChart;
