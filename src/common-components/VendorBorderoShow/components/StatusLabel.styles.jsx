import styled from 'styled-components';

const colorReference = {
  positive: '#008a5e',
  negative: '#ff5b56',
  neutral: '#6287a7',
  primary: '#009dff',
};

const getColor = ({ status }) => colorReference[status] || colorReference.neutral;

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-height: 28px;
  border-radius: 18px;
  background-color: ${({ color, status }) => color || getColor(status)};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.06px;
  text-align: left;
  color: #fff;
  padding: 8px;
  padding-right: 16px;
`;

export const WhiteCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: #fff;
  margin-right: 8px;
`;
