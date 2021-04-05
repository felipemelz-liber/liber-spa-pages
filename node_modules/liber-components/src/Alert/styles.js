import styled, { css } from 'styled-components';
import { MdClose } from '../Icons/MaterialDesign';

const icon = css`
  --size: 24px;
  min-width: var(--size);
  max-width: var(--size);
  min-height: var(--size);
  max-height: var(--size);
`;

export const CloseIcon = styled(MdClose)`
  ${icon}
  &:hover {
    cursor: pointer;
  }
`;

export const AlertBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const AlertContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 24px 0;
`;

export const AlertInfoContent = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.38;
  letter-spacing: normal;
  color: #405f71;
`;
export const AlertAdditionalInfoContent = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.38;
  letter-spacing: 0px;
  color: #587383;
  padding-top: 4px;
`;

export const AlertIcon = styled.div`
  display: flex;
  flex-grow: 0;
  align-items: center;
  padding: 24px;
`;
