import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import ClickOutside from '../../Util/ClickOutside';
import { CurrentBox, DropDownContent } from './SimpleDropDown.styles';

class SimpleDropDown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      controled: false,
      open: false,
      position: props.position,
    };
    this.content = createRef();
    this.container = createRef();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.open !== null) {
      return { controled: true };
    }
    return state;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.reposition);
    window.addEventListener('resize', this.reposition);
    this.reposition();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.reposition);
    window.removeEventListener('resize', this.reposition);
  }

  reposition = () => {
    const position = this.parsePosition(this.props.position);
    this.setState({ position });
  }


  inViewport = (vw, vh) => (p) => {
    const [x, y] = p;
    return ((y >= 0 && y <= vh) && (x >= 0 && x <= vw));
  }

  translatePosition = position => ({
    'bottom-right': 'bottom-right-down-left',
    'bottom-center-right': 'bottom-center-down-right',
    'bottom-center-left': 'bottom-center-down-left',
    'bottom-left': 'bottom-left-down-right',
    'center-right': 'center-right-down-right',
    'center-from-right': 'center-center-down-right',
    'center-from-left': 'center-center-down-left',
    'center-left': 'center-left-down-left',
    'top-right': 'top-right-down-right',
    'top-center-right': 'top-center-down-right',
    'top-left': 'top-left-down-left',
  }[position] || position)

  breakPos = pos => pos.split('-')

  getNewPosition = ([posy, posx, diry, dirx], {
    p1, p2, p3, p4,
  }, vw, vh) => {
    const inVp = this.inViewport(vw, vh);
    if (!inVp(p1) && !inVp(p2) && inVp(p3) && !inVp(p4)) {
      return ['bottom', 'right', 'down', 'left'].join('-');
    }
    if (!inVp(p1) && !inVp(p2) && inVp(p3) && inVp(p4)) {
      return ['bottom', posx, 'down', dirx].join('-');
    }
    if (!inVp(p1) && !inVp(p2) && !inVp(p3) && inVp(p4)) {
      return ['bottom', 'left', 'down', 'right'].join('-');
    }
    if (inVp(p1) && !inVp(p2) && !inVp(p3) && inVp(p4)) {
      return [posy, 'left', diry, 'left'].join('-');
    }
    if (inVp(p1) && !inVp(p2) && !inVp(p3) && !inVp(p4)) {
      return ['top', 'left', 'up', 'right'].join('-');
    }
    if (inVp(p1) && inVp(p2) && !inVp(p3) && !inVp(p4)) {
      return ['top', posx, 'up', dirx].join('-');
    }
    if (!inVp(p1) && inVp(p2) && !inVp(p3) && !inVp(p4)) {
      return ['top', 'right', 'up', 'left'].join('-');
    }
    if (!inVp(p1) && inVp(p2) && inVp(p3) && !inVp(p4)) {
      return [posy, 'right', diry, 'right'].join('-');
    }
    return [posy, posx, diry, dirx].join('-');
  }

  getPoints = ([posy, posx, diry, dirx], [width, height], container) => {
    const { left: offsetX, top: offsetY } = container.getBoundingClientRect();
    const { offsetWidth, offsetHeight } = container;
    const position = {
      x: {
        left: dirx === 'left' ? offsetX - width : offsetX,
        center: dirx === 'left' ? offsetX + (offsetWidth / 2) - width : offsetX + (offsetWidth / 2),
        right: dirx === 'left' ? offsetX + offsetWidth - width : offsetX + offsetWidth,
      },
      y: {
        top: diry === 'up' ? offsetY - height : offsetY,
        center: diry === 'up' ? offsetY + (offsetHeight / 2) - height : offsetY + (offsetHeight / 2),
        bottom: diry === 'up' ? offsetY + offsetHeight - height : offsetY + offsetHeight,
      },
    };

    const x = position.x[posx];
    const y = position.y[posy];
    return {
      p1: [x, y],
      p2: [x + width, y],
      p3: [x + width, y + height],
      p4: [x, y + height],
    };
  }

  parsePosition = (oldPos) => {
    const { autoPosition, window } = this.props;
    const translatedPos = this.translatePosition(oldPos);
    const position = this.breakPos(translatedPos);
    const { current: container } = this.container;
    const { current: content } = this.content;

    if (autoPosition && content && container) {
      const { offsetWidth: width, offsetHeight: height } = content;
      const { innerWidth: vw, innerHeight: vh } = window;
      const points = this.getPoints(position, [width, height], container);
      return this.getNewPosition(position, points, vw, vh);
    }
    return oldPos;
  }

  toogleDropDown = () => {
    this.setState(state => ({ open: !state.open }));
  }

  close = () => {
    this.setState({ open: false });
  }

  handleCustomClick = callback => (...args) => {
    if (callback) callback(...args);
    this.toogleDropDown(...args);
  }

  render() {
    const { open: stateOpen, controled, position } = this.state;
    const {
      children, label, customButton: custom, open: propsOpen, containerSize, hasOutsideLabel, ...props
    } = this.props;
    const customButton = custom && React.cloneElement(custom, {
      onClick: this.handleCustomClick(custom.props.onClick),
    });
    const open = controled ? propsOpen : stateOpen;
    return (
      <ClickOutside onOutsideClick={open && !controled ? this.toogleDropDown : undefined}>
        <div ref={this.container}>
          {
            customButton
             || <CurrentBox {...props} onClick={!controled ? this.toogleDropDown : undefined}>{label}</CurrentBox>
          }
        </div>
        <DropDownContent
          ref={this.content}
          position={this.breakPos(position)}
          hasLabel={Boolean(label) || hasOutsideLabel}
          open={open}
          containerSize={containerSize}
        >{children}
        </DropDownContent>
      </ClickOutside>
    );
  }
}

SimpleDropDown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
  label: PropTypes.oneOfType([PropTypes.any]),
  customButton: PropTypes.oneOfType([PropTypes.element]),
  open: PropTypes.bool,
  autoPosition: PropTypes.bool,
  window: PropTypes.objectOf(PropTypes.any),
  position: PropTypes.string,
  containerSize: PropTypes.bool,
  hasOutsideLabel: PropTypes.bool,
};

SimpleDropDown.defaultProps = {
  open: null,
  children: '',
  label: '',
  customButton: null,
  position: 'bottom-left-down-right',
  containerSize: false,
  autoPosition: true,
  window,
  hasOutsideLabel: false,
};

export default SimpleDropDown;
