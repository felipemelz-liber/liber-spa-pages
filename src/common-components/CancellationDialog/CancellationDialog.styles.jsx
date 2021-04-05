import styled from 'styled-components';

export const DialogText = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.01px;
  text-align: left;
  color: #4b6f85;
`;

export const DialogUpperText = styled(DialogText)`
  margin-bottom: 24px;
`;

export const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
`;
