'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _styles = require('./styles');

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function validateTab(props, propName, componentName) {
  var children = props[propName];
  if (children.constructor !== Array) {
    children = Array(children);
  }
  children.forEach(function (child) {
    if (child.type !== _Tab2.default && child.type !== _Header2.default) {
      return new Error(componentName + ' only accept Tab or TabHeader as children.');
    }
    return null;
  });
  return null;
}

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.dispartChildren = function (children) {
      var tabChildren = _react2.default.Children.toArray(children).filter(function (child) {
        return child.type === _Tab2.default;
      });
      var tabHeader = _react2.default.Children.toArray(children).filter(function (child) {
        return child.type === _Header2.default;
      })[0];
      return {
        tabChildren: tabChildren,
        tabHeader: tabHeader
      };
    };

    _this.handleSelection = function (index) {
      var active = _this.props.active;

      if (active === null || active === undefined) {
        _this.setState({ current: index });
      }
    };

    _this.state = _extends({
      current: props.active || 0
    }, _this.dispartChildren(props.children));
    return _this;
  }

  _createClass(Tabs, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          current = _state.current,
          tabChildren = _state.tabChildren,
          tabHeader = _state.tabHeader;

      var _props = this.props,
          children = _props.children,
          slideColor = _props.slideColor,
          props = _objectWithoutProperties(_props, ['children', 'slideColor']);

      var labels = _react2.default.Children.toArray(tabChildren).map(function (child) {
        return child.props.label;
      });
      var mappedLabels = labels.map(function (label, index) {
        var id = _lodash2.default.uniqueId(label);
        return _react2.default.createElement(
          _styles.Label,
          _extends({}, props, { htmlFor: id, key: id, active: index === current, 'data-value': label }),
          _react2.default.createElement('input', {
            onChange: function onChange() {
              return _this2.handleSelection(index);
            },
            type: 'radio',
            name: 'tabs',
            id: id,
            checked: index === current
          }),
          label
        );
      });
      var header = void 0;
      if (tabHeader) {
        if (tabHeader.props.asList) {
          header = _react2.default.cloneElement(tabHeader, {
            labels: mappedLabels,
            slider: _react2.default.createElement(_styles.Slide, { number: labels.length, current: current, color: slideColor }),
            header: _styles.BasicHeader
          });
        } else {
          header = _react2.default.cloneElement(tabHeader, {
            labels: _react2.default.createElement(
              _styles.BasicHeader,
              null,
              mappedLabels,
              _react2.default.createElement(_styles.Slide, { role: 'slider', number: labels.length, current: current, color: slideColor })
            )
          });
        }
      } else {
        header = _react2.default.createElement(
          _styles.Header,
          null,
          mappedLabels,
          _react2.default.createElement(_styles.Slide, { number: labels.length, current: current, color: slideColor })
        );
      }

      return _react2.default.createElement(
        _react.Fragment,
        null,
        header,
        tabChildren[current]
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps) {
      var active = nextProps.active;

      return active !== null && active !== undefined ? { current: nextProps.active } : {};
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  slideColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
  children: validateTab,
  active: _propTypes2.default.number
};

Tabs.defaultProps = {
  slideColor: undefined,
  children: _react2.default.createElement(_Tab2.default, null),
  active: null
};

exports.default = Tabs;