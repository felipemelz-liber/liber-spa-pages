import React from 'react';
import { Waypoint } from 'react-waypoint';
import { Bar } from './StickyBar.styles';

const handleStick = stick => () => {
  stick(true);
};
const handleUnstick = stick => () => {
  stick(false);
};

const StickyBar = props => {
  const bar = React.useRef(null);
  const [sticked, setSticked] = React.useState(false);

  return (
    <>
      <Waypoint onEnter={handleUnstick(setSticked)} onLeave={handleStick(setSticked)} />
      <Bar ref={bar} sticked={sticked} {...props} />
    </>
  );
};

export default StickyBar;
