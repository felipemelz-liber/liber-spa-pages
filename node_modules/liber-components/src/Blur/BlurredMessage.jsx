import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BlurredBackground, Overlay } from './BlurredMessage.styles';
import { getOverlayPosition } from './PositionHelper';

const BlurredMessage = ({ overlay, blur, children }) => {
  const backgroundRef = useRef(null);
  const overlayRef = useRef(null);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const newCoordinates = getOverlayPosition(backgroundRef, overlayRef);
    if (newCoordinates !== coordinates) {
      setCoordinates(newCoordinates);
    }
  }, [backgroundRef, overlayRef]);

  const hasBlur = blur > 0;

  return (
    <>
      <BlurredBackground ref={backgroundRef} blur={blur}>
        {children}
      </BlurredBackground>
      <Overlay ref={overlayRef} {...coordinates}>
        {hasBlur ? overlay : null}
      </Overlay>
    </>
  );
};

BlurredMessage.propTypes = {
  blur: PropTypes.number,
  overlay: PropTypes.node,
  children: PropTypes.node,
};

BlurredMessage.defaultProps = {
  blur: 8,
  overlay: null,
  children: null,
};

export default BlurredMessage;
