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
Object.defineProperty(exports, "TabContainer", {
  enumerable: true,
  get: function get() {
    return _Tabs.TabContainer;
  }
});
Object.defineProperty(exports, "TabContent", {
  enumerable: true,
  get: function get() {
    return _Tabs.TabContent;
  }
});
Object.defineProperty(exports, "TabContentDisplay", {
  enumerable: true,
  get: function get() {
    return _Tabs.TabContentDisplay;
  }
});
exports.DropDownTab = exports.SimpleTabs = exports.SimpleTab = exports.Tab = exports.Tabs = exports.TabHeader = void 0;

var _VersionWrapper = require("../Util/VersionWrapper");

var v1 = _interopRequireWildcard(require("./v1"));

var v2 = _interopRequireWildcard(require("./v2"));

var _Tabs = require("./v2/components/Tab/Tabs.styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TabHeader = v1.TabHeader;
exports.TabHeader = TabHeader;
var Tabs = (0, _VersionWrapper.wrapper)([v1.Tabs, v2.Tabs]);
exports.Tabs = Tabs;
var Tab = (0, _VersionWrapper.wrapper)([v1.Tab, v2.SimpleTab]);
exports.Tab = Tab;
var SimpleTab = v2.SimpleTab,
    SimpleTabs = v2.SimpleTabs,
    DropDownTab = v2.DropDownTab;
exports.DropDownTab = DropDownTab;
exports.SimpleTabs = SimpleTabs;
exports.SimpleTab = SimpleTab;