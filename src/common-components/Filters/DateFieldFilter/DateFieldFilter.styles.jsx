import styled from 'styled-components';

export const Box = styled.div`
  & > div > div {
    border-right: 0px;
  }
`;

export const Text = styled.p`
  font-family: Roboto;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.1px;
  text-align: left;
  color: #405f71;
  margin: 0;
  padding: 18px 32px 0px 32px;
`;
