import React from 'react';
import CenterTabs from './CenterTabs';
import LeftTabs from './LeftTabs';

const Tabs = ({ type = 'center', ...props }) =>
  ({
    center: <CenterTabs {...props} />,
    left: <LeftTabs {...props} />,
  }[type]);

export default Tabs;
