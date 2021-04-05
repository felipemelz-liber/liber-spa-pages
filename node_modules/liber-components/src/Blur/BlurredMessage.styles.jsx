import styled from 'styled-components';

export const BlurredBackground = styled.div`
  --blur: ${({ blur }) => blur || 0}px;
  filter: blur(var(--blur));
  width: 100%;
  height: 100%;
  pointer-events: ${({ blur }) => (blur > 0 ? 'none' : 'all')};
  position: relative;
  user-select: ${({ blur }) => (blur > 0 ? 'none' : 'initial')};
`;

export const Overlay = styled.div`
  z-index: 200;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  max-height: ${({ maxHeight }) => maxHeight}px;
  max-width: ${({ maxWidth }) => maxWidth}px;
`;
