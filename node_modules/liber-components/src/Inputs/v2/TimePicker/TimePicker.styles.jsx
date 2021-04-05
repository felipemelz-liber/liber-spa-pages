import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import ScrollArea from 'react-perfect-scrollbar';
import { TextField } from '../InputField';
import { handleThemeFromObject as getTheme } from '../../../Themes';
import { MdClockOutline, MdCloseCircle } from '../../../Icons';


export const Container = styled.div`
  position: relative;
`;

export const Field = styled(TextField)`
  padding-right: 52px;
`;

export const Icon = styled(MdClockOutline)`
  --size: 20px;
  min-width: var(--size);
  max-width: var(--size);
  min-height: var(--size);
  max-height: var(--size);
  fill: #8c9fa9;
  position: absolute;
  right: 16px;
  top: calc(50% - 5px);
  pointer-events: none;
  opacity: ${({ hide }) => (hide ? '0' : '1')};
  transition: opacity 250ms cubic-bezier(0.23,1,0.32,1) 0ms;
`;

export const TimeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  height: var(--clock-container-size, 264px);
  & > div{
    flex-grow: 1;
    padding: 12px 0px;
    height: 100%;
    border-right: 1px solid ${props => getTheme(props.theme, 'colors.border', '#e8ebee')};
    box-sizing: border-box;
  }
  & > div:last-child{
    border-right: 0px;
  }
`;


export const Col = styled(ScrollArea)`
  display: flex;
  flex-direction: column;
  margin: 12x 0px;
  height: 100%;
  overflow: auto;
  flex-grow: 1;
  max-height: 100%;


  & .ps__rail-y{
    margin-top: 4px;
    margin-bottom: 4px;
  }

  & .ps__thumb-y{
    background-color: #e2e2e2!important;
    right: 4px;
  }

  & .ps__rail-y:hover, & .ps--clicking{
    background-color: transparent!important;
  }

  & .ps__rail-y:hover .ps__thumb-y,  & .ps__rail-y.ps--clicking .ps__thumb-y{
    width: 8px;
  }

   & .ps__rail-y{
    z-index: 10;
  }
`;

Col.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
};

Col.defaultProps = {
  children: '',
  options: {
    swipeEasing: true,
  },
};

const select = (selected) => {
  if (selected) {
    return css`
      color: ${props => getTheme(props.theme, 'colors.dark-text', '#405f71')};
      background-color: ${props => getTheme(props.theme, 'colors.header', '#f9fafa')};
  `;
  }
  return css`
    color: ${props => getTheme(props.theme, 'colors.dark-text70', '#798e9b')};
  `;
};

const body = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;

export const Unit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  width: 100%;
  transition:
    background-color 250ms cubic-bezier(0.23,1,0.32,1) 0ms,
    color 250ms cubic-bezier(0.23,1,0.32,1) 0ms;
  cursor: pointer;
  ${props => getTheme(props.theme, 'typography.body', body)};
  ${props => select(props.selected)}

  &:hover{
    background-color: ${props => getTheme(props.theme, 'colors.secondary', '#f0f2f4')};
  }
  &:nth-last-child(3){
    margin-bottom: var(--last-unit-margin, 200px);
  }
`;


const closeShow = css`
  opacity: 1;
  pointer-events: all;
`;
export const Close = styled(MdCloseCircle)`
  --size: 20px;
  min-width: var(--size);
  max-width: var(--size);
  min-height: var(--size);
  max-height: var(--size);
  fill: #8c9fa9;
  position: absolute;
  right: 16px;
  top: calc(50% - 5px);
  opacity: 0;
  pointer-events: none;
  ${({ show }) => show && closeShow}
  transition: opacity 250ms cubic-bezier(0.23,1,0.32,1) 0ms;
  z-index: 2;
  cursor: pointer;
`;
