import styled, { css } from 'styled-components';
import { handleThemeFromObject } from '../../Themes';

import { CardContent } from '../../Card';
import { FaAngleLeft, FaAngleRight } from '../../Icons';
import { Button } from '../../Buttons';
import { media } from '../../Util';

export const Dot = styled.span`
  width: 6px;
  height: 6px;
  background-color: ${props => handleThemeFromObject(props.theme, 'calendar.dot', '#cecece', props.color)};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  display: inline-block;
  border-radius: 3px;
  margin-right: 8px;
`;

export const BiggerDot = styled(Dot)`
  width: unset;
  height: 18px;
  width: unset;
  min-width: 18px;
  border-radius: 9px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: ${props => handleThemeFromObject(props.theme, 'calendar.biggerDot', '#fff')};
  margin-right: 0px;
  margin-bottom: 5px;
  font-weight: bold;
  padding: 0 5px;
  overflow: hidden;
  box-sizing: border-box;
`;

export const FloatingDots = styled.div`
  position: absolute;
  top: 4px;
  left: ${props => (props.today ? '32px' : '27px')};
  width: 18px;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  & ${Dot} {
    margin-bottom: 2px;
    margin-right: 2px;
  }
  ${media.small`
    left: ${props => (props.today ? '36px' : '31px')};
  `}
  ${media.medium`
    left: ${props => (props.today ? '36px' : '31px')};
  `}
  ${media.large`
    left: ${props => (props.today ? '40px' : '35px')};
  `}
  ${media.extraLarge`
    left: ${props => (props.today ? '40px' : '35px')};
  `}
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: inherit;
  font-size: 11px;
  text-align: center;
  color: ${props => handleThemeFromObject(props.theme, 'calendar.dataContainer', '#717171')};
  text-transform: none;
  margin-bottom: 12px;
  width: unset;
  ${media.small`
    font-size: 11px;
  `}
  ${media.medium`
    font-size: 11px;
  `}
  ${media.large`
    width: 65px;
    font-size: 13px;
  `}
  ${media.extraLarge`
    width: 65px;
    font-size: 13px;
  `}
`;

const tooltipPosition = (position) => {
  switch (position) {
    case 'right':
      return css`
        bottom: 30px;
        left: 30px;
      `;
    case 'left':
      return css`
        bottom: 30px;
        right: 30px;
      `;
    case 'middle':
    default:
      return css`
        bottom: 40px;
        left: calc(50% - calc(148px / 2));
      `;
  }
};

export const Tooltip = styled.div`
  position: absolute;
  ${props => tooltipPosition(props.position)}
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  width: 148px;
  border-radius: 4px;
  background-color: ${props => handleThemeFromObject(props.theme, 'calendar.tooltip.background', '#ffffff')};
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  color: ${props => handleThemeFromObject(props.theme, 'calendar.tooltip.color', '#717171')};
  padding: 8px;
  display: ${props => (props.hide ? 'none!important' : 'none')};
  z-index: 1000;
  box-sizing: border-box;
  & > h6 {
    margin: 0px;
    opacity: 0.75;
    font-family: inherit;
    font-size: 12px;
    font-weight: bold;
    text-align: left;
    color: ${props => handleThemeFromObject(props.theme, 'calendar.tooltip.color', '#717171')};
    text-transform: capitalize;
    text-align: center;
  }
  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Day = styled.div`
  position: relative;
  font-family: ${props => handleThemeFromObject(props.theme, 'calendar.date.today.fontFamily', 'Roboto')};
  font-size: ${props => handleThemeFromObject(props.theme, 'calendar.date.today.fontSize', '14px')};
  width: 28px;
  height: 28px;
  border: 0px;
  margin: 0px;
  padding: 0px;
  border-radius: 20px;
  user-select: none;
  cursor: ${props => (props.pointer && !props.disabled ? 'pointer' : null)};

  background: ${props => (props.today
    ? handleThemeFromObject(props.theme, 'calendar.date.background', 'linear-gradient(to bottom, #00ccff, #009dff)')
    : 'transparent'
  )};
  box-shadow:  ${props => (props.today ? '0 2px 6px 0 rgba(0, 0, 0, 0.05)' : null)};
  font-weight: ${props => (props.today
    ? handleThemeFromObject(props.theme, 'calendar.date.today.fontWeightToday', '700')
    : handleThemeFromObject(props.theme, 'calendar.date.today.fontWeight', '400')
  )};

  color: ${(props) => {
    if (props.today) {
      return handleThemeFromObject(props.theme, 'calendar.date.today.color', '#fff');
    }
    if (props.disabled) {
      return handleThemeFromObject(props.theme, 'calendar.date.disabled', 'rgb(113,113,113, 0.34)');
    }
    return handleThemeFromObject(props.theme, 'calendar.date.default', '#717171');
  }};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(230, 230, 230, 0.5);
    font-weight: ${props => (props.today
    ? handleThemeFromObject(props.theme, 'calendar.date.today.fontWeightToday', '700')
    : handleThemeFromObject(props.theme, 'calendar.date.today.fontWeightHighlight', '500')
  )};
  }
  &:hover > ${Tooltip} {
    display: block;
  }
  &:hover ${FloatingDots} {
    display: ${props => (props.showDot ? null : 'none')};
  }
  ${media.small`
    font-size: 18px;
    width: 36px;
    height: 36px;
  `}
  ${media.large`
    font-size: 20px;
    width: 40px;
    height: 40px;
  `}
