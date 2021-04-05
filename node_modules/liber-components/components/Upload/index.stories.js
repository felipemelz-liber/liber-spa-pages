"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageUpload = exports.fileUpload = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _UploadContainer = _interopRequireDefault(require("./components/UploadContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Center",
  componentId: "sc-10xddel-0"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#fafdff;padding:64px;box-sizing:border-box;"]);

var _default = {
  title: 'Components 2.0|Upload',
  parameters: {
    jest: ['Upload']
  }
};
exports["default"] = _default;

var fileUpload = function fileUpload() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_UploadContainer["default"], {
    type: "file"
  }, "Selecione o arquivo"));
};

exports.fileUpload = fileUpload;
fileUpload.story = {
  name: 'file upload'
};

var imageUpload = function imageUpload() {
  return _react["default"].createElement(Center, null, _react["default"].createElement(_UploadContainer["default"], {
    type: "image"
  }, "Selecione a imagem"));
};

exports.imageUpload = imageUpload;
imageUpload.story = {
  name: 'image upload'
};