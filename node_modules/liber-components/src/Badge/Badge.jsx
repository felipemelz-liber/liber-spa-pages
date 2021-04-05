import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BadgeCircle, Container } from './Badge.styles';

const RADIUS = {
  medium: 10,
  large: 12,
};

const PADDING = {
  medium: 4,
  large: 6,
};

const Badge = ({ children, content, position, size, color, textColor, childShape }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(Boolean(ref.current));
  }, [ref]);

  return (
    <Container>
      {children}
      <BadgeCircle
        ref={ref}
        radius={RADIUS[size]}
        padding={PADDING[size]}
        position={position}
        color={color}
        textColor={textColor}
        visible={visible}
        childShape={childShape}
      >
        {content}
      </BadgeCircle>
    </Container>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  textColor: PropTypes.string,
  size: PropTypes.oneOf(['medium', 'large']),
  position: PropTypes.shape({
    vertical: PropTypes.oneOf(['top', 'bottom']),
    horizontal: PropTypes.oneOf(['left', 'right']),
  }),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  childShape: PropTypes.oneOf(['rectangle', 'circle']),
};

Badge.defaultProps = {
  position: {
    vertical: 'bottom',
    horizontal: 'right',
  },
  size: 'medium',
  color: null,
  textColor: null,
  childShape: 'rectangle',
};

export default Badge;
