'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Util = require('../Util');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion(props) {
    _classCallCheck(this, Accordion);

    var _this = _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call(this, props));

    _this.handleChange = function () {
      var _this$props = _this.props,
          fixedSize = _this$props.fixedSize,
          maxSize = _this$props.maxSize;

      if (_this.box && !fixedSize) {
        var _this$box$getBounding = _this.box.getBoundingClientRect(),
            height = _this$box$getBounding.height;

        _this.boxSize = height + 'px';
      } else {
        _this.boxSize = maxSize + 'px';
      }
      _this.forceUpdate();
    };

    _this.state = {
      open: props.open
    };
    return _this;
  }

  _createClass(Accordion, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.box) {
        var _box$getBoundingClien = this.box.getBoundingClientRect(),
            height = _box$getBoundingClien.height;

        this.boxSize = height + 'px';
      } else {
        this.boxSize = '9999px';
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open !== null && nextProps.open !== undefined) {
        if (this.props.open !== nextProps.open) {
          if (nextProps.open !== this.state.open) {
            this.setState(function (prevState) {
              return { open: !prevState.open };
            });
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          label = _props.label,
          headerColor = _props.headerColor,
          maxSize = _props.maxSize;
      var open = this.state.open;

      return _react2.default.createElement(
        _styles.AccordionBox,
        { className: className, open: open },
        _react2.default.createElement(
          _styles.AccordionAction,
          {
            color: headerColor,
            open: open,
            onClick: function onClick() {
              _this2.setState({ open: !open });
            }
          },
          label
        ),
        _react2.default.createElement(
          _styles.ShowBox,
          { open: open, size: this.boxSize || maxSize + 'px' },
          _react2.default.createElement(
            'div',
            { ref: function ref(el) {
                _this2.box = el;
              } },
            _react2.default.createElement(
              _Util.DetectChange,
              { onChange: this.handleChange },
              children
            )
          )
        )
      );
    }
  }]);

  return Accordion;
}(_react.Component);

Accordion.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.arrayOf(_propTypes2.default.string)]),
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  headerColor: _propTypes2.default.string,
  open: _propTypes2.default.bool,
  fixedSize: _propTypes2.default.bool,
  maxSize: _propTypes2.default.number
};

Accordion.defaultProps = {
  className: '',
  children: '',
  label: '',
  open: false,
  headerColor: '#fff',
  fixedSize: false,
  maxSize: 9999
};

exports.default = Accordion;