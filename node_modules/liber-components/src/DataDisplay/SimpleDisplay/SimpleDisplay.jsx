import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '../../Helpers';
import { getScreenSize } from '../../Util';
import { Container, Label, Value } from './styles';


class SimpleDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenSize: getScreenSize(window),
      showTooltip: false,
      position: {
        x: null,
        y: null,
      },
      tooltip: {
        label: {
          text: null,
          color: null,
        },
        content: null,
      },
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.setScreenSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setScreenSize);
  }

  setScreenSize = () => {
    this.setState({ screenSize: getScreenSize(window) });
  }

  getLabel = (label) => {
    if (typeof label === 'string' || label instanceof String) {
      return {
        text: label,
        color: null,
      };
    }
    return label;
  }

  handleMouseMove = (event) => {
    const { onMouseMove } = this.props;
    const { tooltipContent, tooltipLabel } = this.props;
    if (tooltipContent) {
      this.setState({
        showTooltip: true,
        position: { x: event.clientX, y: event.clientY },
        tooltip: {
          content: tooltipContent,
          label: tooltipLabel,
        },
      }, onMouseMove);
    } else {
      onMouseMove();
    }
  }

  handleMouseLeave = () => {
    const { onMouseLeave } = this.props;
    this.setState({ showTooltip: false, position: {} }, onMouseLeave);
  }

  render() {
    const {
      tooltipContent, children, onMouseLeave, onMouseMove, prefix, ...props
    } = this.props;
    const label = this.getLabel(this.props.label);
    const {
      showTooltip,
      position,
      tooltip,
      screenSize,
    } = this.state;

    const haveTooltip = Boolean(tooltipContent) && (screenSize === 'large' || screenSize === 'extraLarge');
    return (
      <Fragment>
        {
          showTooltip
            ? (
              <Tooltip
                type="floater"
                show={showTooltip}
                position={position}
                label={tooltip.label}
              >
                {tooltip.content}
              </Tooltip>
            )
            : null
        }
        <Container
          {...props}
          onMouseMove={haveTooltip || onMouseMove ? this.handleMouseMove : null}
          onMouseLeave={haveTooltip || onMouseLeave ? this.handleMouseLeave : null}
          hasClick={Boolean(this.props.onClick)}
        >
          <Value prefix={prefix}>{children}</Value>
          <Label color={label.color}>{label.text}</Label>
        </Container>
      </Fragment>
    );
  }
}

SimpleDisplay.propTypes = {
  divider: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      text: PropTypes.string,
      color: PropTypes.string,
    }),
  ]),
  prefix: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.any]),
  tooltipContent: PropTypes.oneOfType([PropTypes.any]),
  tooltipLabel: PropTypes.string,
  onMouseLeave: PropTypes.func,
  onMouseMove: PropTypes.func,
  onClick: PropTypes.func,
  highlight: PropTypes.bool,
};

SimpleDisplay.defaultProps = {
  divider: true,
  label: '',
  children: '',
  prefix: null,
  tooltipContent: null,
  tooltipLabel: '',
  highlight: false,
  onMouseMove: null,
  onMouseLeave: null,
  onClick: null,
};

export default SimpleDisplay;
