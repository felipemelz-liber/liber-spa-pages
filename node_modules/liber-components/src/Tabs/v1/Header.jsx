import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Header = ({
  children, labels, slider, header, asList,
}) => (
  <Fragment>
    {
      asList
        ? children(labels, slider, header)
        : children(labels)
    }
  </Fragment>
);

Header.propTypes = {
  children: PropTypes.func,
  labels: PropTypes.oneOfType([PropTypes.any]),
  slider: PropTypes.oneOfType([PropTypes.any]),
  header: PropTypes.oneOfType([PropTypes.any]),
  asList: PropTypes.bool,
};

Header.defaultProps = {
  children: () => {},
  labels: null,
  slider: null,
  header: null,
  asList: false,
};

export default Header;
