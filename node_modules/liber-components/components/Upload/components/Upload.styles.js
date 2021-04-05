"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImagePreviewIconContainer = exports.ImagePreview = exports.CircleProgress = exports.CircleBackground = exports.UploadProgress = exports.UploadLabel = exports.UploadFile = exports.InputFile = exports.CameraIcon = exports.FileIcon = exports.CheckIcon = exports.PlusIcon = exports.Circle = exports.IconContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icons = require("../../Icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var icon = (0, _styledComponents.css)(["position:absolute;width:28px;height:29px;"]);

var IconContainer = _styledComponents["default"].div.withConfig({
  displayName: "Uploadstyles__IconContainer",
  componentId: "wiyd81-0"
})(["margin-bottom:12px;margin-right:11px;"]);

exports.IconContainer = IconContainer;

var Circle = _styledComponents["default"].div.withConfig({
  displayName: "Uploadstyles__Circle",
  componentId: "wiyd81-1"
})(["display:flex;justify-content:center;flex-direction:column;align-items:center;width:20px;height:20px;border-radius:10px;box-shadow:0 0.5px 2px 0 rgba(0,0,0,0.12);position:relative;top:12px;left:11px;background-color:#ffffff;"]);

exports.Circle = Circle;
var PlusIcon = (0, _styledComponents["default"])(_Icons.MdPlus).withConfig({
  displayName: "Uploadstyles__PlusIcon",
  componentId: "wiyd81-2"
})(["width:16px;height:16px;fill:#798e9b;"]);
exports.PlusIcon = PlusIcon;
var CheckIcon = (0, _styledComponents["default"])(_Icons.MdCheck).withConfig({
  displayName: "Uploadstyles__CheckIcon",
  componentId: "wiyd81-3"
})(["width:16px;height:16px;fill:#13ce66;"]);
exports.CheckIcon = CheckIcon;
var FileIcon = (0, _styledComponents["default"])(_Icons.MdFile).withConfig({
  displayName: "Uploadstyles__FileIcon",
  componentId: "wiyd81-4"
})(["", " fill:", ";"], icon, function (props) {
  return props.selected ? '#798e9b' : '#b6c2c9';
});
exports.FileIcon = FileIcon;
var CameraIcon = (0, _styledComponents["default"])(_Icons.MdCamera).withConfig({
  displayName: "Uploadstyles__CameraIcon",
  componentId: "wiyd81-5"
})(["", " fill:", ";"], icon, function (props) {
  return props.selected ? '#798e9b' : '#b6c2c9';
});
exports.CameraIcon = CameraIcon;

var InputFile = _styledComponents["default"].input.withConfig({
  displayName: "Uploadstyles__InputFile",
  componentId: "wiyd81-6"
})(["overflow:hidden;position:absolute;z-index:-1;& +label{font-family:Roboto;font-size:16px;color:#8c9fa9;display:inline-block;}"]);

exports.InputFile = InputFile;

var UploadFile = _styledComponents["default"].label.withConfig({
  displayName: "Uploadstyles__UploadFile",
  componentId: "wiyd81-7"
})(["width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;border:dashed 1px #e8ebee;background-color:#f9fafa;padding:32px;position:relative;&:hover{cursor:pointer;}"]);

exports.UploadFile = UploadFile;

var UploadLabel = _styledComponents["default"].label.withConfig({
  displayName: "Uploadstyles__UploadLabel",
  componentId: "wiyd81-8"
})(["color:#798e9b;cursor:pointer;padding-left:", ";"], function (props) {
  return props.image ? '4px' : '0px';
});

exports.UploadLabel = UploadLabel;

var UploadProgress = _styledComponents["default"].div.withConfig({
  displayName: "Uploadstyles__UploadProgress",
  componentId: "wiyd81-9"
})(["color:#405f71;font-family:Roboto;"]);

exports.UploadProgress = UploadProgress;

var CircleBackground = _styledComponents["default"].circle.withConfig({
  displayName: "Uploadstyles__CircleBackground",
  componentId: "wiyd81-10"
})(["fill:none;stroke:transparent;"]);

exports.CircleBackground = CircleBackground;

var CircleProgress = _styledComponents["default"].circle.withConfig({
  displayName: "Uploadstyles__CircleProgress",
  componentId: "wiyd81-11"
})(["fill:none;stroke:#009dff;"]);

exports.CircleProgress = CircleProgress;

var ImagePreview = _styledComponents["default"].div.withConfig({
  displayName: "Uploadstyles__ImagePreview",
  componentId: "wiyd81-12"
})(["background:url(", ") no-repeat center;background-size:cover;position:absolute;width:100%;height:100%;z-index:99;"], function (_ref) {
  var image = _ref.image;
  return image;
});

exports.ImagePreview = ImagePreview;

var ImagePreviewIconContainer = _styledComponents["default"].div.withConfig({
  displayName: "Uploadstyles__ImagePreviewIconContainer",
  componentId: "wiyd81-13"
})(["display:flex;background-color:#ffffff;padding:8px;align-items:center;position:absolute;bottom:0px;"]);

exports.ImagePreviewIconContainer = ImagePreviewIconContainer;