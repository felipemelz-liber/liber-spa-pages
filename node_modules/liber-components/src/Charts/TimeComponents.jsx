import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { VictoryLabel } from 'victory';

import { handleThemeFromObject } from '../Themes';

const monthLabelStyle = {
  fontSize: '14px',
};
const markedDayLabelStyle = theme => ({
  fill: handleThemeFromObject(theme, 'barChart.timeComponents.markedDay', '#009dff'),
  fontSize: '11px',
});

export class TimeLabelComponent extends Component {
  getLabelFormatedDate = (date, format) => {
    switch (format) {
      case 'year':
        return date.format('YYYY');
      case 'month':
        return date.locale('pt-br').format('MMM').toUpperCase();
      case 'days':
      default:
        return date.format('DD');
    }
  }

  getTodayLabel = (format) => {
    switch (format) {
      case 'year':
        return '(ano atual)';
      case 'month':
        return '(mês atual)';
      case 'days':
      default:
        return '(dia atual)';
    }
  }

  separatorLabelFormat = (date, separator) => {
    switch (separator) {
      case 'week':
        return date.locale('pt-br').format('WW').toUpperCase();
      case 'month':
      default:
        return date.locale('pt-br').format('MMM').toUpperCase();
    }
  }

  renderSeparator = (config, info, size) => {
    const { x, y } = info;
    if (config.showLine && !config.today) {
      return (
        <line
          x1={x}
          y1={y - 15}
          x2={x}
          y2={y - (size + 15)}
          stroke={config.lineColor}
          strokeDasharray="4, 4"
          strokeWidth={2}
        />
      );
    }
    return null;
  }

  renderTodayMark = (config, info, size, screenSize) => {
    const {
      x, y, style, verticalAnchor, theme, ...props
    } = info;
    const small = screenSize === 'small' || screenSize === 'medium';
    if (config.today) {
      const line = (
        <line
          x1={x}
          y1={y - 15}
          x2={x}
          y2={y - (size + 15)}
          stroke={handleThemeFromObject(theme, 'barChart.timeComponents.line', '#009dff')}
          strokeDasharray="4, 4"
        />
      );
      const text = (
        <text x={x} y={y} dy={25}>
          <tspan
            {...props}
            style={{ ...style, ...markedDayLabelStyle(theme) }}
            x={x}
            // y={y}
            y={config.start === null ? 15 : y}
          >{this.getTodayLabel(config.format)}
          </tspan>
        </text>
      );
      let rect = null;
      if (config.start !== null) {
        rect = (
          <rect
            x={x}
            y={y - (size + 15)}
            width={small ? 26 : 16}
            height={size}
            fill={handleThemeFromObject(theme, 'barChart.timeComponents.rect', '#dfe3eb')}
            opacity={0.4}
            style={{ pointerEvents: 'none' }}
          />
        );

        if (config.start) {
          const w = small ? 55 : 16;
          rect = (
            <rect
              x={x - w}
              y={y - (size + 15)}
              width={w}
              height={size}
              fill={handleThemeFromObject(theme, 'barChart.timeComponents.rect', '#dfe3eb')}
              opacity={0.4}
              strokeWidth={2}
              style={{ pointerEvents: 'none' }}
            />
          );
        }
      }

      return (
        <Fragment>
          {line}
          {rect}
          {text}
        </Fragment>
      );
    }
    return null;
  }

  renderLabel = (config, info) => {
    const { datum, style } = info;
    const labelStyle = { ...style };
    const { theme } = this.props;
    if (config.today) {
      labelStyle.fill = handleThemeFromObject(theme, 'barChart.timeComponents.label', '#009dff');
    }
    const date = moment(datum);
    return (
      <VictoryLabel
        {...info}
        style={labelStyle}
        text={config.showLabel ? this.getLabelFormatedDate(date, config.format) : null}
      />
    );
  }

  renderMonthLabel = (config, info) => {
    const {
      x, y, datum, style, verticalAnchor, ...props
    } = info;
    const date = moment(datum);
    if (config.separator) {
      const diff = moment(datum).endOf(config.separator).diff(date, 'days');
      if (diff >= 0 && diff < 5) return null;
    }
    if (config.showSeparatorLabel || (config.today && config.start)) {
      return (
        <text x={x} y={y} dy={45}>
          <tspan
            {...props}
            style={{ ...style, ...monthLabelStyle }}
            x={x}
            y={y}
            datum={datum}
          >
            {
              this.separatorLabelFormat(date, config.separator)
            }
          </tspan>
        </text>
      );
    }
    return null;
  }

  render() {
    const {
      config, lineSize, screenSize, ...info
    } = this.props;
    return (
      <Fragment>
        {this.renderTodayMark(config[info.index], info, lineSize, screenSize)}
        {this.renderSeparator(config[info.index], info, lineSize)}
        {this.renderLabel(config[info.index], info)}
        {this.renderMonthLabel(config[info.index], info)}
      </Fragment>
    );
  }
}

TimeLabelComponent.propTypes = {
  config: PropTypes.arrayOf(PropTypes.any).isRequired,
  lineSize: PropTypes.number.isRequired,
  theme: PropTypes.objectOf(PropTypes.any),
  screenSize: PropTypes.string,
};

TimeLabelComponent.defaultProps = {
  theme: undefined,
  screenSize: 'large',
};

export const TimeTickComponent = ({ config, ...info }) => {
  if (!config[info.index].showTick) {
    return null;
  }
  return (
    <line {...info} />
  );
};

TimeTickComponent.propTypes = {
  config: PropTypes.arrayOf(PropTypes.any).isRequired,
};
