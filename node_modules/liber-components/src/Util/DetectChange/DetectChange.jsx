
import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

class DetectChange extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children;
  }
  componentDidUpdate() {
    const { onChange } = this.props;
    onChange();
  }

  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}

DetectChange.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
  onChange: PropTypes.func.isRequired,
};

DetectChange.defaultProps = {
  children: null,
};

export default DetectChange;
