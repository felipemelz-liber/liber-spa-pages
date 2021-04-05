"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Upload = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _lodash = _interopRequireDefault(require("lodash"));

var _Upload = require("./Upload.styles");

var _CircularProgressBar = _interopRequireDefault(require("./CircularProgressBar"));

var _actions = require("../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var genId = function genId() {
  return Math.random().toString(36).substr(2, 5);
};

var Upload =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Upload, _React$Component);

  function Upload(props) {
    var _this;

    _classCallCheck(this, Upload);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Upload).call(this, props));

    _this.handleChange = function (e) {
      var _this$props = _this.props,
          onUploadFiles = _this$props.onUploadFiles,
          actionURL = _this$props.actionURL;
      var files = e.target.files;
      onUploadFiles(files[0], actionURL, _this.id);
    };

    _this.renderIcon = function (uploadProgress) {
      var type = _this.props.type;

      switch (type) {
        case 'image':
          return _react["default"].createElement(_Upload.CameraIcon, {
            selected: !!uploadProgress
          });

        default:
          return _react["default"].createElement(_Upload.FileIcon, {
            selected: !!uploadProgress
          });
      }
    };

    _this.renderCircleIcon = function (uploadProgress) {
      if (uploadProgress && uploadProgress < 100) {
        return _react["default"].createElement(_CircularProgressBar["default"], {
          strokeWidth: 2,
          sqSize: 20,
          percentage: uploadProgress
        });
      }

      if (uploadProgress === 100) {
        return _react["default"].createElement(_Upload.CheckIcon, null);
      }

      return _react["default"].createElement(_Upload.PlusIcon, null);
    };

    _this.id = _lodash["default"].uniqueId(genId());
    return _this;
  }

  _createClass(Upload, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          accept = _this$props2.accept,
          children = _this$props2.children,
          getFile = _this$props2.getFile;
      var uploadedFile = getFile(this.id);
      var fileName = uploadedFile ? uploadedFile.originalname : '';
      var imagePreview = uploadedFile ? uploadedFile.imageURL : '';
      var uploadProgress = uploadedFile ? uploadedFile.uploadProgress : 0;
      return _react["default"].createElement(_Upload.UploadFile, {
        htmlFor: "file"
      }, _react["default"].createElement(_Upload.InputFile, {
        type: "file",
        id: "file",
        accept: accept,
        onChange: this.handleChange
      }), imagePreview && _react["default"].createElement(_Upload.ImagePreview, {
        image: imagePreview
      }, _react["default"].createElement(_Upload.ImagePreviewIconContainer, null, _react["default"].createElement(_Upload.CheckIcon, null), _react["default"].createElement(_Upload.UploadLabel, {
        image: imagePreview,
        htmlFor: "file"
      }, fileName))), _react["default"].createElement(_Upload.IconContainer, null, this.renderIcon(uploadProgress), _react["default"].createElement(_Upload.Circle, null, this.renderCircleIcon(uploadProgress))), _react["default"].createElement(_Upload.UploadLabel, {
        htmlFor: "file"
      }, fileName || children), !!uploadProgress && uploadProgress < 100 && _react["default"].createElement(_Upload.UploadProgress, null, uploadProgress, "%"));
    }
  }]);

  return Upload;
}(_react["default"].Component);

exports.Upload = Upload;
Upload.propTypes = {
  accept: _propTypes["default"].string,
  actionURL: _propTypes["default"].string,
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].element), _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  getFile: _propTypes["default"].func,
  onUploadFiles: _propTypes["default"].func,
  type: _propTypes["default"].string
};
Upload.defaultProps = {
  accept: '',
  actionURL: '',
  children: '',
  getFile: function getFile() {},
  onUploadFiles: function onUploadFiles() {},
  type: 'file'
};
var mapDispatchToProps = {
  onUploadFiles: _actions.uploadFiles
};

var mapStateToProps = function mapStateToProps(_ref) {
  var files = _ref.files;
  return {
    getFile: function getFile(id) {
      return files[id];
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(Upload, _extends({
    innerRef: ref
  }, props));
})); // eslint-disable-line


exports["default"] = _default;