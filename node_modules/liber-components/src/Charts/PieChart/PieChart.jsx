import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VictoryPie, VictoryTooltip } from 'victory';
import { handleThemeFromObject } from '../../Themes';

import Slice from './Slice';
import { PieBox } from './styles';

class PieChart extends Component {
  constructor() {
    super();
    this.state = {
      target: null,
      externalEvent: undefined,
      highlighted: false,
      current: null,
    };
  }


  componentDidUpdate(oldProps){
    const { targetEvent, target: nextTarget } = this.props;
    const { target } = this.state;
    if(oldProps.target !== nextTarget){
      this.setExternalEvent(nextTarget, target, targetEvent);
    }
  }

  setExternalEvent = (nextTarget, target) => {
    const hoverIn = [
      {
        target: ['data'],
        eventKey: 'all',
        mutation: this.handleOpacityIn,
        callback: () => { this.setState({ externalEvent: undefined }); },
      },
      {
        target: ['data'],
        eventKey: nextTarget,
        mutation: this.targetEventIn,
        callback: () => { this.setState({ externalEvent: undefined }); },
      },
    ];
    const hoverOut = [
      {
        target: ['data'],
        eventKey: 'all',
        mutation: this.handleOpacityOut,
        callback: () => { this.setState({ target: null, externalEvent: undefined }); },
      },
      {
        target: ['data'],
        eventKey: target,
        mutation: this.targetEventOut,
        callback: () => { this.setState({ target: null, externalEvent: undefined }); },
      },
    ];
    if (nextTarget && !target) {
      this.setState({
        target: nextTarget,
        externalEvent: hoverIn,
      });
    } else if (nextTarget && target && nextTarget !== target) {
      this.setState({
        externalEvent: [
          {
            target: ['data'],
            eventKey: target,
            mutation: this.targetEventOut,
            callback: () => {
              this.setState({
                target: nextTarget,
                externalEvent: hoverIn,
              });
            },
          },
        ],
      });
    } else if (!nextTarget && target) {
      this.setState({
        externalEvent: hoverOut,
      });
    }
  }


  getPadding = padding => {
    const paddingVal = typeof padding === 'number' ? padding : 0;
    const paddingObj = typeof padding === 'object' ? padding : {};
    return {
      top: paddingObj.top || paddingVal,
      bottom: paddingObj.bottom || paddingVal,
      left: paddingObj.left || paddingVal,
      right: paddingObj.right || paddingVal,
    };
  };

  getRadius = (width, height, propsPadding) => {
    const padding = this.getPadding(propsPadding);
    return (
      Math.min(
        width - padding.left - padding.right,
        height - padding.top - padding.bottom,
      ) / 2
    );
  };

  getTranslationSize = (dis, startAngle, endAngle) => {
    const angle = (startAngle + endAngle) / 2;
    const translationX = parseInt((Math.sin(angle) * dis).toFixed(5), 10);
    const translationY = parseInt((-Math.cos(angle) * dis).toFixed(5), 10);

    return {
      translationX,
      translationY,
      abs: Math.abs(translationX) === 0 ? dis : Math.abs(translationX),
    };
  };

  targetEventIn = props => {
    const { origin, slice, style, data, index } = props;
    const { translationX, translationY, abs } = this.getTranslationSize(
      10,
      slice.startAngle,
      slice.endAngle,
    );
    this.setState({ highlighted: true, current: index.toString() });
    return {
      abs,
      style: {
        fill: style.fill,
        transform:
          data.filter(item => Boolean(item.y) && Boolean(item.x)).length > 1
            ? `translate(${origin.x + translationX}px, ${origin.y +
                translationY}px)`
            : `translate(${props.origin.x}px, ${props.origin.x}px)`,
      },
    };
  };

  targetEventOut = props => {
    this.setState({ highlighted: false, current: null });
    return {
      abs: 0,
      style: {
        fill: props.style.fill,
        transform: `translate(${props.origin.x}px, ${props.origin.x}px)`,
      },
    };
  };

  handleOpacityIn = props => ({
    style: {
      fill: props.style.fill,
      opacity: 0.5,
      transform: `translate(${props.origin.x}px, ${props.origin.x}px)`,
    },
  });

  handleOpacityOut = props => ({
    style: {
      fill: props.style.fill,
      opacity: 1,
      transform: `translate(${props.origin.x}px, ${props.origin.x}px)`,
    },
  });

