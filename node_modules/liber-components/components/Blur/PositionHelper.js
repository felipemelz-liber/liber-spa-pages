"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOverlayPosition = void 0;

var getOverlayPosition = function getOverlayPosition(backgroundRef, overlayRef) {
  if (backgroundRef.current && overlayRef.current) {
    var bgRect = backgroundRef.current.getBoundingClientRect();
    var overlayRect = overlayRef.current.getBoundingClientRect();
    var offsetY = bgRect.height / 2 - overlayRect.height / 2;
    var offsetX = bgRect.width / 2 - overlayRect.width / 2;
    var isOverlayContainedY = overlayRect.height < bgRect.height;
    var isOverlayContainedX = overlayRect.width < bgRect.width;
    return {
      top: isOverlayContainedY ? bgRect.y + offsetY : bgRect.y,
      left: isOverlayContainedX ? bgRect.x + offsetX : bgRect.x,
      maxWidth: bgRect.width,
      maxHeight: bgRect.height
    };
  }

  return {
    top: 0,
    left: 0,
    maxWidth: 0,
    maxHeight: 0
  };
};

exports.getOverlayPosition = getOverlayPosition;