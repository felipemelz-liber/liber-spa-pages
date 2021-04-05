import styled from 'styled-components';
import { Button as ButtonBase, MdClose } from 'liber-components';

export const DialogContent = styled.div`
  padding: 24px;
  max-width: ${({ maxWidth }) => maxWidth || '522'}px;
`;

export const Button = styled(ButtonBase)`
  margin-right: 12px;
`;

export const Title = styled.span`
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

export const DialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px;
  border-bottom: 1px solid #ecf0f3;
`;

export const DialogActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px 24px;
  border-top: 1px solid #ecf0f3;
`;

export const IconButton = styled(ButtonBase)`
  padding: 8px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  min-width: 36px;
`;

export const CloseIcon = styled(MdClose)`
  fill: #4b6f85;
  width: 20px;
  height: 20px;
`;
