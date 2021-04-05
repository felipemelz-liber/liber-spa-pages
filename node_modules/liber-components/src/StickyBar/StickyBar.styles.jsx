import styled, { css } from 'styled-components';

const sticked = css`
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.12);
`;

const unsticked = css`
  box-shadow: unset;
`;

export const Bar = styled.div`
  position: sticky;
  top: ${({ top }) => top}px;
  ${props => (props.sticked ? sticked : unsticked)}
`;
