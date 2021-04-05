import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Cls1 = styled.rect`
  fill: #f8feff;
`;

const Cls2 = styled.path`
  fill: #eefaff;
`;

const Cls3 = styled.path`
  fill: #fff;
`;

const Background = ({ className }) => (
  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 768" className={className}>
    <g id="Fundo_500" data-name="Fundo 500" transform="translate(0 -815)">
      <Cls1 id="Tela" width="1366" height="768" transform="translate(0 815)" />
      <g id="Group_21" data-name="Group 21">
        <Cls2
          id="Path_126"
          data-name="Path 126"
          d="M1252.518,1201.6,1029.315,815H114.627L0,1013.54v376.116L111.627,1583h920.688Z"
        />
      </g>
      <Cls3
        id="Path_127"
        data-name="Path 127"
        d="M970.227,1583,1190.3,1201.831,966.958,815H158.41L0,1089.374v224.916L155.14,1583Z"
      />
    </g>
  </svg>

);

Background.propTypes = {
  className: PropTypes.string,
};

Background.defaultProps = {
  className: '',
};

export default Background;
