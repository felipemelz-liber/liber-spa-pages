"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _numeral = _interopRequireDefault(require("numeral"));

var _Pagination = require("./Pagination.styles");

var _Listing = _interopRequireDefault(require("../Listing"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var noOp = function noOp() {};

try {
  _numeral["default"].register('locale', 'liber', {
    delimiters: {
      thousands: '.',
      decimal: ''
    }
  });
} catch (e) {
  noOp();
}

_numeral["default"].locale('liber');

var formatNumber = function formatNumber(number) {
  return (0, _numeral["default"])(parseInt(number, 10)).format('0,0');
};

var Pagination = function Pagination(_ref) {
  var page = _ref.page,
      pageTotal = _ref.pageTotal,
      onChangePage = _ref.onChangePage,
      onKeyDownPage = _ref.onKeyDownPage,
      onClickNext = _ref.onClickNext,
      onClickPrev = _ref.onClickPrev,
      pageRef = _ref.pageRef,
      withListing = _ref.withListing,
      listingProps = _ref.listingProps;
  return _react["default"].createElement(_Pagination.Container, null, withListing ? _react["default"].createElement(_Listing["default"], listingProps) : null, _react["default"].createElement(_Pagination.PageContainer, null, "P\xE1gina", _react["default"].createElement(_Pagination.PageInput, {
    ref: pageRef,
    value: page,
    onChange: onChangePage,
    onKeyDown: onKeyDownPage
  }), "de ", formatNumber(pageTotal), _react["default"].createElement(_Pagination.PrevButton, {
    onClick: onClickPrev,
    disabled: parseInt(page, 10) === 1
  }), _react["default"].createElement(_Pagination.NextButton, {
    onClick: onClickNext,
    disabled: parseInt(page, 10) === parseInt(pageTotal, 10)
  })));
};

Pagination.propTypes = {
  withListing: _propTypes["default"].bool,
  pageTotal: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  page: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  pageRef: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  onChangePage: _propTypes["default"].func,
  onKeyDownPage: _propTypes["default"].func,
  onClickNext: _propTypes["default"].func,
  onClickPrev: _propTypes["default"].func,
  listingProps: _propTypes["default"].shape({
    total: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
    listing: _propTypes["default"].oneOf(['10', '25', '50', '100']),
    listingRef: _propTypes["default"].oneOfType([_propTypes["default"].any]),
    onSelectListing: _propTypes["default"].func,
    listingLabelSingular: _propTypes["default"].string,
    listingLabelPlural: _propTypes["default"].string
  })
};
Pagination.defaultProps = {
  page: '',
  pageTotal: '',
  listingProps: {},
  pageRef: function pageRef() {},
  onChangePage: function onChangePage() {},
  onKeyDownPage: function onKeyDownPage() {},
  onClickNext: function onClickNext() {},
  onClickPrev: function onClickPrev() {},
  withListing: false
};
var _default = Pagination;
exports["default"] = _default;