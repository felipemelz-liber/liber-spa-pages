import React, { Fragment } from 'react';
import { DesktopContainer, MobileContainer, MobileBackground } from '../styles';
import {
  DesktopBackground,
  DesktopIllustration,
  DesktopContent,
  DesktopMessageBox,
  MobileIllustration,
  MobileContent,
  MobileBrand,
  MobileMessageBox,
} from './styles';

const Unprocessable = () => (
  <Fragment>
    <DesktopContainer>
      <DesktopBackground />
      <DesktopIllustration />
      <DesktopContent>
        <DesktopMessageBox>
          <h3>Desculpe, sua ação foi recusada.</h3>
          <h1>Talvez você não tenha permissão para isso...</h1>
          <a href="/">Voltar à página inicial</a>
        </DesktopMessageBox>
      </DesktopContent>
    </DesktopContainer>
    <MobileContainer>
      <MobileBackground />
      <MobileIllustration />
      <MobileContent>
        <MobileBrand />
        <MobileMessageBox>
          <h3>Desculpe, sua ação foi recusada.</h3>
          <h1>Talvez você não tenha permissão para isso...</h1>
          <a href="/">Voltar à página inicial</a>
        </MobileMessageBox>
      </MobileContent>
    </MobileContainer>
  </Fragment>
);

export default Unprocessable;