  render() {
    const {
      data,
      colorScale,
      height,
      width,
      innerRadius,
      padding,
      labels,
      labelRadius,
      x,
      y,
      onClick,
      onMouseEnter,
      onMouseLeave,
      targetEvent,
      theme,
      ...props
    } = this.props;
    const eventInData = {
      target: 'data',
      mutation: this.targetEventIn,
    };
    const eventOutData = {
      target: 'data',
      mutation: this.targetEventOut,
    };
    const opacityIn = {
      target: 'data',
      eventKey: 'all',
      mutation: this.handleOpacityIn,
    };
    const opacityOut = {
      target: 'data',
      eventKey: 'all',
      mutation: this.handleOpacityOut,
    };
    let eventHandlers;
    switch (targetEvent) {
      case 'click':
        eventHandlers = {
          onMouseEnter: (...args) => {
            onMouseEnter(...args);
          },
          onMouseLeave: (...args) => {
            onMouseLeave(...args);
          },
          onClick: (...args) => {
            onClick(...args);
            if (!this.props.disableInternalEvents) {
              if (!this.state.highlighted && !this.state.current) {
                return [opacityIn, eventInData];
              } else if (
                this.state.highlighted &&
                this.state.current !== args[2]
              ) {
                return [opacityOut, eventOutData, opacityIn, eventInData];
              }
              return [opacityOut, eventOutData];
            }
            return undefined;
          },
        };
        break;
      case 'hover':
      default:
        eventHandlers = {
          onMouseEnter: (...args) => {
            onMouseEnter(...args);
            if (!this.props.disableInternalEvents) {
              return [opacityIn, eventInData];
            }
            return undefined;
          },
          onMouseLeave: (...args) => {
            onMouseLeave(...args);
            if (!this.props.disableInternalEvents) {
              return [opacityOut, eventOutData];
            }
            return undefined;
          },
          onClick: (...args) => {
            onClick(...args);
          },
        };
        break;
    }
    const events = [
      {
        target: 'data',
        eventHandlers,
      },
    ];
    const radius = this.getRadius(width, height, padding);
    const slice = <Slice innerRadius={innerRadius} radius={radius} />;
    return (
      <div>
        <PieBox width={width} height={height}>
          <VictoryPie
            {...props}
            externalEventMutations={this.state.externalEvent}
            standalone={false}
            dataComponent={slice}
            height={height}
            width={width}
            padding={this.getPadding(padding)}
            innerRadius={innerRadius}
            data={data}
            events={events}
            colorScale={handleThemeFromObject(
              theme,
              'pieChart.colorScale',
              ['#18d8ee', '#537e86', '#2de8bf', '#40b7c9'],
              colorScale,
            )}
            labels={labels}
            labelRadius={labelRadius}
            style={{
              data: {
                transform: `translate(${width / 2}px, ${height / 2}px)`,
              },
            }}
            labelComponent={
              <VictoryTooltip
                height={25}
                width={25}
                orientation="top"
                style={{
                  fill: handleThemeFromObject(
                    theme,
                    'pieChart.tooltip',
                    '#009dff',
                  ),
                }}
                flyoutStyle={{
                  fill: handleThemeFromObject(
                    theme,
                    'pieChart.flyout.fill',
                    '#fafafa',
                  ),
                  stroke: handleThemeFromObject(
                    theme,
                    'pieChart.flyout.stroke',
                    '#cecece',
                  ),
                }}
                cornerRadius={0}
              />
            }
            x={x}
            y={y}
          />
        </PieBox>
      </div>
    );
  }
}

// const setExternalEvent = (nextTarget, target) => {
//   const hoverIn = [
//     {
//       target: ['data'],
//       eventKey: 'all',
//       mutation: PieChart.handleOpacityIn,
//       callback: () => {
//         this.setState({ externalEvent: undefined });
//       },
//     },
//     {
//       target: ['data'],
//       eventKey: nextTarget,
//       mutation: PieChart.targetEventIn,
//       callback: () => {
//         this.setState({ externalEvent: undefined });
//       },
//     },
//   ];
//   const hoverOut = [
//     {
//       target: ['data'],
//       eventKey: 'all',
//       mutation: PieChart.handleOpacityOut,
//       callback: () => {
//         this.setState({ target: null, externalEvent: undefined });
//       },
//     },
//     {
//       target: ['data'],
//       eventKey: target,
//       mutation: PieChart.targetEventOut,
//       callback: () => {
//         this.setState({ target: null, externalEvent: undefined });
//       },
//     },
//   ];
//   if (nextTarget && !target) {
//     return {
//       target: nextTarget,
//       externalEvent: hoverIn,
//     };
//   }
//   if (nextTarget && target && nextTarget !== target) {
//     return {
//       externalEvent: [
//         {
//           target: ['data'],
//           eventKey: target,
//           mutation: this.targetEventOut,
//           callback: () => {
//             this.setState({
//               target: nextTarget,
//               externalEvent: hoverIn,
//             });
//           },
//         },
//       ],
//     };
//   }
//   if (!nextTarget && target) {
//     return {
//       externalEvent: hoverOut,
//     };
//   }

//   return {};
// };


PieChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  colorScale: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  height: PropTypes.number,
  width: PropTypes.number,
  innerRadius: PropTypes.number,
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.objectOf(PropTypes.number),
  ]),
  labels: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.func,
  ]),
  labelRadius: PropTypes.number,
  targetEvent: PropTypes.string,
  target: PropTypes.string,
  theme: PropTypes.objectOf(PropTypes.any),
  x: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.func,
  ]),
  y: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.func,
  ]),
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  disableInternalEvents: PropTypes.bool,
};

PieChart.defaultProps = {
  data: [
    { x: 'A', y: 25 },
    { x: 'B', y: 10 },
    { x: 'C', y: 15 },
    { x: 'D', y: 50 },
  ],
  colorScale: undefined,
  height: 250,
  width: 250,
  innerRadius: 0,
  padding: 25,
  labels: [],
  labelRadius: 80,
  target: null,
  targetEvent: 'hover',
  theme: undefined,
  disableInternalEvents: false,
  x: 'x',
  y: 'y',
  onClick: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
};

export default PieChart;
