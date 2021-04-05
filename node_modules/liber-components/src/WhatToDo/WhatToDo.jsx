import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Question, Title, Separator,
} from './styles';

const WhatToDo = ({ children }) => (
  <Box>
    <Question />
    <Title>O que fazer?</Title>
    <Separator />
    {children}
  </Box>
);

WhatToDo.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

WhatToDo.defaultProps = {
  children: '',
};

export default WhatToDo;
