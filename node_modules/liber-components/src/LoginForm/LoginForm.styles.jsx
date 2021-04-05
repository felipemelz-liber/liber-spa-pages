import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, css } from 'styled-components';
import { handleThemeFromObject as getTheme } from '../Themes';
import { media } from '../Util';
import { FaEnvelope, FaPhone, FaUser } from '../Icons';
import { SimpleLogo } from '../Logo';
import { SuccessButton } from '../Buttons';

// eslint-disable-next-line
const pattern = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22 viewBox=%220 0 60 60%22%3E%3Cdefs%3E%3Cpattern id=%22pattern%22 patternUnits=%22userSpaceOnUse%22 width=%224%22 height=%224%22%3E%3Cpath d=%22M3,-1 l2,2 M0,0 l4,4 M-1,3 l2,2%22 style=%22stroke:%23ffffff; stroke-width:0.2;opacity:0.5%22 /%3E%3C/pattern%3E%3C/defs%3E%3Crect x=%220%22 y=%220%22 width=%22100%25%22 height=%22100%25%22 fill=%22url%28%23pattern%29%22/%3E%3C/svg%3E';

const icon = css`
  width: 16px;
  height: 16px;
  fill: ${props => getTheme(props.theme, 'colors.white', '#ffffff')};
  margin-right: 10px;
`;

export const Envelope = styled(FaEnvelope)`
  ${icon}
`;

export const Phone = styled(FaPhone)`
  ${icon}
`;

export const User = styled(FaUser)`
  ${icon}
`;

export const Global = createGlobalStyle`
  ${({ container }) => container} {
    width: 100vw;
    min-height: 100vh;
    overflow: auto;
    background: url('${pattern}'),
      linear-gradient(311deg, ${props => getTheme(props.theme, 'colors.liberBlue', '#009dff')}, #63d0f8);
    box-sizing: border-box;
  }
`;

export const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 25px;
  box-sizing: border-box;

  ${media.large`
    justify-content: flex-end;
    padding: 0 50px;
  `}
`;


const CenterCard = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Card = styled.div`
  border-radius: 2px;
  background-color: ${props => getTheme(props.theme, 'colors.white', '#ffffff')};
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  align-items: center;
  box-sizing:border-box;
  margin-top: 50px;
  overflow: hidden;


  flex-flow: column-reverse;
  padding: 24px;
  width: 100%;
  margin-bottom: 16px;
  min-width:100%;

  ${media.large`
    flex-flow: row;
    padding: 48px;
    width: unset;
    margin-bottom: 50px;
    min-width: 476px;
  `}
`;

const Separator = styled.div`
  width: 100%;
  height: 0px;
  opacity: 0.7;
  border: solid 2px ${props => getTheme(props.theme, 'colors.white', '#ffffff')};
  border-bottom: 0px;
  margin-bottom: 16px;
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 162px;
  text-align: center;
  position:relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction:row;
`;

export const FooterText = styled.ul`
  list-style: none;
  color: ${props => getTheme(props.theme, 'colors.white', '#ffffff')};
  font-size: ${props => getTheme(props.theme, 'font-sizes.p', '16px')};
  font-weight: ${props => getTheme(props.theme, 'font-weights.medium', '500')};
  padding: 0px;
  margin: 0px 0px 20px 0px;

  text-align: center;
  min-width: 100%;
  flex-grow: 1;

  ${media.large`
    text-align: left;
    min-width: 220.69px;
    flex-grow: 0;
  `}

  & > li {
    display: flex;
    justify-content: center;
    align-items: center;

    ${media.large`
      justify-content: flex-start;
    `}
  }
`;

export const WhiteLink = styled.a`
  color: ${props => getTheme(props.theme, 'colors.white', '#ffffff')}!important;
  text-decoration: none;
`;

export const LogoGrow = styled.div`
  flex-grow: 1;
`;

const SmallLogo = styled(SimpleLogo)`
  display: inline-block;

  margin: 0px 0px 20px 0px;

  & > svg {
    width: 72.9px;
    height: 58.8px;

    ${media.large`
      width: 109.3px;
      height: 88.2px;
    `}
  }

  & .cls-1 {
    stroke: ${props => getTheme(props.theme, 'colors.white', '#ffffff')};
  }
  & .cls-2 {
    fill: ${props => getTheme(props.theme, 'colors.white', '#ffffff')};
  }
`;

export const Logo = styled(SimpleLogo)`
  display: inline-block;
  background-color: #fff;
  margin: 0px 0px 20px 0px;

  & > svg {
    width: 350px;
    height: 120px;

    ${media.medium`
      width: 350px;
      height: 250px;
    `}
  }

  & .cls-1 {
    stroke: ${props => getTheme(props.theme, 'colors.liberBlue', '#009dff')};
    fill: #fff;
  }
  & .cls-2 {
    stroke: ${props => getTheme(props.theme, 'colors.liberBlue', '#009dff')};
    fill:  ${props => getTheme(props.theme, 'colors.liberBlue', '#009dff')};
  }
`;

export const Footer = ({
  logoUrl, email, phone, ...props
}) => (
  <FooterContainer {...props}>
    <FooterText />
    <LogoGrow>
      {
        logoUrl
          ? <a href={logoUrl}><SmallLogo /></a>
          : <SmallLogo />
      }
    </LogoGrow>
    <FooterText>
      <li>
        <Envelope /><WhiteLink href={`mailto:${email}`}>{email}</WhiteLink>
      </li>
      <li><Phone />{phone}</li>
    </FooterText>
  </FooterContainer>
);

Footer.propTypes = {
  logoUrl: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};

Footer.defaultProps = {
  logoUrl: null,
  email: 'contato@libercapital.com.br',
  phone: '+55 (11) 4858-1265',
};


export const LoginContainer = ({
  children, container, footer,
}) => (
  <Fragment>
    <Global container={container} />
    <Background>
      <CenterCard>
        <Card>
          {children}
        </Card>
      </CenterCard>
      {footer && <Separator />}
      {footer}
    </Background>
  </Fragment>
);

LoginContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
  container: PropTypes.string,
  footer: PropTypes.node,
};
LoginContainer.defaultProps = {
  children: '',
  container: '#root',
  footer: <Footer />,
};


export const Form = styled.form`
  min-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ${media.large`
    min-width: 355px;
  `}
`;


export const Title = styled.h1`
  margin: 15px 0px 9px 0px;
  font-family: ${props => getTheme(props.theme, 'font-family', 'Roboto')};
  font-weight: ${props => getTheme(props.theme, 'font-weights.medium', '500')};
  margin: 0px !important;
  line-height: 25px;
  font-size: ${props => getTheme(props.theme, 'font-sizes.h4', '24px')};
  color: ${props => getTheme(props.theme, 'color.liberBlue', '#009DFF')};
  text-transform: uppercase;

  ${media.small`
    line-height: 35px;
  `}
`;


export const Button = styled(SuccessButton)`
    margin-top: 12px;
    margin-right: unset;
    width: 100%;

  ${media.large`
    margin-right: auto;
    width: 50%;
  `}
`;

Button.defaultProps = {
  version: 2,
  size: 'large',
};


export const FormSeparator = styled.div`

  width: unset;
  height: 0px;
  margin: 24px 0px;
  border-bottom: solid 1px rgba(0,0,0,0.1);
  border-left: 0px;

  align-self: stretch;



  ${media.large`
    width: 0px;
    height: unset;
    margin: 0px 48px;
    border-bottom: 0px;
    border-left: solid 1px rgba(0,0,0,0.1);
  `}
`;
