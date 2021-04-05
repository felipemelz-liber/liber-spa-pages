'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MrAuto = exports.LoggedIn = exports.DropDownSeparator = exports.NavDropDownMenu = exports.NavDropDownLink = exports.NavLink = exports.ResponsiveNavDropDownItem = exports.NavDropDownItem = exports.ResponsiveNavItem = exports.NavItem = exports.NavList = exports.NavLogo = exports.Nav = exports.UserIcon = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Logo = require('../Logo');

var _Icons = require('../Icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserIcon = exports.UserIcon = (0, _styledComponents2.default)(_Icons.FaUser).withConfig({
  displayName: 'styles__UserIcon',
  componentId: 'e9mwi9-0'
})(['width:15px;height:15px;margin-right:5px;']);

var Nav = exports.Nav = _styledComponents2.default.nav.withConfig({
  displayName: 'styles__Nav',
  componentId: 'e9mwi9-1'
})(['position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;background:white;padding:0;margin-bottom:15px;']);

var NavLogo = exports.NavLogo = (0, _styledComponents2.default)(_Logo.Logo).withConfig({
  displayName: 'styles__NavLogo',
  componentId: 'e9mwi9-2'
})(['margin-right:28.8px;display:inline-flex;']);

var NavList = exports.NavList = _styledComponents2.default.ul.withConfig({
  displayName: 'styles__NavList',
  componentId: 'e9mwi9-3'
})(['display:flex;padding-left:0;list-style:none;margin:0;margin-top:15px;@media (min-width:576px){margin-top:15px;}@media (min-width:768px){margin-top:15px;}@media (min-width:992px){margin-top:0px;}@media (min-width:1200px){margin-top:0px}']);

var NavItem = exports.NavItem = _styledComponents2.default.li.withConfig({
  displayName: 'styles__NavItem',
  componentId: 'e9mwi9-4'
})(['margin:0px 6px;position:relative;display:none;&[role=separator]{margin:initial;height:1px;margin:0.5rem 0;overflow:hidden;background-color:#eceeef;}@media (min-width:576px){display:none;}@media (min-width:768px){display:none;}@media (min-width:992px){display:inherit;}@media (min-width:1200px){display:inherit;}']);
var ResponsiveNavItem = exports.ResponsiveNavItem = (0, _styledComponents2.default)(NavItem).withConfig({
  displayName: 'styles__ResponsiveNavItem',
  componentId: 'e9mwi9-5'
})(['display:inherit;@media (min-width:576px){display:inherit;}@media (min-width:768px){display:inherit;}']);

var NavDropDownItem = exports.NavDropDownItem = (0, _styledComponents2.default)(ResponsiveNavItem).withConfig({
  displayName: 'styles__NavDropDownItem',
  componentId: 'e9mwi9-6'
})(['margin:0px;']);

var ResponsiveNavDropDownItem = exports.ResponsiveNavDropDownItem = (0, _styledComponents2.default)(NavDropDownItem).withConfig({
  displayName: 'styles__ResponsiveNavDropDownItem',
  componentId: 'e9mwi9-7'
})(['@media (min-width:576px){display:inherit;}@media (min-width:768px){display:inherit;}@media (min-width:992px){display:none;}@media (min-width:1200px){display:none;}']);

var NavLink = exports.NavLink = _styledComponents2.default.a.withConfig({
  displayName: 'styles__NavLink',
  componentId: 'e9mwi9-8'
})(['font-size:17.1px;font-weight:200;text-align:left;color:', ';display:block;padding:36px 10.8px;padding-left:', ';cursor:pointer;&:hover{color:#009dff;}&:after{display:', ';width:0;height:0;margin-left:6px;vertical-align:middle;content:"";border-top:0.3em solid;border-right:0.3em solid transparent;border-left:0.3em solid transparent;}'], function (props) {
  return props.active ? '#009dff' : '#888888';
}, function (props) {
  return props.leftPadding ? props.leftPadding + '!important' : '0.6rem';
}, function (props) {
  return props.arrow ? 'inline-block' : 'none';
});
var NavDropDownLink = exports.NavDropDownLink = (0, _styledComponents2.default)(NavLink).withConfig({
  displayName: 'styles__NavDropDownLink',
  componentId: 'e9mwi9-9'
})(['padding:0;margin:0 1rem;display:block;line-height:2.5rem;']);

var NavDropDownMenu = exports.NavDropDownMenu = _styledComponents2.default.ul.withConfig({
  displayName: 'styles__NavDropDownMenu',
  componentId: 'e9mwi9-10'
})(['position:absolute;top:100%;left:auto;right:0;z-index:1000;float:left;min-width:200px;padding:0.5rem 0;margin:0.125rem 0 0;font-size:1rem;color:#292b2c;font-weight:400;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.15);border-radius:0.25rem;border-bottom:4px solid #009DFF;font-family:Roboto;']);

var DropDownSeparator = exports.DropDownSeparator = _styledComponents2.default.li.withConfig({
  displayName: 'styles__DropDownSeparator',
  componentId: 'e9mwi9-11'
})(['height:1px;margin:0.5rem 0;overflow:hidden;background-color:#eceeef;']);

var LoggedIn = exports.LoggedIn = _styledComponents2.default.div.withConfig({
  displayName: 'styles__LoggedIn',
  componentId: 'e9mwi9-12'
})(['padding:0 10px;display:flex;align-items:center;']);

var MrAuto = exports.MrAuto = _styledComponents2.default.span.withConfig({
  displayName: 'styles__MrAuto',
  componentId: 'e9mwi9-13'
})(['margin-right:auto !important;']);