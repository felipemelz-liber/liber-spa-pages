import React from 'react';
import PropTypes from 'prop-types';
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
  GreenLink,
} from './styles';

const NotFound = ({ linkComponent, url }) => {
  const link = React.cloneElement(linkComponent, {
    href: url,
  });
  return (
    <>
      <DesktopContainer>
        <DesktopBackground />
        <DesktopIllustration />
        <DesktopContent>
          <DesktopMessageBox>
            <h1>Acho que pegamos uma trilha errada...</h1>
            <h3>Não encontrei essa página.</h3>
            {link}
          </DesktopMessageBox>
        </DesktopContent>
      </DesktopContainer>
      <MobileContainer>
        <MobileBackground />
        <MobileIllustration />
        <MobileContent>
          <MobileBrand />
          <MobileMessageBox>
            <h1>Acho que pegamos uma trilha errada...</h1>
            <h3>Não encontrei essa página.</h3>
            {link}
          </MobileMessageBox>
        </MobileContent>
      </MobileContainer>
    </>
  );
};

NotFound.propTypes = {
  url: PropTypes.string,
  linkComponent: PropTypes.oneOfType([PropTypes.any]),
};

NotFound.defaultProps = {
  url: '/',
  linkComponent: <GreenLink>Voltar à página inicial</GreenLink>,
};

export default NotFound;
