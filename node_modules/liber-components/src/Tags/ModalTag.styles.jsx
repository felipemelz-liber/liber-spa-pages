import styled, { css } from 'styled-components';
import { WhiteTag as Tag } from './Tags';

export const WhiteTag = styled(Tag)`
  cursor: pointer;
  margin: 0;
`;

const addPosition = ({ position }) => {
  return css`
    top: ${position.y}px;
    left: ${position.x}px;
  `;
};

export const FloatingTag = styled(Tag)`
  position: absolute;
  pointer-events: none;
  ${addPosition}
`;

FloatingTag.defaultProps = {
  position: {},
};

export const Container = styled.div`
  padding-right: 12px;
  position: relative;
`;
