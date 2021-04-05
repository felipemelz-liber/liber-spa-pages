import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '../../Helpers';
import { getScreenSize } from '../../Util';
import {
  Container, Title, Value, Bar, BarSectors, BarSector, BarShadows, BarShadow,
} from './styles';


class BarDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenSize: getScreenSize(window),
      position: {
        x: null,
        y: null,
      },
      showTooltip: false,
      tooltip: {
        label: null,
        content: null,
      },
    };
  }

  componentDidMount() {
    if (this.bar && this.value) {
      window.addEventListener('resize', this.setScreenSize);
      this.setBarSize();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children !== this.props.children) {
      setTimeout(this.setBarSize, 0);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setScreenSize);
  }

  setBarSize = () => {
    const valueSize = this.value.getWidth(this.value.value, true);
    this.bar.style.width = `${parseInt(valueSize, 10) + 20}px`;
  }

  setScreenSize = () => {
    this.setState({ screenSize: getScreenSize(window) });
  }

  handleMouseMove = (event, sector) => {
    this.setState({
      showTooltip: true,
      position: { x: event.clientX, y: event.clientY },
      tooltip: { label: sector.tooltipLabel, content: sector.tooltipContent },
    });
  }

  handleMouseLeave = () => {
    this.setState({ showTooltip: false, position: {} });
  }

  eventHandler = (events, sector, index) => {
    const { screenSize } = this.state;
    const obj = {};
    if (Boolean(sector.tooltipContent) && (screenSize === 'large' || screenSize === 'extraLarge')) {
      obj.onMouseMove = (e) => { this.handleMouseMove(e, sector, index); };
      obj.onMouseLeave = (e) => { this.handleMouseLeave(e, sector, index); };
    }

    if (events) {
      Object.keys(events).forEach((key) => {
        if (obj[key] !== undefined) {
          const handler = obj[key];
          obj[key] = (e) => {
            handler(e);
            events[key](e, sector, index);
          };
        } else {
          obj[key] = (e) => {
            events[key](e, sector, index);
          };
        }
      });
    }
    return obj;
  };

  render() {
    const {
      children, prefix, label, sectors, highlight,
    } = this.props;
    const { screenSize } = this.state;
    const largeScreen = (screenSize === 'large' || screenSize === 'extraLarge');
    const { mappedSectors, mappedShadows } = sectors.reduce((prev, next, index) => {
      const sector = (
        <BarSector
          key={`${next.color}_${next.percentage}_sector`}
          color={next.color}
          percentage={next.percentage}
          highlight={highlight === index && largeScreen}

          {...this.eventHandler(next.events, next, index)}
        />
      );
      const shadow = (
        <BarShadow key={`${next.color}_${next.percentage}_shadow`} color={next.color} percentage={next.percentage} />
      );
      prev.mappedSectors.push(sector);
      prev.mappedShadows.push(shadow);
      return prev;
    }, { mappedSectors: [], mappedShadows: [] });
    return (
      <Fragment>
        {
          this.state.showTooltip
            ? (
              <Tooltip
                type="floater"
                show={this.state.showTooltip}
                position={this.state.position}
                label={this.state.tooltip.label}
              >
                {this.state.tooltip.content}
              </Tooltip>
            )
            : null
        }

        <Container>
          <Title>{label}</Title>

          <Value ref={(el) => { this.value = el; }} prefix={prefix}>
            {children}
          </Value>
          <Title>{label}</Title>
          <Bar ref={(el) => { this.bar = el; }}>
            <BarShadows>
              {mappedShadows}
            </BarShadows>
            <BarSectors>
              {mappedSectors}
            </BarSectors>
          </Bar>
        </Container>
      </Fragment>
    );
  }
}

BarDisplay.propTypes = {
  label: PropTypes.string,
  children: PropTypes.string,
  prefix: PropTypes.string,
  highlight: PropTypes.number,
  sectors: PropTypes.arrayOf(PropTypes.shape({
    percentage: PropTypes.string,
    color: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    events: PropTypes.objectOf(PropTypes.func),
  })),
};

BarDisplay.defaultProps = {
  label: '',
  children: '',
  prefix: '',
  highlight: -1,
  sectors: [],
};

export default BarDisplay;
