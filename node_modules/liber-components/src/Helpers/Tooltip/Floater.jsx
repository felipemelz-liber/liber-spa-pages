import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Float, Arrow } from './styles';

class Floater extends React.Component {
  handleBlur = () => {
    this.setState({ visible: false });
  };

  handleFocus = () => {
    this.setState({ visible: !this.state.visible });
  };

  isContentPositionUnset = () => {
    const { contentPosition } = this.props;
    return contentPosition === 'unset';
  };

  render = () => {
    const {
      children,
      label,
      show,
      position,
      mousePadding,
      mount,
      contentPosition,
    } = this.props;

    return ReactDOM.createPortal(
      <Float
        visible={show}
        position={
          this.isContentPositionUnset() ? `mouse-${mount}` : `content-${mount}`
        }
        x={`${position.x ? position.x + window.scrollX : 0}px`}
        y={`${position.y ? position.y + window.scrollY : 0}px`}
        mousePadding={mousePadding > 13 ? mousePadding : 13}
        hoverable={show}
        contentPosition={contentPosition}
      >
        <Arrow mount={mount} contentPosition={contentPosition} />
        {label.length > 0 ? <h6>{label}</h6> : null}
        <div>{children}</div>
      </Float>,
      document.getElementById('tooltip'),
    );
  };
}

Floater.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]).isRequired,
  label: PropTypes.string,
  show: PropTypes.bool,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  mousePadding: PropTypes.number,
  mount: PropTypes.oneOf(['top', 'right', 'left', 'bottom']),
  contentPosition: PropTypes.oneOf(['start', 'middle', 'end', 'unset']),
};

Floater.defaultProps = {
  label: '',
  show: true,
  position: {},
  mousePadding: 40,
  mount: 'right',
  contentPosition: 'unset',
};

export default Floater;
