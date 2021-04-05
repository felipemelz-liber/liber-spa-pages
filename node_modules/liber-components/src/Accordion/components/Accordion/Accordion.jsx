import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DetectChange } from '../../../Util';
import { AccordionBox, ShowBox, AccordionAction } from './styles';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
    };
  }

  componentDidMount() {
    if (this.box) {
      const { height } = this.box.getBoundingClientRect();
      this.boxSize = `${height}px`;
    } else {
      this.boxSize = '9999px';
    }
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (newProps.open !== null && newProps.open !== undefined) {
      if (oldProps.open !== newProps.open) {
        if (newProps.open !== this.state.open) {
          this.setState(prevState => ({ open: !prevState.open })); // eslint-disable-line
        }
      }
    }
  }

  handleChange = () => {
    const { fixedSize, maxSize } = this.props;
    if (this.box && !fixedSize) {
      const { height } = this.box.getBoundingClientRect();
      this.boxSize = `${height}px`;
    } else {
      this.boxSize = `${maxSize}px`;
    }
    this.forceUpdate();
  };

  render() {
    const { className, children, label, headerColor, maxSize } = this.props;
    const { open } = this.state;
    return (
      <AccordionBox className={className} open={open}>
        <AccordionAction
          color={headerColor}
          open={open}
          onClick={() => {
            this.setState({ open: !open });
          }}
        >
          {label}
        </AccordionAction>
        <ShowBox open={open} size={this.boxSize || `${maxSize}px`}>
          <div
            ref={el => {
              this.box = el;
            }}
          >
            <DetectChange onChange={this.handleChange}>{children}</DetectChange>
          </div>
        </ShowBox>
      </AccordionBox>
    );
  }
}
Accordion.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  headerColor: PropTypes.string,
  open: PropTypes.bool,
  fixedSize: PropTypes.bool,
  maxSize: PropTypes.number,
};

Accordion.defaultProps = {
  className: '',
  children: '',
  label: '',
  open: false,
  headerColor: '#fff',
  fixedSize: false,
  maxSize: 9999,
};

export default Accordion;
