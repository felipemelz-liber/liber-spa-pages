"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withListing = exports.defaultStory = exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Center = _styledComponents["default"].div.withConfig({
  displayName: "indexstories__Center",
  componentId: "v2f525-0"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#fafdff;padding:64px;box-sizing:border-box;"]);

var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Page);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Page)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      listing: '10',
      page: '1'
    }, _this.handleChangePage = function (_ref) {
      var target = _ref.target;

      _this.setState({
        page: target.value
      });
    }, _this.handleSelectListing = function (listing) {
      _this.setState({
        listing: listing
      });
    }, _this.onClickNext = function () {
      _this.setState(function (state) {
        return {
          page: "".concat(parseInt(state.page, 10) + 1)
        };
      });
    }, _this.onClickPrev = function () {
      _this.setState(function (state) {
        return {
          page: "".concat(parseInt(state.page, 10) - 1)
        };
      });
    }, _this.onKeyDownPage = function (_ref2) {
      var key = _ref2.key,
          target = _ref2.target;

      if (key === 'Enter') {
        alert("P\xE1gina ".concat(target.value, " selecionada"));
      }
    }, _temp));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      var withListing = this.props.withListing;
      return _react["default"].createElement(_Pagination["default"], {
        page: this.state.page,
        pageTotal: "135",
        onChangePage: this.handleChangePage,
        onClickNext: this.onClickNext,
        onClickPrev: this.onClickPrev,
        onKeyDownPage: this.onKeyDownPage,
        withListing: withListing,
        listingProps: {
          onSelectListing: this.handleSelectListing,
          listing: this.state.listing,
          total: '1347'
        }
      });
    }
  }]);

  return Page;
}(_react["default"].Component);

Page.propTypes = {
  withListing: _propTypes["default"].bool.isRequired
};
var _default = {
  title: 'Components 2.0|Pagination',
  parameters: {
    jest: ['KeyValueDropDown']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("div", {
    id: "tooltip"
  }), _react["default"].createElement(Center, null, _react["default"].createElement(Page, {
    withListing: false
  })));
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};

var withListing = function withListing() {
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("div", {
    id: "tooltip"
  }), _react["default"].createElement(Center, null, _react["default"].createElement(Page, {
    withListing: true
  })));
};

exports.withListing = withListing;
withListing.story = {
  name: 'with listing'
};