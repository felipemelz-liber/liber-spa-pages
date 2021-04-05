"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showScrollBar = exports.hideScrollBar = exports.defaultDuration = exports.getBgTransitionStyle = void 0;

var getBgTransitionStyle = function getBgTransitionStyle(duration) {
  return {
    entering: {
      opacity: 0
    },
    entered: {
      opacity: 0.15,
      transition: "opacity ".concat(duration, "ms cubic-bezier(0.47, 0, 0.745, 0.715)")
    },
    exiting: {
      opacity: 0,
      transition: "opacity ".concat(duration, "ms cubic-bezier(0.39, 0.575, 0.565, 1)"),
      transitionDelay: "".concat(duration, "ms")
    },
    exited: {
      opacity: 0
    }
  };
};

exports.getBgTransitionStyle = getBgTransitionStyle;
var defaultDuration = 270;
exports.defaultDuration = defaultDuration;

var hideScrollBar = function hideScrollBar(target) {
  var body = target;
  var pos = window.scrollY;
  body.classList.add('modal-open');
  body.style.top = "-".concat(pos, "px");
  return pos;
};

exports.hideScrollBar = hideScrollBar;

var showScrollBar = function showScrollBar(target, pos) {
  var body = target;
  body.classList.remove('modal-open');
  body.style.top = '';
  window.scrollTo(0, pos);
};

exports.showScrollBar = showScrollBar;