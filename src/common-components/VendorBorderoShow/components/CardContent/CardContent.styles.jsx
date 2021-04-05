import styled, { css } from 'styled-components';
import { Button } from 'liber-components';
import Icon from '@mdi/react';

const colorReference = {
  positive: '#008a5e',
  negative: '#ff5b56',
  neutral: '#6287a7',
};

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `}

  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}
`;

export const Title = styled.div`
  font-family: Roboto;
  font-size: 21px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.08px;
  text-align: left;
  color: #4b6f85;
`;

export const FieldLabel = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.06px;
  text-align: left;
  color: #405f71;
`;

export const FieldValue = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.84;
  letter-spacing: 0.06px;
  text-align: left;
  color: #6287a7;
`;

export const FlatButton = styled(Button).attrs(() => ({ version: 2 }))`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: 0.02px;
  text-align: right;
  color: ${({ blue }) => (blue ? '#009dff' : '#798e9b')};

  & > svg {
    fill: ${({ blue }) => (blue ? '#009dff' : '#798e9b')};
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${marginRight}px;
    `}

  ${({ paddingRight }) =>
    paddingRight &&
    css`
      padding-right: ${paddingRight}px;
    `}
`;

export const FieldContainer = styled.div`
  height: 46px;

  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${marginRight}px;
    `}
`;

export const StatusIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  margin-bottom: 2px;
  fill: ${({ status = 'neutral' }) => colorReference[status]};
`;

export const Caption = styled.div`
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.05px;
  color: #6287a7;
  margin: 0px 16px;
`;
