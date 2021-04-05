import styled from 'styled-components';
import { handleThemeFromObject } from '../Themes';
import { media } from '../Util';

const generateBorder = (position = 'left', color) => (color ? `border-${position}: 4px solid ${color}` : null);

export const Card = styled.div`
  height: unset;
  width: 100%;
  background-color: ${props => handleThemeFromObject(props.theme, 'card.background', '#ffffff')};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  display: inline-flex;
  position: relative;
  margin: 8px 25px 16px 0;
  margin-right: 0px;
  flex-direction: column;
  z-index: 5;
  box-sizing: border-box;
  border-radius: 4px;
  overflow: hidden;
  ${props => generateBorder(props.borderPosition, props.borderColor)};
  ${media.large`
    margin-right: 25px;
    height: ${props => (props.height ? props.height : 'unset')};
    width: ${props => (props.width ? props.width : 'unset')};
  `}
  ${media.extraLarge`
    margin-right: 25px;
    height: ${props => (props.height ? props.height : 'unset')};
    width: ${props => (props.width ? props.width : 'unset')};
  `}
`;

export const CardTitle = styled.div`
  font-family: Roboto;
  font-size: 25px;
  font-weight: 900;
  text-align: center;
  color: ${props => handleThemeFromObject(props.theme, 'card.title.color', '#ffffff', props.color)};
  background-color: ${props => (
    handleThemeFromObject(props.theme, 'card.title.background', '#009dff', props.backgroundColor)
  )};
  border-radius: 2px 2px 0px 0;
  padding: 14px 0;
  text-transform: uppercase;
  box-sizing: border-box;
`;

export const CardHeader = styled.div`
  height: ${props => (props.height ? props.height : '69px')};
  background-color: ${props => (
    handleThemeFromObject(props.theme, 'card.header.background', 'rgba(243, 243, 243, 0.22)')
  )};
  border-bottom: solid 1px ${props => handleThemeFromObject(props.theme, 'card.border', '#e6e6e6')};
  padding: 23px;
  box-sizing: border-box;
  font-family: ${props => handleThemeFromObject(props.theme, 'card.header.fontFamily', 'Roboto')};
  font-size: ${props => handleThemeFromObject(props.theme, 'card.header.fontSize', '20px')};
  font-weight: ${props => handleThemeFromObject(props.theme, 'card.header.fontWeight', '500')};
  color: ${props => handleThemeFromObject(props.theme, 'card.header.color', '#717171')};
`;

export const CardContent = styled.div`
  flex-grow: 1;
  padding: 23px;
  overflow: hidden;
  font-family: Roboto;
  box-sizing: border-box;
`;

export const CardFooter = styled.div`
  min-height: ${props => (props.height ? props.height : '69px')};
  background-color: ${props => (
    handleThemeFromObject(props.theme, 'card.footer.background', 'rgba(243, 243, 243, 0.22)')
  )};
  border-top: solid 1px ${props => handleThemeFromObject(props.theme, 'card.border', '#e6e6e6')};
  padding: 23px;
  box-sizing: border-box;
  font-family: Roboto;
`;

export const CardListItem = styled.li`
  height: ${props => (props.height ? props.height : '69px')};
  min-height:  ${props => (props.height ? props.height : '69px')};
  border-bottom: solid 1px ${props => handleThemeFromObject(props.theme, 'card.border', '#e6e6e6')};
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  list-style-type: none;

  &:hover {
    background-color: ${props => handleThemeFromObject(props.theme, 'card.listItem.hover', 'rgba(230, 230, 230, 0.5)')};
  }

  &:last-child {
    border-bottom: ${props => (props.last ? '0px' : null)};
  }
`;

export const CardListContent = styled.ul`
  flex-grow: 1;
  overflow: auto;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  ${(props) => {
    if (props.adapt) {
      return `
        & > li{
          flex-grow: 1;
          height: unset;
          min-height: unset;
        }

        & > li:last-child {
          border-bottom: 0px;
        }
      `;
    }
    return null;
  }}
`;
