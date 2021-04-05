import React from 'react';
import PropTypes from 'prop-types';
import { Input as StyledInput, Separator, InputContainer } from './Range.styles';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.fields = [];
  }

  focus = () => {
    const toFocus = this.fields.filter(field => field.current.value === '')[0] || this.fields[this.fields.length - 1];
    toFocus.current.focus();
  }

  moveFields = index => (event) => {
    const { target, key } = event;
    if (target.value.length === 0) {
      const prevFields = this.fields.slice(0, index);
      const prev = prevFields.filter(field => field.current.value === '')[0] || this.fields[index - 1];
      if (prev) prev.current.focus();
    } else if (target.value.length >= target.dataset.max && key !== 'ArrowLeft' && key !== 'ArrowRight') {
      const next = this.fields[index + 1];
      if (next) next.current.focus();
    } else if (key === 'ArrowLeft' || key === 'ArrowRight') {
      const pos = target.selectionStart;
      if (pos === 0) {
        const prev = this.fields[index - 1];
        if (prev) prev.current.focus();
      } else if (pos >= target.dataset.max) {
        const next = this.fields[index + 1];
        if (next) next.current.focus();
      }
    }
  }

  handleFocus = (event) => {
    this.props.onFocus(event);
  }

  setRef = index => (element) => {
    this.fields[index] = { current: element };
  }

  render() {
    const { fields, hide } = this.props;
    return fields.map(
      (field, index) => {
        const maxLength = field.maxLength || 10;
        return (
          <InputContainer key={field.id} full={!field.size ? '100%' : null} hide={hide}>
            <StyledInput
              inputRef={this.setRef(index)}
              onKeyUp={this.moveFields(index)}
              value={field.value}
              type={field.type || 'text'}
              mask={field.mask || null}
              maskChar={field.maskChar || null}
              maxLength={!field.mask ? maxLength : null}
              data-max={field.mask ? field.mask.length : maxLength}
              onChange={field.onChange}
              onFocus={this.handleFocus}
              inputSize={field.size || '100%'}
              disabled={field.disabled}
            />
            {
            field.separator && (
              <Separator
                show={field.mask
                  ? field.value.length === field.mask.length
                  : field.value.length === maxLength
                }
              >{field.separator}
              </Separator>
            )
          }
          </InputContainer>
        );
      },
    );
  }
}

Input.propTypes = {
  onFocus: PropTypes.func,
  hide: PropTypes.bool,
  fields: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    mask: PropTypes.string,
    maskChar: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    maxLength: PropTypes.number,
    separator: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,

  })).isRequired,
};

Input.defaultProps = {
  onFocus: () => {},
  hide: false,
};

export default Input;
