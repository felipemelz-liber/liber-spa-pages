import styled from 'styled-components';
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
`;

export const DesktopMessageBox = styled.div`
  ${DesktopMessageBoxStyles}
`;

export const MobileIllustration = styled(MobileIllustrationRaw)`
  ${MobileIllustrationStyles}
`;

export const MobileContent = styled.div`
  ${MobileContentStyles}
`;

export const MobileBrand = styled(MobileBrandRaw)`
  ${MobileBrandStyles}
`;

export const MobileMessageBox = styled(DesktopMessageBox)`
  ${MobileMessageBoxStyles}
`;

export const GreenLink = styled.a`
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
`;
