import styled from 'styled-components';

import { Card as RawCard, media } from 'liber-components';
import Icon from '@mdi/react';
import { mdiEye } from '@mdi/js';

export const EyeIcon = styled(Icon).attrs(() => ({
  size: '20px',
  color: '#4b6f85',
  path: mdiEye,
}))`
  cursor: pointer;
`;

export const SubTitle = styled.span`
  font-family: Roboto;
  font-size: 21px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.08px;
  text-align: left;
  color: #4b6f85;
  margin-bottom: 24px;
`;

export const Footer = styled.div`
  border-top: solid 1px #cdd7df;
  display: flex;
  justify-content: flex-end;
  padding-top: 8px;
  width: 100%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 56px;
`;

export const Item = styled.div`
  display: flex;
  flex-basis: 40%;
  ${media.large`
    flex-basis: 33%;
  `}
  box-sizing: border-box;
`;

export const AdvancesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: -8px;
  box-sizing: content-box;
  width: calc(100% - 16px);
  & > ${Item} {
    padding: 8px;
  }
`;

export const Card = styled(RawCard).attrs(() => ({ version: 2 }))`
  padding: 20px 16px;
  padding-bottom: 8px;
  width: 100%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px #cdd7df;
  align-items: flex-start;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
`;

export const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FaceLabel = styled.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.45;
  letter-spacing: 0.05px;
  text-align: left;
  color: #405f71;
  margin-top: 16px;
`;

export const NetValue = styled.span`
  font-family: Roboto;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: 0.1px;
  text-align: left;
  color: #6287a7;
`;
