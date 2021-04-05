import styled, { css } from 'styled-components';
import { handleThemeFromObject as getTheme } from '../../../Themes';
import { MdChevronDown } from '../../../Icons';

export const Container = styled.div`
  position: relative;
  margin-right: auto;
  width: 100%;
`;

export const DisplayBox = styled.div`
  width: 100%;
  height: 32px;
  border-radius: 4px;
  border: solid 1px #ecf0f3;
  background-color: ${props => getTheme(props.theme, 'colors.white', '#ffffff')};
  padding: 0px 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const ValueBox = styled.div`
  flex-grow: 1;
  line-height: 22px;
  font-size: ${props => getTheme(props.theme, 'font-sizes.p', '16px')};
  font-family: ${props => getTheme(props.theme, 'font-family', 'Roboto')};
  font-weight: ${props => getTheme(props.theme, 'font-weights.regular', '400')};
  color: ${props => getTheme(props.theme, 'colors.gray4', '#6287a7')};
  white-space: nowrap;
  max-width: calc(100% - 36px);
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Chevron = styled(MdChevronDown)`
  --size: 18px;
  min-width: var(--size);
  max-width: var(--size);
  min-height: var(--size);
  max-height: var(--size);
  fill: ${props => getTheme(props.theme, 'colors.grey4', '#6287a7')};
  margin-left: 12px;
`;

const active = css`
  color: ${props => getTheme(props.theme, 'colors.petroleum', '#4b6f85')};
`;

const comom = css`
  color: ${props => getTheme(props.theme, 'colors.grey3', '#c6d1d8')};
`;

export const Option = styled.span`
  width: 100%;
  height: 40px;
  line-height: 22px;
  font-size: ${props => getTheme(props.theme, 'font-sizes.p', '16px')};
  font-family: ${props => getTheme(props.theme, 'font-family', 'Roboto')};
  font-weight: ${props => getTheme(props.theme, 'font-weights.medium', '500')};

  background-color: ${props => getTheme(props.theme, 'colors.white', '#ffffff')};
  display: flex;
  align-items: center;
  padding: 0 24px;
  cursor: pointer;

  ${props => (props.active ? active : comom)}

  &:hover {
    background-color: ${props => getTheme(props.theme, 'colors.grey7', '#f9fafa')};
  }
`;
