import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Cls1 = styled.path`
  fill: url(#linear-gradient);
`;

const MobileBackground = ({ className }) => (
  <svg
    className={className}
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 375 668"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="0.5"
        x2="0.5"
        y2="1"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0.12" stopColor="#fff" />
        <stop offset="0.16" stopColor="#f6fbff" />
        <stop offset="0.23" stopColor="#dcf2ff" />
        <stop offset="0.32" stopColor="#b3e2ff" />
        <stop offset="0.42" stopColor="#7accff" />
        <stop offset="0.54" stopColor="#32b0ff" />
        <stop offset="0.61" stopColor="#009dff" />
      </linearGradient>
    </defs>
    <Cls1
      id="Moldura"
      d="M0,0V668H375V0ZM308.5,625.25H66.5a24,24,0,0,1-24-24V66.75a24,24,0,0,1,24-24h242a24,24,0,0,1,24,24v534.5A24,
        24,0,0,1,308.5,625.25Z"
    />
  </svg>
);

MobileBackground.propTypes = {
  className: PropTypes.string,
};

MobileBackground.defaultProps = {
  className: '',
};

export default MobileBackground;
