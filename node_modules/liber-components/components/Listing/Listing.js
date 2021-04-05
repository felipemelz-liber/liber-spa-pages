"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _numeral = _interopRequireDefault(require("numeral"));

var _Inputs = require("../Inputs");

var _Listing = require("./Listing.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

try {
  _numeral["default"].register('locale', 'liber', {
    delimiters: {
      thousands: '.',
      decimal: ''
    }
  });
} catch (e) {}

_numeral["default"].locale('liber');

var formatNumber = function formatNumber(number) {
  return (0, _numeral["default"])(parseInt(number, 10)).format('0,0');
};

var checkPlural = function checkPlural(number, singular, plural) {
  if (parseInt(number, 10) > 1) {
    return plural;
  }

  return singular;
};

var Listing = function Listing(_ref) {
  var listing = _ref.listing,
      total = _ref.total,
      listingRef = _ref.listingRef,
      onSelectListing = _ref.onSelectListing,
      listingLabelPlural = _ref.listingLabelPlural,
      listingLabelSingular = _ref.listingLabelSingular,
      showInterval = _ref.showInterval;
  return _react["default"].createElement(_Listing.ListingContainer, null, "Listar", _react["default"].createElement(_Listing.SelectContainer, null, _react["default"].createElement(_Inputs.SimpleSelect, {
    value: listing,
    onSelect: onSelectListing,
    ref: listingRef
  }, _react["default"].createElement("option", {
    value: "10"
  }, "10"), _react["default"].createElement("option", {
    value: "25"
  }, "25"), _react["default"].createElement("option", {
    value: "50"
  }, "50"), _react["default"].createElement("option", {
    value: "100"
  }, "100"))), "por p\xE1gina \u2002\u2022\u2002", ' ', showInterval ? "".concat(showInterval.start, "-").concat(showInterval.end) : 'total', " de", ' ', formatNumber(total), " ", checkPlural(total, listingLabelSingular, listingLabelPlural));
};

Listing.propTypes = {
  total: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  listing: _propTypes["default"].oneOf(['10', '25', '50', '100']),
  listingRef: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  onSelectListing: _propTypes["default"].func,
  listingLabelSingular: _propTypes["default"].string,
  listingLabelPlural: _propTypes["default"].string,
  showInterval: _propTypes["default"].shape({
    start: _propTypes["default"].string,
    end: _propTypes["default"].string
  })
};
Listing.defaultProps = {
  total: '',
  listing: '',
  onSelectListing: function onSelectListing() {},
  listingLabelSingular: 'título',
  listingLabelPlural: 'títulos',
  listingRef: function listingRef() {},
  showInterval: null
};
var _default = Listing;
exports["default"] = _default;