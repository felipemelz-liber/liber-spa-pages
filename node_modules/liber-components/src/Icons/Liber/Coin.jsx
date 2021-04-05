import React from 'react';
import PropTypes from 'prop-types';

const Coin = ({ className }) => (
  <svg className={className} width="52" height="52" stroke="#000" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
    <g id="Agrupar_62" data-name="Agrupar 62" transform="translate(-2.959 -138.936)">
    <g id="Agrupar_61" data-name="Agrupar 61" transform="translate(-0.522 131.673)">
      <g id="Agrupar_48" data-name="Agrupar 48" transform="translate(33.482 31.263)">
        <g id="Agrupar_47" data-name="Agrupar 47">
          <path id="Caminho_23" data-name="Caminho 23" d="M305.245,265.29a2.424,2.424,0,1,1,2.771-2.4,1.26,1.26,0,1,0,2.519,0,5.012,5.012,0,0,0-4.031-4.776v-.655a1.26,1.26,0,0,0-2.519,0v.655a5.012,5.012,0,0,0-4.031,4.776,5.12,5.12,0,0,0,5.29,4.918,2.424,2.424,0,1,1-2.771,2.4,1.26,1.26,0,1,0-2.519,0,5.012,5.012,0,0,0,4.031,4.776v.544a1.26,1.26,0,0,0,2.519,0v-.544a5.012,5.012,0,0,0,4.031-4.776A5.12,5.12,0,0,0,305.245,265.29Z" transform="translate(-308.954 -264.201)"  strokeWidth="0.5"/>
        </g>
      </g>
    </g>
    <g id="Elipse_4" data-name="Elipse 4" transform="translate(8.959 144.936)" fill="none"  strokeLinecap="round" strokeLinejoin="bevel" strokeWidth="3" strokeDasharray="9">
      <circle cx="20" cy="20" r="20" stroke="none"/>
      <circle cx="20" cy="20" r="18.5" fill="none"/>
    </g>
    <g id="Elipse_5" data-name="Elipse 5" transform="translate(2.959 138.936)" fill="none" strokeWidth="3">
      <circle cx="26" cy="26" r="26" stroke="none"/>
      <circle cx="26" cy="26" r="24.5" fill="none"/>
    </g>
  </g>
  </svg>
);

Coin.displayName = 'Coin';
Coin.propTypes = {
  className: PropTypes.string,
};

Coin.defaultProps = {
  className: '',
};

export default Coin;
