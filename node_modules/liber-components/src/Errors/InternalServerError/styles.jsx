import styled from 'styled-components';
import { media } from '../../Util';
import Background from './Background';
import DesktopIllustrationRaw from './DesktopIllustration';
import MobileIllustrationRaw from './MobileIllustration';
import MobileBrandRaw from './MobileBrand';

import {
  DesktopBackgroundStyles,
  DesktopIllustrationStyles,
  DesktopContentStyles,
  DesktopMessageBoxStyles,
  MobileIllustrationStyles,
  MobileContentStyles,
  MobileBrandStyles,
  MobileMessageBoxStyles,
} from '../styles';

export const DesktopBackground = styled(Background)`
  ${DesktopBackgroundStyles}
`;

export const DesktopIllustration = styled(DesktopIllustrationRaw)`
  ${DesktopIllustrationStyles}
  top: 20vh;
  left: 13vw;
  width: 42.5vw;

  ${media.extraLarge`
    top: 20vh;
    left: 15vw;
    width: 40vw;
  `}
`;

export const DesktopContent = styled.div`
  ${DesktopContentStyles}
  top: 25vh;
  left: 57vw;
  ${media.extraLarge`
    top: 29vh;
    left: 57vw;
  `}
`;

export const DesktopMessageBox = styled.div`
  ${DesktopMessageBoxStyles}
  max-width: 20vw;

  & h1 {
    font-size: 2.75vw;
    margin-top: 0.3vw;
    margin-bottom: 1.9vw;
  }
  & h3 {
    font-size: 1.9vw;
    margin-top: unset;
    margin-bottom: unset;
  }
  ${media.extraLarge`
    max-width: 15vw;
    & h1 { font-size: 2.15vw; }
    & h3 { font-size: 1.4vw; }
  `}
`;

export const MobileIllustration = styled(MobileIllustrationRaw)`
  ${MobileIllustrationStyles}
  left: 0;
  bottom: 0;
  width: 40vh;

  ${media.medium`
    width: 45vh;
  `}
`;

export const MobileContent = styled.div`
  ${MobileContentStyles}
`;

export const MobileBrand = styled(MobileBrandRaw)`
  ${MobileBrandStyles}
`;

export const MobileMessageBox = styled(DesktopMessageBox)`
  ${MobileMessageBoxStyles}
  margin-top: 25px;

  & h1 {
    font-size: 26px;
    margin-bottom: 20px;
  }
  & h3 {
    font-size: 20px;
    margin-top: unset;
    margin-bottom: unset;
  }
  & a {
    font-size: 14px;
    padding: 5px 28px;
  }
  ${media.medium`
    max-width: 225px;
    & h1 {
      font-size: 30px;
      margin-bottom: 32px;
    }
    & h3 {
      font-size: 24px;
      margin-top: unset;
      margin-bottom: unset;
    }
    & a {
      font-size: 18px;
    }
  `}
`;
