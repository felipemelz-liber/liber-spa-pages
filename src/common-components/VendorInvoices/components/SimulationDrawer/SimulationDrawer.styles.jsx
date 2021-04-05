import styled, { css } from 'styled-components';
import { Button } from 'liber-components';

export const Title = styled.span`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #4b6f85;
`;

export const SelectedNumber = styled(Title)`
  font-weight: normal;
`;

export const ConfirmationButton = styled(Button)`
  background-color: #002874;
  --button-ripple-color: #002d80;
  --button-text-color: #fafdff;
  min-width: 235px;
  &:hover {
    background-color: #001f59;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  ${({ hasPaddingTop }) =>
    hasPaddingTop
      ? null
      : css`
          padding-top: 0px;
        `}
  align-items: center;
  & > div {
    margin-top: 0px;
  }
`;
