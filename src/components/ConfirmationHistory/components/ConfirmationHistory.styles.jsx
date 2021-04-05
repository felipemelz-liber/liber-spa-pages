import React, { forwardRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { LoadingBunny, MdHelpCircle } from 'liber-components';

export const Global = createGlobalStyle`
  label{
    display: unset;
    margin-bottom: unset;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 32px;
  margin-bottom: 36px;
`;

export const ScreenTitle = styled.span`
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: 0.13px;
  text-align: left;
  color: #009dff;
`;

export const ConfirmationHistoryContainer = styled.div`
  width: 100%;
`;

export const LoadingBlock = styled.div`
  flex-grow: 1;
  display: flex;
  opacity: ${props => (props.loading ? props.opacity || '0.3' : '1')};
  pointer-events: ${props => (props.loading ? 'none' : null)};
  transition: opacity 150ms ease-in-out;
  display: inherit;
  flex-direction: inherit;
  position: inherit;
  min-height: ${props => (props.loading ? '250px' : null)};
`;

export const Loading = styled(LoadingBunny)`
  width: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

const MdHelpCircleIcon = styled(MdHelpCircle)`
  width: 20px;
  height: 20px;
  fill: #91a8b5;
  margin-left: 4px;
`;

const MdCHelpCircleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MdHelpCircleStyled = forwardRef((props, ref) => (
  <MdCHelpCircleBox ref={ref}>
    <MdHelpCircleIcon {...props} />
  </MdCHelpCircleBox>
));

MdHelpCircleStyled.displayName = 'MdHelpCircleStyled';
