import styled, { css } from 'styled-components';
import { handleThemeFromObject } from '../../Themes';
import Resizable from '../Resizable';
import { handleColor, media } from '../../Util';

export const Title = styled.h3`
  font-family: ${props => handleThemeFromObject(props.theme, 'barDisplay.title.fontFamily', 'Roboto')};
  font-size: ${props => handleThemeFromObject(props.theme, 'barDisplay.title.fontSize', '20px')};
  line-height: ${props => handleThemeFromObject(props.theme, 'barDisplay.title.fontSize', '20px')};
  font-weight: ${props => handleThemeFromObject(props.theme, 'barDisplay.title.fontWeight', '400')};;
  color: ${props => handleThemeFromObject(props.theme, 'barDisplay.title.color', '#717171')};
  text-align: left;
  margin: 0px 0px 10px 0px;
`;

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px;
  box-sizing: border-box;

  & > ${Title}:nth-child(1) {
    display: none;
  }
  & > ${Title}:nth-child(3) {
    display: inline-block;
  }

  ${media.large`
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 15px 42px 0px 42px;

    & > ${Title}:nth-child(1) {
      display: inline-block;
    }
    &  > ${Title}:nth-child(3) {
      display: none;
    }
  `}
`;

export const Value = styled(Resizable)`
  --default-font-size: ${props => handleThemeFromObject(props.theme, 'barDisplay.value.fontSizeSmall', '32px')};
  font-family: Roboto;
  line-height: 0.8em;
  font-size: var(--default-font-size);
  font-weight: bold;
  color: ${props => handleThemeFromObject(props.theme, 'barDisplay.value.color', '#717171')};
  transition: all 100ms linear;
  position: relative;
  margin-left: ${props => (props.prefix && props.prefix.length > 0 ? '26px' : null)};
  margin-bottom: 10px;
  box-sizing: border-box;

  ${media.large`
    --default-font-size: ${props => handleThemeFromObject(props.theme, 'barDisplay.value.fontSizeLarge', '40px')};
    font-size: var(--default-font-size);
  `}

  ${props => (props.prefix ?
    css`
      &:before {
        position:absolute;
        content: "${props.prefix}";
        font-size: 50%;
        line-height: 50%;
        top: 5px;
        right: 100%;
      }
    ` : null)}
  }}
`;

export const BarSector = styled.div`
  background: ${props => handleColor(
    props.color,
    { defaultColor: handleThemeFromObject(props.theme, 'barDisplay.bar', '#a7a7a7') },
  )};
  border-radius: ${props => (props.percentage === '100%' ? '5px!important' : null)};
  flex-basis: ${props => props.percentage || '50%'};
  height: ${props => (!props.highlight ? '100%' : null)};
  transition: all  100ms;
  box-shadow: ${props => (!props.highlight ? '2px 2px 10px 0px transparent;' : null)};
  z-index: ${props => (!props.highlight ? '0' : null)};
  flex-grow: 1;

  ${props => (props.highlight ?
    css`
      height: calc(100% + 2.5px);
      box-shadow: 2px 2px 10px 0px ${handleColor(
      props.color,
      { defaultColor: handleThemeFromObject(props.theme, 'barDisplay.bar', '#a7a7a7'), position: 0 },
    )};
      z-index: 5;
    `
    : null)}
  }}
  ${media.large`
    cursor: pointer;
    &:hover {
      height: calc(100% + 2.5px);
      box-shadow: 2px 2px 10px 0px ${props => handleColor(
    props.color,
    { defaultColor: handleThemeFromObject(props.theme, 'barDisplay.bar', '#a7a7a7'), position: 0 },
  )};
      z-index: 5;
    }
`}
`;

export const BarShadow = styled.div`
  flex-basis: ${props => props.percentage || '50%'};
  height: 100%;
  opacity: 0.5;
  box-shadow: 2px 2px 10px 0px ${props => handleColor(
    props.color,
    { defaultColor: handleThemeFromObject(props.theme, 'barDisplay.bar', '#a7a7a7'), position: 0 },
  )};

  &:first-child {
    box-shadow: 0px 2px 10px 0px ${props => handleColor(
    props.color,
    { defaultColor: handleThemeFromObject(props.theme, 'barDisplay.bar', '#a7a7a7'), position: 0 },
  )};
  }
`;

export const BarSectors = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0px;
`;

export const BarShadows = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0px;
`;

export const Bar = styled.div`
  position: relative;
  width: 50%;
  height: 10px;
  border: 0px;
  border-radius: 5px;
  background-color: ${props => handleThemeFromObject(props.theme, 'barDisplay.bar', '#a7a7a7')};
  box-sizing: border-box;
  max-width: 100%;

  & ${BarSector}:first-child, & ${BarShadow}:first-child {
    border-radius: 5px 0px 0px 5px;
  }
  & ${BarSector}:last-child, & ${BarShadow}:last-child {
    border-radius: 0px 5px 5px 0px;
  }
  & ${BarSectors}, & ${BarShadows} {
    border-radius: 5px;
  }
`;
