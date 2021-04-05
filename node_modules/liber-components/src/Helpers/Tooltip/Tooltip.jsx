import React from 'react';
import Fixed from './Fixed';
import Floater from './Floater';

const Tooltip = ({ type, ...props }) => {
  switch (type) {
    case 'floater':
      return <Floater {...props} />;
    case 'fixed':
    default:
      return <Fixed {...props} />;
  }
};

export default Tooltip;
