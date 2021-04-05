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
`;

export const DesktopContent = styled.div`
  ${DesktopContentStyles}
  top: 25vh;
  left: 58vw;
  ${media.extraLarge`
    top: 29vh;
    left: 55vw;
  `}
`;

export const DesktopMessageBox = styled.div`
  ${DesktopMessageBoxStyles}
  max-width: 24vw;
  & h1 {
    margin-top: 0.3vw;
    margin-bottom: 1.9vw;
  }
  & h3 {
    margin-top: unset;
    margin-bottom: unset;
  }
  ${media.extraLarge`
    max-width: 18vw;
  `}
`;

export const MobileIllustration = styled(MobileIllustrationRaw)`
  ${MobileIllustrationStyles}
  left: unset;
  right: 5%;
  bottom: 3%;
  width: 40vh;
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
    font-size: 20px;
    margin-bottom: 20px;
  }
  & h3 {
    font-size: 14.5px;
    margin-top: unset;
    margin-bottom: unset;
  }
  & a {
    font-size: 14px;
    padding: 5px 28px;
  }
  ${media.medium`
    max-width: 325px;
    & h1 {
      font-size: 34px;
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
