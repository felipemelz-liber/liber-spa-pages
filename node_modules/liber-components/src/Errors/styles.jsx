import styled, { css } from 'styled-components';
import { media } from '../Util';
import { MobileBackground as MobileBackgroundRaw } from './MobileBackground';

const Container = styled.div`
  color: #2E2F30;
  text-align: center;
  line-height: 2em;
  font-family: Roboto, sans-serif;
  margin: 0;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const DesktopContainer = styled(Container)`
  display: none;
  ${media.large`
    display: block;
  `}
`;

export const MobileContainer = styled(Container)`
  display: block;
  ${media.large`
    display: none;
  `}
`;

export const MobileBackground = styled(MobileBackgroundRaw)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

export const DesktopBackgroundStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

export const DesktopIllustrationStyles = css`
  position: absolute;
  top: 20vh;
  left: 10vw;
  width: 50vw;
  z-index: -1;

  ${media.extraLarge`
    top: 20vh;
    left: 15vw;
    width: 40vw;
  `}
`;

export const DesktopContentStyles = css`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 23.5vh;
  left: 56vw;

  ${media.extraLarge`
    top: 28vh;
    left: 52.5vw;
  `}
`;

export const DesktopMessageBoxStyles = css`
  max-width: 20vw;
  & h1, h3 {
    text-align: justify;
    letter-spacing: -0.04em;
  }
  & h1 {
    color: #c7cfd3;
    font-size: 2.25vw;
    font-weight: 500;
    margin-bottom: 0;
  }
  & h3 {
    color: #8f9ea7;
    font-size: 1.8vw;
    font-weight: 300;
    margin-top: 0.3vw;
    margin-bottom: 1.5vw;
  }
  & a {
    text-align: center;
    background-color: #13CE66;
    color: #ffffff;
    text-decoration: none;
    border: 0px;
    border-radius: 0.25vw;
    font-size: 1.5vw;
    font-weight: 600;
    padding: 0.25vw 2.15vw;
    box-sizing: border-box;
    white-space: nowrap;
    &:hover {
      background-color: #0DAB53;
    }
  }
  ${media.extraLarge`
    max-width: 15.5vw;
    & h1 {
      font-size: 1.7vw;
    }

    & h3 {
      font-size: 1.35vw;
    }

    & a {
      font-size: 0.9vw;
    }
  `}
`;

export const MobileIllustrationStyles = css`
  position: absolute;
  left: 10.75%;
  bottom: 0;
  height: auto;
  width: 40vh;
  z-index: -1;
`;

export const MobileContentStyles = css`
  margin: auto;
  height: 100%;
  width: 77.75%;
`;

export const MobileBrandStyles = css`
  margin-top: 10%;
  width: 30vh;
`;

export const MobileMessageBoxStyles = css`
  margin: auto;
  max-width: 200px;

  & h1 { font-size: 24px; }
  & h3 {
    font-size: 18px;
    margin-bottom: 20px;
  }
  & a {
    font-size: 14px;
    padding: 5px 28px;
  }

  ${media.medium`
    max-width: 275px;
    & h1 { font-size: 34px; }
    & h3 {
      font-size: 24px;
      margin-bottom: 32px;
    }
    & a { font-size: 18px; }
  `}
`;
