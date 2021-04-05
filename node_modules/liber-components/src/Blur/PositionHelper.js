export const getOverlayPosition = (backgroundRef, overlayRef) => {
  if (backgroundRef.current && overlayRef.current) {
    const bgRect = backgroundRef.current.getBoundingClientRect();
    const overlayRect = overlayRef.current.getBoundingClientRect();

    const offsetY = bgRect.height / 2 - overlayRect.height / 2;
    const offsetX = bgRect.width / 2 - overlayRect.width / 2;

    const isOverlayContainedY = overlayRect.height < bgRect.height;
    const isOverlayContainedX = overlayRect.width < bgRect.width;

    return {
      top: isOverlayContainedY ? bgRect.y + offsetY : bgRect.y,
      left: isOverlayContainedX ? bgRect.x + offsetX : bgRect.x,
      maxWidth: bgRect.width,
      maxHeight: bgRect.height,
    };
  }

  return { top: 0, left: 0, maxWidth: 0, maxHeight: 0 };
};
