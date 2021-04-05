import styled, { css } from 'styled-components';
import { Logo as LiberLogo } from '../Logo';
import { MdMenu } from '../Icons';
import { handleThemeFromObject } from '../Themes';

const getTheme = (value, fallback) => css`
    ${props => handleThemeFromObject(props.theme, value, fallback)}
`;

export const Nav = styled.nav`
  width: 100vw;
  max-width: 100%;
  min-height: 96px;
  max-height: 96px;
  background-color: ${getTheme('colors.white', '#ffffff')};
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  height: 100%;
  width: ${props => props.width || '1280px'};
  max-width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


export const Logo = styled(LiberLogo)`
  --size: 96px;
  min-width: var(--size);
  min-height: var(--size);
  max-width: var(--size);
  max-height: var(--size);
`;
export const Menu = styled.div`
  margin-left: auto;
  margin-right: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;


export const Label = styled.ul`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-align: right;
  color: #405f71;
  margin: 0px;

  list-style-type: none;

  & > li > svg{
    fill: #798e9b;
  }

  & > li > span {
    font-family: Roboto;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: right;
    color: #b6c2c9;
  }
`;

export const Sandwich = styled(MdMenu)`
  --size: 32px;
  min-width: var(--size);
  min-height: var(--size);
  max-width: var(--size);
  max-height: var(--size);
  fill: #798e9b;
`;
