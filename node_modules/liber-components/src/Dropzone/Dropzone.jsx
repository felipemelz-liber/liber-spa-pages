import React from 'react';
import PropTypes from 'prop-types';
import DropzoneRaw from 'react-dropzone';
import styled, { css } from 'styled-components';
import { handleThemeFromObject } from '../Themes';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
  border: dashed 2px ${props => handleThemeFromObject(props.theme, 'dropzone.color', '#a4a4a4', props.color)};
  color: ${props => handleThemeFromObject(props.theme, 'dropzone.color', '#a4a4a4', props.color)};
  fill: ${props => handleThemeFromObject(props.theme, 'dropzone.color', '#a4a4a4', props.color)};
  font-family: Roboto;
  font-weight: 500;
  transition: all 0.2s ease;
  ${props => (props.isDragActive) && css`
    transform: scale(1.1);
    background: ${handleThemeFromObject(props.theme, 'dropzone.color', '#a4a4a4', props.color)}22;
  `}
`;

const Dropzone = React.forwardRef(({ children, color, ...props }, ref) => (
  <DropzoneRaw style={{}} ref={ref} {...props}>
    {({ isDragActive, isDragAccept, isDragReject }) => (
      <Container
        isDragActive={isDragActive}
        isDragAccept={isDragAccept}
        isDragReject={isDragReject}
        color={color}
      >
        {children}
      </Container>
    )}
  </DropzoneRaw>
));

Dropzone.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
  color: PropTypes.string,
};

Dropzone.defaultProps = {
  children: null,
  color: null,
};

export default Dropzone;
