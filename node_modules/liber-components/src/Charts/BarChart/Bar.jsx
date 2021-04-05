
import React, { Component, Fragment } from 'react';
import { Bar as VictoryBar } from 'victory';
import moment from 'moment';
import { Tooltip } from '../../Helpers';


class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false,
      position: {
        x: null,
        y: null,
      },
      tooltip: {
        mount: null,
        label: null,
        content: null,
      },
    };
  }

  getPosition = (mount, pos) => {
    const size = 360;
    const viewport = window.innerWidth;
    if (pos <= size) {
      return 'right';
    }
    if (pos >= viewport - size) {
      return 'left';
    }
    return mount;
  }

  handleMouseMove = (event, datum) => {
    const { tooltipContent, mount, dynamicMount } = datum;
    const date = datum.x;
    if (event) {
      if (tooltipContent) {
        this.setState({
          showTooltip: true,
          position: { x: event.clientX, y: event.clientY },
          tooltip: {
            content: tooltipContent,
            mount: dynamicMount ? this.getPosition(mount, event.clientX) : mount,
            label: moment.isMoment(date) ? date.locale('pt-br').format('DD [de] MMMM') : date,
          },
        });
      }
    }
  }

  handleMouseLeave = () => {
    this.setState({
      showTooltip: false,
      position: {
        x: null,
        y: null,
      },
      tooltip: {
        label: null,
        content: null,
        mount: null,
      },
    });
  }

  addColors = (style, colors, props) => {
    const styleClone = Object.assign({}, style);
    if (moment.isMoment(props.datum.x)) {
      if (props.datum.x.isBefore(moment().startOf('day'))) {
        styleClone.fill = colors.pastColor;
      } else {
        styleClone.fill = colors.futureColor;
      }
      return styleClone;
    }
    return style;
  }

  cloneEvents = (events, props) => {
    const eventClone = Object.assign({}, events);
    eventClone.onMouseMove = (event) => {
      this.handleMouseMove(event, props.datum);

      if (events.onMouseMove) { events.onMouseMove(event); }
    };
    eventClone.onMouseLeave = (event) => {
      this.handleMouseLeave(props.datum);
      if (events.onMouseLeave) { events.onMouseLeave(event); }
    };
    return eventClone;
  }

  render() {
    const {
      showTooltip,
      position,
      tooltip,
    } = this.state;
    const {
      /* eslint-disable-next-line react/prop-types */
      events, style, colors, hoverEvents, ...props
    } = this.props;
    const eventClone = this.cloneEvents(events, props);
    const newStyle = this.addColors(style, colors, props);
    return (
      <Fragment>
        {
          showTooltip && hoverEvents
            ? (
              <Tooltip
                type="floater"
                show={showTooltip}
                position={position}
                label={tooltip.label}
                mount={tooltip.mount}
              >
                {tooltip.content}
              </Tooltip>
            )
            : null
        }
        <VictoryBar {...props} events={eventClone} style={newStyle} />;
      </Fragment>
    );
  }
}

export default Bar;
