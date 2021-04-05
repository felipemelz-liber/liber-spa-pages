import styled, { css } from 'styled-components';

export const Circle = styled.div`
  width: 24px;
  height: 24px;
  background-color: #cdd7df;
  border-radius: 20px;
  transition-duration: 0.3s;
`;

export const Container = styled.div`
  width: 48px;
  height: 24px;
  border-radius: 20px;
  border: solid 1px #cdd7df;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  ${({ checked }) =>
    checked
      ? css`
          & > ${Circle} {
            transform: translate(12px);
            background-color: #009dff;
          }
        `
      : css`
          & > ${Circle} {
            transform: translate(-12px);
          }
        `}
`;