`;

export const DayLink = styled.a`
  text-decoration: none;
  position: relative;
  font-family: inherit;
  font-size: 14px;
  width: 28px;
  height: 28px;
  border: 0px;
  margin: 0px;
  padding: 0px;
  border-radius: 20px;
  user-select: none;
  cursor: ${props => (props.pointer && !props.disabled ? 'pointer' : null)};

  background: ${props => (props.today
    ? handleThemeFromObject(
      props.theme,
      'calendar.date.link.background',
      'linear-gradient(to bottom, #00ccff, #009dff)',
    )
    : 'transparent'
  )};
  box-shadow:  ${props => (props.today ? '0 2px 6px 0 rgba(0, 0, 0, 0.05)' : null)};
  font-weight: ${props => (props.today ? 'bold' : '500')};

  color: ${(props) => {
    if (props.today) {
      return handleThemeFromObject(props.theme, 'calendar.date.link.today', '#fff');
    }
    if (props.disabled) {
      return handleThemeFromObject(props.theme, 'calendar.date.link.disabled', 'rgb(113,113,113, 0.34)');
    }
    return handleThemeFromObject(props.theme, 'calendar.date.link.default', '#717171');
  }};

  display: flex;
  justify-content: center;
  align-items: center;


  &:hover {
    background-color: rgba(230, 230, 230, 0.5);
    color: ${(props) => {
    if (props.today) {
      return handleThemeFromObject(props.theme, 'calendar.date.link.today', '#fff');
    }
    if (props.disabled) {
      return handleThemeFromObject(props.theme, 'calendar.date.link.disabled', 'rgb(113,113,113, 0.34)');
    }
    return handleThemeFromObject(props.theme, 'calendar.date.link.default', '#717171');
  }};
  }
  &:hover > ${Tooltip} {
    display: block;
  }
  &:hover ${FloatingDots} {
    display: ${props => (props.showDot ? null : 'none')};
  }
  ${media.small`
    font-size: 18px;
    width: 36px;
    height: 36px;
  `}
  ${media.medium`
    font-size: 18px;
    width: 36px;
    height: 36px;
  `}
  ${media.large`
    font-size: 20px;
    width: 40px;
    height: 40px;
  `}
  ${media.extraLarge`
    font-size: 20px;
    width: 40px;
    height: 40px;
  `}
`;

export const WeekDay = styled.div`
  width: 30px;
  height: 24px;
  font-family: ${props => handleThemeFromObject(props.theme, 'calendar.week.fontFamily', 'Roboto')};
  font-size: ${props => handleThemeFromObject(props.theme, 'calendar.week.fontSize', '12px')};
  font-weight: ${props => handleThemeFromObject(props.theme, 'calendar.week.fontWeight', '700')};
  text-align: center;
  color: ${props => handleThemeFromObject(props.theme, 'calendar.week.color', '#009dff')};
  text-transform: uppercase;

  ${media.small`
    width: 35.1px;
    font-size: ${props => handleThemeFromObject(props.theme, 'calendar.week.fontSizeSmall', '14px')};
  `}
  ${media.large`
    width: 54.1px;
    font-size: ${props => handleThemeFromObject(props.theme, 'calendar.week.fontSizeLarge', '20px')};
  `}
`;

export const Month = styled.div`
  font-family: ${props => handleThemeFromObject(props.theme, 'calendar.month.fontFamily', 'Roboto')};
  font-size: ${props => handleThemeFromObject(props.theme, 'calendar.month.fontSize', '20px')};
  font-weight: ${props => handleThemeFromObject(props.theme, 'calendar.month.fontWeight', '500')};
  text-align: center;
  color: ${props => handleThemeFromObject(props.theme, 'calendar.month,color', '#717171')};
  text-transform: uppercase;
  width: unset;
  flex-grow: 1;
  ${media.large`
    width: 260px;
    flex-grow: 0;
  `}
`;

export const Week = styled(Month)`
  font-size: ${props => handleThemeFromObject(props.theme, 'calendar.month.fontSize', '20px')};
  width: unset;
  flex-grow: 1;

  ${media.large`
    width: 250px;
    flex-grow: 0;
  `}
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 36px;
  max-height: 36px;
  ${media.small`
    min-height: 40px;
    max-height: 40px;
  `}
  ${media.medium`
    min-height: 40px;
    max-height: 40px;
  `}
  ${media.large`
    min-height: 43px;
    max-height: 43px;
  `}
  ${media.extraLarge`
    min-height: 43px;
    max-height: 43px;
  `}
