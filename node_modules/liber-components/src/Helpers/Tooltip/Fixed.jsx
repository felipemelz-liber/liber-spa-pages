import React from 'react';
import PropTypes from 'prop-types';
import { ClickOutside } from '../../Util';
import { Container, Icon, Float } from './styles';

class Fixed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleClick = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleBlur = () => {
    this.setState({ visible: false });
  };

  handleFocus = () => {
    this.setState({ visible: true });
  };

  render = () => {
    const {
      children,
      hoverable,
      label,
      position,
      contentPosition,
      ...props
    } = this.props;
    const { visible } = this.state;
    return (
      <ClickOutside onOutsideClick={this.handleBlur}>
        <Container
          onClick={hoverable ? null : this.handleClick}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onMouseOver={hoverable ? this.handleFocus : null}
          onMouseLeave={hoverable ? this.handleBlur : null}
          {...props}
        >
          <Icon />
          <Float
            visible={visible}
            position={position}
            hoverable={hoverable}
            contentPosition={contentPosition}
          >
            <h6>{label}</h6>
            <div>{children}</div>
          </Float>
        </Container>
      </ClickOutside>
    );
  };
}

Fixed.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  hoverable: PropTypes.bool,
  label: PropTypes.string,
  position: PropTypes.string,
  contentPosition: PropTypes.oneOf(['start', 'middle', 'end', 'unset']),
};

Fixed.defaultProps = {
  hoverable: false,
  label: '',
  position: 'top-center',
  contentPosition: 'unset',
};

export default Fixed;
