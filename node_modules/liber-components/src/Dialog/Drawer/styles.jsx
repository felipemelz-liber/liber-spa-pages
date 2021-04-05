import styled from 'styled-components';
import { handleThemeFromObject } from '../../Themes';

const getContentPositioning = ({ position, size, fitScreen, drawerSize }) => {
  let width;
  let height;
  switch (position) {
    case 'right':
      width = fitScreen ? '100vw' : `${size}px`;
      height = drawerSize ? `${drawerSize}px` : '100vh';
      return `
        height: ${height};
        width: ${width};
        top: ${drawerSize ? null : '0'};
        right: 0;
        border-radius: ${drawerSize ? '4px 0px 0px 4px' : null};
      `;
    case 'top':
      height = fitScreen ? '100vh' : `${size}px`;
      width = drawerSize ? `${drawerSize}px` : '100vw';
      return `
        height: ${height};
        width: ${width};
        top: 0;
        left: ${drawerSize ? null : '0'};
        border-radius: ${drawerSize ? '0px 0px 4px 4px' : null};
    `;
    case 'bottom':
      height = fitScreen ? '100vh' : `${size}px`;
      width = drawerSize ? `${drawerSize}px` : '100vw';
      return `
        height: ${height};
        width: ${width};
        bottom: 0;
        left: ${drawerSize ? null : '0'};
        border-radius: ${drawerSize ? '4px 4px 0px 0px' : null};
    `;
    case 'left':
    default:
      width = fitScreen ? '100vw' : `${size}px`;
      height = drawerSize ? `${drawerSize}px` : '100vh';
      return `
        height: ${height};
        width: ${width};
        top: ${drawerSize ? null : '0'};
        left: 0;
        border-radius: ${drawerSize ? '0px 4px 4px 0px' : null};
      `;
  }
};

export const Content = styled.div`
  position: fixed;
  height: 100vh;
  background-color: ${props => handleThemeFromObject(props.theme, 'dialog.card', '#fff')};
  ${props => getContentPositioning(props)}
  pointer-events: all;
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14),
    0px 6px 30px 5px rgba(0, 0, 0, 0.12);
`;