`;

export const FilterRow = styled(Row)`
  justify-content: flex-start;
  color: ${props => handleThemeFromObject(props.theme, 'calendar.filterRow', '#717171')} !important;
  font-size: 14px;
  font-weight: 500;
  align-items: flex-start;
  min-height: unset;
  max-height: unset;
  ${media.large`
    align-items: center;
  `}
  ${media.extraLarge`
    align-items: center;
  `}
`;

export const FiltersBox = styled(FilterRow)`
  flex-wrap: wrap;
  font-size: 10px;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
  ${media.large`
    font-size: 14px;
    flex-wrap: nowrap;
    & > * {
      margin-bottom: 0px !important;
    }
  `}
  ${media.extraLarge`
    font-size: 14px;
    flex-wrap: nowrap;
    & > * {
      margin-bottom: 0px !important;
    }
  `}
`;

export const FilterLabel = styled.div`
  font-family: inherit;
  font-size: 14px;
  font-weight: 900;
  text-align: center;
  color: ${props => handleThemeFromObject(props.theme, 'calendar.filterLabel', '#717171')};
  margin-right: 20px;
`;

export const Cell = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalendarBody = styled(CardContent)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => (props.week ? '0px' : '10px')};
`;

export const Left = styled(FaAngleLeft)`
  width: 24px;
  height: 24px;
  fill: ${props => handleThemeFromObject(props.theme, 'calendar.left', '#009dff')};
`;

export const Right = styled(FaAngleRight)`
  width: 24px;
  height: 24px;
  fill: ${props => handleThemeFromObject(props.theme, 'calendar.right', '#009dff')};
`;

export const NavButton = styled(Button)`
  background-color: transparent;
  border-radius: 50%;
  padding: 0px;
  width: 40px;
  height: 40px;
  &:hover {
    background-color: ${props => (props.disabled ? null : 'rgba(230, 230, 230, 0.5)')};
  }
  margin: 0px;
  & > svg{
    fill: ${props => (props.disabled ? 'rgba(230, 230, 230, 0.5)' : null)};
  }
  ${media.small`
    margin: 0 15px;
  `}
  ${media.medium`
    margin: 0 15px;
  `}
  ${media.large`
    margin: 0 10px;
  `}
  ${media.extraLarge`
    margin: 0 10px;
  `}
`;

export const WeekBody = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const WeekDayValue = styled.div`
  display: inline-flex;
  flex-direction: column;
  font-family: inherit;
  font-size: 18px;
  width: 47px;
  font-weight: 500;
  margin-bottom: 12px;
  color: ${(props) => {
    if (props.today) {
      return handleThemeFromObject(props.theme, 'calendar.date.today', '#009dff');
    }
    if (props.disabled) {
      return handleThemeFromObject(props.theme, 'calendar.date.disabled', 'rgb(113,113,113, 0.34)');
    }
    return handleThemeFromObject(props.theme, 'calendar.date.default', '#717171');
  }};
  align-items: center;
  text-transform: uppercase;
  ${media.large`
    font-size: 20px;
  `}
  ${media.extraLarge`
    font-size: 20px;
  `}
`;

export const WeekCell = styled.div`
  flex-basis: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-width: 2px;
  border-style: solid;
  min-height: 300px;
  border-image:
    linear-gradient(to bottom, rgba(230, 230, 230, 0.3), rgba(230, 230, 230, 0)) 1 100%;
  &:last-child {
    border: 0px;
  }

  padding-top: 5px;
  cursor: ${props => (props.pointer && !props.disabled ? 'pointer' : null)};
  border-top: 0px;
  border-left: 0px;
  &:hover {
    background-image: linear-gradient(to bottom, rgba(230, 230, 230, 0.3), rgba(230, 230, 230, 0));
  }
  &:hover > ${WeekDayValue} {
    font-weight: 900;
  }
  &:hover ${DataContainer} {
    font-weight: 900;
  }
`;

export const WeekCellLink = styled.a`
  text-decoration: none;
  flex-basis: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-width: 2px;
  border-style: solid;
  min-height: 300px;
  border-image:
    linear-gradient(to bottom, rgba(230, 230, 230, 0.3), rgba(230, 230, 230, 0)) 1 100%;
  &:last-child {
    border: 0px;
  }

  padding-top: 5px;
  cursor: ${props => (props.pointer && !props.disabled ? 'pointer' : null)};
  border-top: 0px;
  border-left: 0px;
  &:hover {
    background-image: linear-gradient(to bottom, rgba(230, 230, 230, 0.3), rgba(230, 230, 230, 0));
  }
  &:hover > ${WeekDayValue} {
    font-weight: 900;
  }
  &:hover ${DataContainer} {
    font-weight: 900;
  }
`;

export const WeekNav = styled(Row)`
  padding: 15px 0px;
  border-bottom: 2px solid rgba(230, 230, 230, 0.3);
`;
