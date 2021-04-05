import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactOnRails from 'react-on-rails';

const generateToken = (rails) => {
  if (rails) {
    const csrfToken = ReactOnRails.authenticityToken();
    return (
      <Fragment>
        <input name="utf8" type="hidden" value="✓" />
        <input type="hidden" name="authenticity_token" value={csrfToken || ''} />
      </Fragment>
    );
  }
  return null;
};

const Form = ({
  name, action, method, id, className, children, onSubmit, autocomplete, rails,
}) => (
  <form
    name={name}
    action={action}
    method={method}
    id={id}
    className={className}
    onSubmit={onSubmit}
    autoComplete={autocomplete}
  >
    { generateToken(rails) }
    { children }
  </form>
);

Form.propTypes = {
  name: PropTypes.string,
  action: PropTypes.string,
  method: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  autocomplete: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
  onSubmit: PropTypes.func,
  rails: PropTypes.bool,
};

Form.defaultProps = {
  name: '',
  action: '',
  method: '',
  id: '',
  className: '',
  autocomplete: 'off',
  children: [],
  onSubmit: () => {},
  rails: true,
};

export default Form;
