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

const InternalServerError = () => (
  <Fragment>
    <DesktopContainer>
      <DesktopBackground />
      <DesktopIllustration />
      <DesktopContent>
        <DesktopMessageBox>
          <h3>Desculpe, tivemos um problema interno...</h3>
          <h1>Mas já estamos arrumando tudo!</h1>
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
          <h3>Desculpe, tivemos um problema interno...</h3>
          <h1>Mas já estamos arrumando tudo!</h1>
          <a href="/">Voltar à página inicial</a>
        </MobileMessageBox>
      </MobileContent>
    </MobileContainer>
  </Fragment>
);

export default InternalServerError;
