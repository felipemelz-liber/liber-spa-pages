import styled, { css } from 'styled-components';
import { Card as RawCard, Button } from 'liber-components';

export const Card = styled(RawCard)`
  width: 100%;
  min-height: 100px;
  padding: 32px;
  border: solid 1px #cdd7df;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  transition: 300ms linear all;

  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `}
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

export const ExpanseButton = styled(Button)`
  height: 48px;
  border-radius: 24px;
  color: #6287a7;
  background-color: #fff;
  border: solid 1px #cdd7df;
  width: fit-content;
  margin-top: -40px;
  z-index: 5;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.06px;
  text-align: left;

  :hover {
    background-color: #f2f2f2;
  }

  & > svg {
    width: 20px;
    height: 20px;
    fill: #6287a7;
    margin-bottom: 2px;
    margin-right: 14px;
    transition: 300ms linear all;

    ${({ open }) =>
      open &&
      css`
        transform: rotate(180deg);
      `}
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
