import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getStyle = (...args) => window.getComputedStyle(...args);

class Resizable extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.setResize);
    this.setResize();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children !== this.props.children) {
      this.value.style.fontSize = `${this.defaultFont}px`;
      this.defaultSize = null;
    }
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    this.wait = setTimeout(() => {
      this.setResize();
    }, 100);
    if (newProps.children !== oldProps.children) {
      this.value.style.fontSize = `${this.defaultFont}px`;
      this.defaultSize = null;
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setResize);
  }

  setResize = () => {
    if (this.value) {
      this.defaultFont =
        parseFloat(
          getStyle(this.value).getPropertyValue('--default-font-size'),
        ) || this.defaultFont;
      if (!this.defaultFont) {
        this.defaultFont = this.getFontSize(this.value);
      }
      if (!this.defaultSize) {
        this.defaultSize = this.getWidth(this.value, true);
      }
      const parentSize = this.getWidth(this.value.parentNode);
      this.resize(this.defaultSize, parentSize);
    }
  };

  getFontSize = element => {
    const fontSize = getStyle(element).getPropertyValue('font-size');
    return parseFloat(fontSize);
  };

  getWidth = (element, margin = false) => {
    const computedStyle = getStyle(element);
    let innerWidth;

    const width = parseInt(computedStyle.getPropertyValue('width'), 10) || 0;
    const paddingLeft =
      parseInt(computedStyle.getPropertyValue('padding-left'), 10) || 0;
    const paddingRight =
      parseInt(computedStyle.getPropertyValue('padding-right'), 10) || 0;
    const marginLeft =
      parseInt(computedStyle.getPropertyValue('margin-left'), 10) || 0;
    const marginRight =
      parseInt(computedStyle.getPropertyValue('margin-right'), 10) || 0;
    const borderLeft =
      parseInt(computedStyle.getPropertyValue('border-left-width'), 10) || 0;
    const borderRight =
      parseInt(computedStyle.getPropertyValue('border-right-width'), 10) || 0;

    const parentBoxSizing = computedStyle.getPropertyValue('box-sizing');
    if (parentBoxSizing === 'border-box') {
      innerWidth =
        width - (paddingLeft + paddingRight + borderLeft + borderRight);
    } else {
      innerWidth = width;
    }
    if (margin) {
      innerWidth = innerWidth + marginLeft + marginRight;
    }
    return innerWidth === 0 ? element.offsetWidth : innerWidth;
  };

  resize = (valueSize, parentSize) => {
    const proportion = parentSize / valueSize;
    let newFontSize;
    if (proportion <= 1) {
      newFontSize = `${this.defaultFont * proportion - 3}px`;
    } else {
      newFontSize = `${this.defaultFont}px`;
    }
    this.value.style.fontSize = newFontSize;
  };

  render() {
    return (
      <div
        {...this.props}
        ref={el => {
          this.value = el;
        }}
      />
    );
  }
}

Resizable.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default Resizable;
