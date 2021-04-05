import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from './LiberV4';
import { handleThemeFromObject as getTheme } from './methods';
import {
  PrimaryButton,
  SecondaryButton,
  SuccessButton,
  AlertButton,
  ErrorButton,
} from '../Buttons';

const Subhead = styled.div`
  ${({ theme }) => getTheme(theme, 'typography.subhead')};
  color: ${({ theme }) => getTheme(theme, 'colors.dark-text')};
  margin-bottom: 32px;
`;
const Body = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  background-color: #fafdff;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: ${({ theme }) => getTheme(theme, 'font-family')};

  & button {
    margin-top: 12px;
    margin-right: 11px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  width: 174px;
  border-radius: 4px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 11px;
  border: 1px solid ${({ theme }) => getTheme(theme, 'colors.border')};
  border-width: ${({ border }) => (border ? '1px' : '0px')};
  font-size: 12px;
`;

const Primary = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.primary')};
  color: ${({ theme }) => getTheme(theme, 'colors.liberWhite')};
  text-align: center;
  text-transform: uppercase;
  padding: 11px;
`;

const Primary70 = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.primary70')};
  color: ${({ theme }) => getTheme(theme, 'colors.liberWhite')};
  padding: 11px 18px;
  flex-grow: 1;
`;
const Primary38 = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.primary38')};
  color: ${({ theme }) => getTheme(theme, 'colors.liberBlue')};
  padding: 11px 18px;
  flex-grow: 1;
`;
const Primary6 = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.primary6')};
  color: ${({ theme }) => getTheme(theme, 'colors.liberBlue')};
  padding: 11px 18px;
  flex-grow: 1;
`;

const DarkText = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.dark-text')};
  color: ${({ theme }) => getTheme(theme, 'colors.liberWhite')};
  text-align: center;
  text-transform: uppercase;
  padding: 11px;
`;

const DarkText70 = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.dark-text70')};
  color: ${({ theme }) => getTheme(theme, 'colors.liberWhite')};
  padding: 11px 18px;
  flex-grow: 1;
`;
const DarkText38 = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.dark-text38')};
  color: #798e9b;
  padding: 11px 18px;
  flex-grow: 1;
`;
const DarkText6 = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.dark-text6')};
  color: #798e9b;
  padding: 11px 18px;
  flex-grow: 1;
`;

const LightText70 = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.light-text70')};
  color: #798e9b;
  padding: 11px 18px;
  border-right: 1px solid ${({ theme }) => getTheme(theme, 'colors.border')};
  flex-grow: 1;
`;
const LightText50 = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.light-text50')};
  color: #798e9b;
  padding: 11px 18px;
  border-right: 1px solid ${({ theme }) => getTheme(theme, 'colors.border')};
  flex-grow: 1;
`;
const LightText25 = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.light-text25')};
  color: #798e9b;
  padding: 11px 18px;
  flex-grow: 1;
`;

const LightText = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.light-text')};
  color: ${({ theme }) => getTheme(theme, 'colors.dark-text')};
  text-align: center;
  text-transform: uppercase;
  padding: 11px;
  border-bottom: 1px solid ${({ theme }) => getTheme(theme, 'colors.border')};
`;

const Success = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.success')};
  color: ${({ theme }) => getTheme(theme, 'colors.liberWhite')};
  text-align: center;
  text-transform: uppercase;
  padding: 11px;
`;

const Success70 = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.success70')};
  color: ${({ theme }) => getTheme(theme, 'colors.liberWhite')};
  padding: 11px 18px;
  flex-grow: 1;
`;
const Success38 = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.success38')};
  color: ${({ theme }) => getTheme(theme, 'colors.success')};
  padding: 11px 18px;
  flex-grow: 1;
`;
const Success6 = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.success6')};
  color: ${({ theme }) => getTheme(theme, 'colors.success')};
  padding: 11px 18px;
  flex-grow: 1;
`;
const Alert = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.alert')};
  color: ${({ theme }) => getTheme(theme, 'colors.liberWhite')};
  text-align: center;
  text-transform: uppercase;
  padding: 11px;
`;

const Alert70 = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.alert70')};
  color: ${({ theme }) => getTheme(theme, 'colors.liberWhite')};
  padding: 11px 18px;
  flex-grow: 1;
`;
const Alert38 = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.alert38')};
  color: ${({ theme }) => getTheme(theme, 'colors.alert')};
  padding: 11px 18px;
  flex-grow: 1;
`;
const Alert6 = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.alert6')};
  color: ${({ theme }) => getTheme(theme, 'colors.alert')};
  padding: 11px 18px;
  flex-grow: 1;
`;
const Error = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.error')};
  color: ${({ theme }) => getTheme(theme, 'colors.liberWhite')};
  text-align: center;
  text-transform: uppercase;
  padding: 11px;
`;

const Error70 = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.error70')};
  color: ${({ theme }) => getTheme(theme, 'colors.liberWhite')};
  padding: 11px 18px;
  flex-grow: 1;
`;
const Error38 = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.error38')};
  color: ${({ theme }) => getTheme(theme, 'colors.error')};
  padding: 11px 18px;
  flex-grow: 1;
`;
const Error6 = styled.div`
  background-color: ${({ theme }) => getTheme(theme, 'colors.error6')};
  color: ${({ theme }) => getTheme(theme, 'colors.error')};
  padding: 11px 18px;
  flex-grow: 1;
`;

const Border = styled.div`
  width: 172px;
  height: 72px;
  font-size: 12px;
  background-color: ${({ theme }) => getTheme(theme, 'colors.border')};
  color: ${({ theme }) => getTheme(theme, 'colors.dark-text')};
  margin-top: 12px;
  margin-right: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  & span {
    color: ${({ theme }) => getTheme(theme, 'colors.dark-text38')};
  }
`;
const Secondary = styled.div`
  width: 172px;
  height: 72px;
  font-size: 12px;
  background-color: ${({ theme }) => getTheme(theme, 'colors.secondary')};
  border: 1px solid ${({ theme }) => getTheme(theme, 'colors.border')};
  color: ${({ theme }) => getTheme(theme, 'colors.dark-text')};
  margin-top: 12px;
  margin-right: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  & span {
    color: ${({ theme }) => getTheme(theme, 'colors.dark-text38')};
  }
`;
const Header = styled.div`
  width: 172px;
  height: 72px;
  font-size: 12px;
  background-color: ${({ theme }) => getTheme(theme, 'colors.header')};
  border: 1px solid ${({ theme }) => getTheme(theme, 'colors.border')};
  color: ${({ theme }) => getTheme(theme, 'colors.dark-text')};
  margin-top: 12px;
  margin-right: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  & span {
    color: ${({ theme }) => getTheme(theme, 'colors.dark-text38')};
  }
`;

const Surface = styled.div`
  width: 172px;
  height: 72px;
  font-size: 12px;
  background-color: ${({ theme }) => getTheme(theme, 'colors.surface')};
  border: 1px solid ${({ theme }) => getTheme(theme, 'colors.border')};
  color: ${({ theme }) => getTheme(theme, 'colors.dark-text')};
  margin-top: 12px;
  margin-right: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  & span {
    color: ${({ theme }) => getTheme(theme, 'colors.dark-text38')};
  }
`;
const GenBackground = styled.div`
  width: 172px;
  height: 72px;
  font-size: 12px;
  background-color: ${({ theme }) => getTheme(theme, 'colors.general-background')};
  border: 1px solid ${({ theme }) => getTheme(theme, 'colors.border')};
  color: ${({ theme }) => getTheme(theme, 'colors.dark-text')};
  margin-top: 12px;
  margin-right: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  & span {
    color: ${({ theme }) => getTheme(theme, 'colors.dark-text38')};
  }
`;

const TBox = styled.div`
  width: 96px;
  height: 96px;
  background-color: ${({ theme }) => getTheme(theme, 'colors.gray7')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => getTheme(theme, 'colors.dark-text')};
  margin-right: 12px;
`;

const H1 = styled(TBox)`
  ${({ theme }) => getTheme(theme, 'typography.h1')};
`;
const H2 = styled(TBox)`
  ${({ theme }) => getTheme(theme, 'typography.h2')};
`;
const H3 = styled(TBox)`
  ${({ theme }) => getTheme(theme, 'typography.h3')};
`;
const H4 = styled(TBox)`
  ${({ theme }) => getTheme(theme, 'typography.h4')};
`;
const H5 = styled(TBox)`
  ${({ theme }) => getTheme(theme, 'typography.h5')};
`;
const H6 = styled(TBox)`
  ${({ theme }) => getTheme(theme, 'typography.h6')};
`;

const TSubhead = styled(TBox)`
  ${({ theme }) => getTheme(theme, 'typography.subhead')};
`;

const TBody = styled(TBox)`
  ${({ theme }) => getTheme(theme, 'typography.body')};
`;
const CaptionMd = styled(TBox)`
  ${({ theme }) => getTheme(theme, 'typography.captionMD')};
`;
const Caption = styled(TBox)`
  ${({ theme }) => getTheme(theme, 'typography.caption')};
`;
const OverlineMd = styled(TBox)`
  ${({ theme }) => getTheme(theme, 'typography.overlineMD')};
`;
const Overline = styled(TBox)`
  ${({ theme }) => getTheme(theme, 'typography.overline')};
`;

const Button = styled(TBox)`
  ${({ theme }) => getTheme(theme, 'typography.button')};
`;

export default {
  title: 'UI|Theme (v4)',
};

export const colors = () => (
  <ThemeProvider theme={Theme}>
    <Body>
      <Subhead>Colors</Subhead>
      <Row>
        <Box>
          <Primary>Primary</Primary>
          <Row>
            <Primary70>70%</Primary70>
            <Primary38>38%</Primary38>
            <Primary6>6%</Primary6>
          </Row>
        </Box>
        <Box>
          <DarkText>Texts</DarkText>
          <Row>
            <DarkText70>70%</DarkText70>
            <DarkText38>38%</DarkText38>
            <DarkText6>6%</DarkText6>
          </Row>
        </Box>
        <Box border>
          <LightText>Texts</LightText>
          <Row>
            <LightText70>70%</LightText70>
            <LightText50>50%</LightText50>
            <LightText25>25%</LightText25>
          </Row>
        </Box>
        <Box>
          <Success>Success</Success>
          <Row>
            <Success70>70%</Success70>
            <Success38>38%</Success38>
            <Success6>6%</Success6>
          </Row>
        </Box>
        <Box>
          <Alert>Alert</Alert>
          <Row>
            <Alert70>70%</Alert70>
            <Alert38>38%</Alert38>
            <Alert6>6%</Alert6>
          </Row>
        </Box>
        <Box>
          <Error>Error</Error>
          <Row>
            <Error70>70%</Error70>
            <Error38>38%</Error38>
            <Error6>6%</Error6>
          </Row>
        </Box>
      </Row>
      <Row>
        <Border>
          BORDERS/DIVIDERS
          <span>#405f71 - 12%</span>
        </Border>
        <Secondary>
          SECONDARY
          <span>#405f71 - 8%</span>
        </Secondary>
        <Header>
          HEADER
          <span>#405f71 - 3%</span>
        </Header>
        <Surface>
          SURFACE
          <span>#009DFF - 2%</span>
        </Surface>
        <GenBackground>
          GENERAL BACKGROUND
          <span>#FFFFFF</span>
        </GenBackground>
      </Row>
      <Row>
        <PrimaryButton version="2">Primary</PrimaryButton>
        <SecondaryButton version="2">Secondary</SecondaryButton>
        <SuccessButton version="2">Success</SuccessButton>
        <AlertButton version="2">Alert</AlertButton>
        <ErrorButton version="2">Error</ErrorButton>
      </Row>
    </Body>
  </ThemeProvider>
);

colors.story = {
  name: 'Colors',
};

export const typography = () => (
  <ThemeProvider theme={Theme}>
    <Body>
      <Subhead>Typography</Subhead>
      <Row>
        <H1>H1</H1>
        <H2>H2</H2>
        <H3>H3</H3>
        <H4>H4</H4>
        <H5>H5</H5>
        <H6>H6</H6>
      </Row>
      <Row>
        <TSubhead>Subhead</TSubhead>
        <TBody>Body</TBody>
        <Button>Button</Button>
        <CaptionMd>Caption MD</CaptionMd>
        <Caption>Caption</Caption>
        <OverlineMd>Overline MD</OverlineMd>
        <Overline>Overline</Overline>
      </Row>
    </Body>
  </ThemeProvider>
);

typography.story = {
  name: 'Typography',
};
