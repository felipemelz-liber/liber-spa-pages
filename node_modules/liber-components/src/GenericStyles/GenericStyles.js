import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { FaSpinner } from '../Icons';

export const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900');
  @import url('https://fonts.googleapis.com/css?family=Nunito:400,500,700,900');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,500,700,900');
  @font-face {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  body{
    margin:0;
    padding:0;
    line-height: 1.5;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
`;

export const Fade = createGlobalStyle`
  .fade-enter {
  opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 1s ease-in;
  }

  .fade-exit {
  opacity: 1;
  }

  .fade-exit.fade-exit-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
  width: 540px;

  @media (min-width: 576px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

export const Header2 = styled.h2`
  color: ${props => props.color || '#009DFF'};
  font-size: 40px;
  margin: 15px 0px 9px 0px;
  font-family: Roboto;
  font-weight: 500;
`;

export const Header3 = styled.h2`
  color: ${props => props.color || '#009DFF'};
  font-weight: bold;
  font-size: 30px;
  margin: 15px 0px 9px 0px;
  font-family: inherit;
`;

export const Header4 = styled.h2`
  color: ${props => props.color || '#009DFF'};
  font-weight: bold;
  font-size: 24px;
  margin: 15px 0px 9px 0px;
  font-family: inherit;
`;

export const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: inline-block;
  position: relative;
  margin: 8px 25px 16px 0;
  height: ${props => (props.height ? props.height : 'unset')};
  margin-right: 0px;
  width: 100%;

  @media (min-width: 576px) {
    margin-right: 0px;
    width: 100%;
  }
  @media (min-width: 768px) {
    margin-right: 0px;
    width: 100%;
  }
  @media (min-width: 992px) {
    margin-right: 25px;
    width: ${props => (props.width ? props.width : 'unset')};
  }
  @media (min-width: 1200px) {
    margin-right: 25px;
    width: ${props => (props.width ? props.width : 'unset')};
  }
`;

export const CardTitle = styled.div`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  color: ${props => (props.color ? props.Color : '#ffffff')};
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#009dff')};
  border-radius: 2px 2px 0px 0;
  padding: 8px 0;
  text-transform: uppercase;
  box-sizing: border-box;
`;

const spinning = keyframes`
  to {transform: rotate(360deg);}
`;

export const SpinnigSpinner = styled(FaSpinner)`
  width: 25px;
  height: 25px;
  animation: ${spinning} 2s linear infinite;
  fill: #009dff;
`;

const buttonRipple = keyframes`
  0% {
    transform: scale(0, 0);
    opacity: 1;
  }
  20% {
    transform: scale(25, 25);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(40, 40);
  }
`;

export const Button = styled.button`
  background-color: #a4a4a4;
  color: #ffffff;
  border: 0px;
  border-radius: 2px;
  height: 49px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  padding: 0 16px;
  width: ${props => (props.width ? props.width : 'unset')};
  height: ${props => (props.height ? props.height : '49px')};
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;

  position: relative;
  overflow: hidden;

  :focus {
    outline: 0;
  }

  &:hover {
    background-color: #757575;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(206, 206, 206, 0.5);
    opacity: 0.5;
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  &:focus:not(:active)::after {
    animation: ${buttonRipple} 0.8s ease-out;
  }
`;

export const LinkButton = styled.a`
  background-color: #ffffff;
  color: #000000;
  border: 0px;
  border-radius: 2px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  padding: 0px 16px;
  width: ${props => (props.width ? props.width : 'unset')};
  height: ${props => (props.height ? props.height : '49px')};
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #cecece;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(206, 206, 206, 0.5);
    opacity: 0.5;
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  &:focus:not(:active)::after {
    animation: ${buttonRipple} 0.8s ease-out;
  }
`;

export const Hr = styled.hr`
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin: 18px 0px;
`;

export const Badge = styled.div`
  line-height: 22px;
  font-weight: bold;
  border-radius: 8px;
  background-color: #007ecc;
  color: #fafafa;
  padding: 2px 9px;
  display: inline;
  margin-right: 16px;
  font-size: 18px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'center'};
`;

export const WhiteButton = styled(LinkButton)`
  background-color: #fafafa;
  color: #009dff !important;
  border: 2px solid #009dff;
  width: 233px;
  margin-top: 25px;
  margin-left: 10px;
  &:hover {
    background-color: #006fcb;
    color: #fafafa !important;
    border: 0px;
  }
`;

export const BlueButton = styled(Button)`
  background-color: #009dff;
  color: #fafafa;
  width: 341px;
  margin-top: 25px;
  margin-left: 10px;
  &:hover {
    background-color: #006fcb;
  }
`;

export const Link = styled.a`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: #009dff;
  transition: color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  &:hover {
    color: #006fcb;
  }
`;

export const Mark = styled.mark`
  background-color: transparent;
  color: #009dff;
`;

export const IconButton = styled(Button)`
  padding: 5px;
  background: unset;
  background-color: transparent;
  border: 0px;
  border-radius: 15px;
  width: 30px;
  height: 30px;
  box-sizing: border-box;

  &:hover {
    background-color: unset;
  }
  &:hover > * {
    fill: #009dff;
  }
`;
export const IconLinkButton = styled(LinkButton)`
  padding: 5px;
  background: unset;
  background-color: transparent;
  border: 0px;
  border-radius: 15px;
  width: 30px;
  height: 30px;
  box-sizing: border-box;

  &:hover {
    background-color: unset;
  }
  &:hover > * {
    fill: #009dff;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  height: 70vh;
  box-sizing: border-box;
  @media (min-width: 576px) {
    width: unset;
  }
  @media (min-width: 768px) {
    width: unset;
  }
  @media (min-width: 992px) {
    width: 50vw;
  }
  @media (min-width: 1200px) {
    width: 50vw;
  }
`;

export const ModalContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : null)};
  overflow: auto;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
