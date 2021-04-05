import styled from 'styled-components';
import { HelpCircle } from '../Icons';
import { handleThemeFromObject as getTheme } from '../Themes';

export const Box = styled.div`
  height: 48px;
  background-color: #ffffff;
  padding: 16px 24px;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  border-right: 1px solid ${props => getTheme(props.theme, 'colors.gray5', '#ecf0f3')};
  box-sizing: border-box;
  position: relative;
  &:last-child {
    border-right: 0px;
  }
`;

export const Label = styled.div`
  color: ${props => getTheme(props.theme, 'colors.gray3', '#c6d1d8')};
  font-family: ${props => getTheme(props.theme, 'font-family', 'Roboto')};
  font-size: ${props => getTheme(props.theme, 'font-sizes.p', '16px')};
  line-height: 22px;
  margin-right: 8px;
`;

export const Value = styled.div`
  font-family: ${props => getTheme(props.theme, 'font-family', 'Roboto')};
  font-size: ${props => getTheme(props.theme, 'font-sizes.p', '16px')};
  font-weight: ${props => getTheme(props.theme, 'font-weights.medium', 500)};
  line-height: 22px;
  text-align: right;
  color: ${props => getTheme(props.theme, 'colors.petroleum', '#4b6f85')};
  margin-left: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const TooltipContainer = styled.div`
  margin-left: 8px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.div`
  cursor: default;
  display: flex;
`;

export const Icon = styled(HelpCircle)`
  --size: 16px;
  min-width: var(--size);
  min-height: var(--size);
  max-width: var(--size);
  max-height: var(--size);
  fill: ${props => getTheme(props.theme, 'colors.petroleum', '#4b6f85')};
  opacity: 0.6;
`;
