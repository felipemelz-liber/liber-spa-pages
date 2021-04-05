import styled from 'styled-components';

const colorReference = {
  positive: '#008a5e',
  negative: '#ff5b56',
  neutral: '#6287a7',
  primary: '#009dff',
};

const getColor = ({ type }) => colorReference[type] || colorReference.neutral;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 14px;
  background-color: ${getColor};
`;

export const Text = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.06px;
  text-align: left;
  margin-left: 8px;
  color: ${getColor};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
