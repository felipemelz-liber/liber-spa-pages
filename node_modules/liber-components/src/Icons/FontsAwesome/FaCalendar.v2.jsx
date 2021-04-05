import React from 'react';
import PropTypes from 'prop-types';

const FaCalendarV2 = ({ className }) => (
  <svg className={className} width="52" height="52" viewBox="0 0 16.294 18.621" xmlns="http://www.w3.org/2000/svg">
    <path d="M.436,6.983H15.857a.438.438,0,0,1,.436.436v9.456a1.746,1.746,0,0,1-1.746,1.746H1.746A1.746,1.746,0,0,1,0,16.876V7.419A.438.438,0,0,1,.436,6.983Zm15.857-1.6V4.073a1.746,1.746,0,0,0-1.746-1.746H12.8V.436A.438.438,0,0,0,12.366,0H10.911a.438.438,0,0,0-.436.436V2.328H5.819V.436A.438.438,0,0,0,5.383,0H3.928a.438.438,0,0,0-.436.436V2.328H1.746A1.746,1.746,0,0,0,0,4.073V5.383a.438.438,0,0,0,.436.436H15.857A.438.438,0,0,0,16.294,5.383Z" transform="translate(0)" />
  </svg>
);

FaCalendarV2.displayName = 'FaCalendarV2';
FaCalendarV2.propTypes = {
  className: PropTypes.string,
};

FaCalendarV2.defaultProps = {
  className: '',
};

export default FaCalendarV2;
