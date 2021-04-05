import styled from 'styled-components';
import { FlatButton } from 'liber-components';

const TEXT_COLOR = '#6287a7';

export const Container = styled.div`
  padding: 24px 24px 12px 24px;
  width: 480px;

  * {
    font-family: Roboto;
  }
`;

export const Header = styled.div`
  font-size: 21px;
  font-weight: bold;
  line-height: 1.4;
  letter-spacing: 0.08px;
  color: ${TEXT_COLOR};
  margin-bottom: 24px;
`;

export const Content = styled.div`
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.01px;
  margin-bottom: 24px;
  color: ${TEXT_COLOR};
  margin-bottom: 24px;
`;

export const ActionsRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled(FlatButton).attrs(() => ({ size: 'large' }))``;
