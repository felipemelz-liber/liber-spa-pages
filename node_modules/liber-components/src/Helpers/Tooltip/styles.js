import styled, { css } from 'styled-components';
import { handleThemeFromObject as getTheme } from '../../Themes';
import { FaQuestionCircle } from '../../Icons';

const arrowSize = 18;

const CONTENT_MOUNT = {
  start: { percentage: 0, arrowSubtraction: 0, arrowOffset: arrowSize },
  middle: { percentage: 50, arrowSubtraction: 18, arrowOffset: 0 },
  end: {
    percentage: 100,
    arrowSubtraction: 36,
    arrowOffset: -1 * arrowSize,
  },
  unset: { percentage: 50, arrowSubtraction: 18, arrowOffset: 0 },
};

export const Container = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  fill: ${props => getTheme(props.theme, 'tooltip.fill', '#a4a4a4')};
  color: ${props => getTheme(props.theme, 'tooltip.color', '#717171')};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    fill: ${props => getTheme(props.theme, 'tooltip.hover', '#009DFF')};
  }

  @media (max-width: 992px) {
    width: 28px;
    height: 28px;
  }
`;

const positionFloat = props => {
  const { position, contentPosition } = props;
  const { arrowOffset, percentage } = CONTENT_MOUNT[contentPosition];
  switch (position) {
    /** floater tooltip styles */
    case 'mouse-right':
      return css`
        right: auto;
        transform: translate(${props.mousePadding}px, -50%);
      `;
    case 'mouse-left':
      return css`
        left: auto;
        transform: translate(calc(-100% - ${props.mousePadding}px), -50%);
      `;
    case 'mouse-top':
      return css`
        top: auto;
        transform: translate(-50%, calc(-100% - ${props.mousePadding}px));
      `;
    case 'mouse-bottom':
      return css`
        right: auto;
        transform: translate(-50%, ${props.mousePadding}px);
      `;
    case 'content-right':
      return css`
        right: auto;
        transform: translate(${props.mousePadding}px, calc(-${percentage}% - ${arrowOffset}px));
      `;
    case 'content-left':
      return css`
        left: auto;
        transform: translate(
          calc(-100% - ${props.mousePadding}px),
          calc(-${percentage}% - ${arrowOffset}px)
        );
      `;
    case 'content-top':
      return css`
        top: auto;
        transform: translate(
          calc(-${percentage}% - ${arrowOffset}px),
          calc(-100% - ${props.mousePadding}px)
        );
      `;
    case 'content-bottom':
      return css`
        bottom: auto;
        transform: translate(calc(-${percentage}% - ${arrowOffset}px), ${props.mousePadding}px);
      `;
    /* fixed tooltip styles */
    case 'bottom-right':
      return css`
        left: 0px;
        right: auto;
        top: ${props.visible ? '0px' : '10px'};
        transform: translate(30px, 30px);
      `;
    case 'bottom-center':
      return css`
        top: ${props.visible ? '0px' : '10px'};
        transform: translate(0px, 30px);
      `;
    case 'bottom-left':
      return css`
        left: auto;
        right: 0px;
        top: ${props.visible ? '0px' : '10px'};
        transform: translate(-30px, 30px);
      `;
    case 'center-right':
      return css`
        bottom: 50%;
        right: auto;
        left: ${props.visible ? '0px' : '10px'};
        transform: translate(30px, 30px);
      `;
    case 'center-left':
      return css`
        bottom: 50%;
        left: auto;
        right: ${props.visible ? '0px' : '-10px'};
        transform: translate(-30px, 30px);
      `;
    case 'top-right':
      return css`
        left: 0px;
        right: auto;
        bottom: ${props.visible ? '0px' : '-10px'};
        transform: translate(30px, -30px);
      `;
    case 'top-center':
      return css`
        bottom: ${props.visible ? '0px' : '-10px'};
        transform: translate(0px, -30px);
      `;
    case 'top-left':
    default:
      return css`
        left: auto;
        right: 0px;
        bottom: ${props.visible ? '0px' : '-10px'};
        transform: translate(-30px, -30px);
      `;
  }
};

const positionArrow = props => {
  const { mount, contentPosition } = props;
  const { percentage, arrowSubtraction } = CONTENT_MOUNT[contentPosition];

  switch (mount) {
    case 'left':
      return css`
        width: 5px !important;
        height: 36px !important;
        top: calc((${percentage}%) - ${arrowSubtraction}px);
        left: 100%;
      `;
    case 'top':
      return css`
        width: 36px !important;
        height: 5px !important;
        left: calc((${percentage}%) - ${arrowSubtraction}px);
        top: 100%;
      `;
    case 'bottom':
      return css`
        width: 36px !important;
        height: 5px !important;
        left: calc((${percentage}%) - ${arrowSubtraction}px);
        bottom: 100%;
      `;
    case 'right':
    default:
      return css`
        width: 5px !important;
        height: 36px !important;
        top: calc((${percentage}%) - ${arrowSubtraction}px);
        right: 100%;
      `;
  }
};
const positionArrowAfter = props => {
  switch (props.mount) {
    case 'left':
      return css`
        top: calc(50% - 7.5px);
        right: calc(100% - 7.5px);
      `;
    case 'top':
      return css`
        left: calc(50% - 7.5px);
        bottom: calc(100% - 7.5px);
      `;
    case 'bottom':
      return css`
        left: calc(50% - 7.5px);
        top: calc(100% - 7.5px);
      `;
    case 'right':
    default:
      return css`
        top: calc(50% - 7.5px);
        left: calc(100% - 7.5px);
      `;
  }
};

export const Arrow = styled.div`
  position: absolute;
  ${props => positionArrow(props)}
  overflow: hidden;
  pointer-events: none;
  padding: 8px;
  box-sizing: border-box;

  &::after {
    content: '';
    position: absolute;
    pointer-events: none;
    width: 15px;
    height: 15px;
    background: #fff;
    transform: rotate(45deg);
    ${props => positionArrowAfter(props)}
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  }
`;

const mousePositions = [
  'mouse-right',
  'mouse-left',
  'mouse-top',
  'mouse-bottom',
  'content-right',
  'content-left',
  'content-top',
  'content-bottom',
];

export const Float = styled.div.attrs(({ position, x, y }) => ({
  style: {
    left: mousePositions.includes(position) ? x : undefined,
    top: mousePositions.includes(position) ? y : undefined,
  },
}))`
  position: absolute;
  border-radius: 4px;
  background-color: ${props => getTheme(props.theme, 'colors.v2.white', '#fff')};
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  z-index: 9999;
  display: block;
  pointer-events: ${props => (props.visible && !props.hoverable ? 'auto' : 'none')};
  opacity: ${props => (props.visible ? '1' : '0')};
  transition: ${props => (mousePositions.includes(props.position) ? null : 'all 0.1s ease')};
  color: ${props => getTheme(props.theme, 'colors.v2.grey4', '#6287a7')};
  font-size: ${props => getTheme(props.theme, 'fontSizes.mobileLarge', '14px')};
  font-weight: ${props => getTheme(props.theme, 'fontWeights.regular', '400')};
  line-height: 20px;

  ${props => positionFloat(props)}

  & * {
    pointer-events: none;
  }

  & > h6 {
    font-weight: bold;
    margin: 0px;
    opacity: 0.75;
    font-family: inherit;
    font-size: 14px;
    text-align: left;
    color: ${props => getTheme(props.theme, 'tooltip.floatPrimary', '#009DFF')};
    background-color: ${props => getTheme(props.theme, 'tooltip.floatBgSecondary', '#fafafa')};
    padding: 6px 0px;
    text-align: center;
    user-select: none;
  }
  & > div {
    display: flex;
    width: auto;
    justify-content: flex-start;
    align-items: center;
    padding: 12px;
    overflow: hidden;
  }
`;

export const Icon = styled(FaQuestionCircle)`
  width: inherit;
  height: inherit;
  cursor: pointer;
`;
