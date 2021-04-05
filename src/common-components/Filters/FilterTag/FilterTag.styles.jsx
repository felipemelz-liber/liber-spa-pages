import styled, { css } from 'styled-components';
import { ModalTag } from 'liber-components';

const isGray = ({ gray }) => {
  if (gray)
    return css`
      background-color: #f4f5f7;
      border-color: #f4f5f7;
    `;
  return null;
};

export const FilterTag = styled(ModalTag)`
  font-size: 16px;
  min-height: 36px;
  border-radius: 4px;
  font-weight: 400;
  ${isGray}
`;

export const SelectedLabelContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const SelectedSwitch = styled.div`
  height: 52px;
  width: 100%;
  padding-top: 6px;
  display: flex;
  flex-direction: column;
  transform: ${props => (props.switch ? 'translateY(-26px)' : 'translateY(0px)')};
  transition: transform 250ms ease-in-out;
`;

export const SelectedLabelOption = styled.span`
  width: 100%;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
