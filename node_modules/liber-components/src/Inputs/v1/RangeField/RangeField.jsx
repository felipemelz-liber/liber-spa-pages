import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ClickOutside } from '../../../Util';
import {
  FieldBox,
  RangeContainer,
  FieldContainer,
  Label,
  CardContent,
  ValueLabel,
  ValueField,
  ValueContainer,
  RangeInputFrom,
  RangeInputTo,
  RangeInputContainer,
  DiffBar,
  FromTooltip,
  ToTooltip,
} from './RangeField.styles';


const parseInRange = (input, min, max, empty) => {
  const parsedInt = parseInt(input, 10);
  const parsed = {};
  if (input === '') {
    parsed.value = empty;
    parsed.input = input;
  } else if (parsedInt > max) {
    parsed.value = max;
    parsed.input = max.toString();
  } else if (parsedInt < min) {
    parsed.value = min;
    parsed.input = min.toString();
  } else {
    parsed.value = parsedInt;
    parsed.input = input;
  }
  return parsed;
};

const normalizeRange = (inputMin, min, inputMax, max) => {
  const normalized = {};
  if (min <= max) {
    normalized.min = min;
    normalized.inputMin = inputMin;
    normalized.max = max;
    normalized.inputMax = inputMax;
  } else {
    normalized.min = max;
    normalized.inputMin = inputMax;
    normalized.max = min;
    normalized.inputMax = inputMin;
  }
  return normalized;
};

const getNonEmptyValue = (input, value, def) => {
  if (input === '') return { input: def.toString(), value: def };
  return { input, value };
};

class RangeField extends PureComponent {
  constructor(props) {
    super(props);
    const {
      from: propsFrom = '', to: propsTo = '', min, max,
    } = props;
    const {
      value: from,
      input: inputFrom,
    } = parseInRange(propsFrom, min, max, min);
    const {
      value: to,
      input: inputTo,
    } = parseInRange(propsTo, min, max, max);

    this.state = {
      from,
      to,
      inputFrom,
      inputTo,
      selection: 'not-selecting', // eslint-disable-line
      open: false,
      unselected: inputFrom === '' && inputTo === '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    const {
      from: propsInputFrom,
      to: propsInputTo,
      min,
      max,
    } = props;
    if (
      propsInputFrom !== undefined
      && propsInputTo !== undefined
      && state.selection === 'not-selecting'
      && (props.from !== state.inputFrom || props.to !== state.inputTo)) {
      if (propsInputFrom === '' && propsInputTo === '') {
        return {
          from: min, to: max, inputFrom: '', inputTo: '',  unselected: true, // eslint-disable-line
        };
      }
      const {
        value: parsedFrom,
        input: parsedInputFrom,
      } = parseInRange(propsInputFrom, min, max, min);
      const {
        value: parsedTo,
        input: parsedInputTo,
      } = parseInRange(propsInputTo, min, max, max);
      const {
        min: from,
        inputMin: inputFrom,
        max: to,
        inputMax: inputTo,
      } = normalizeRange(parsedInputFrom, parsedFrom, parsedInputTo, parsedTo);

      return {
        from, to, inputFrom, inputTo, unselected: false,
      };
    }
    return {};
  }

  getFromPos = (from, min, max) => {
    if (from.length === 0) {
      return '0%';
    }
    return `${100 * ((from - min) / (max - min))}%`;
  }

  getToPos = (to, min, max) => {
    if (to.length === 0) {
      return '100%';
    }
    return `${100 * ((to - min) / (max - min))}%`;
  }

  handleFromInputChange = ({ target }) => {
    this.setState({
      inputFrom: target.value,
    });
  }

  handleToInputChange = ({ target }) => {
    this.setState({
      inputTo: target.value,
    });
  }

  handleFocus = () => {
    this.setState({ selection: 'selecting' }); // eslint-disable-line
  }

  handleBlur = () => {
    this.setState({ selection: 'not-selecting' }); // eslint-disable-line
  }

  handleFromKeyDown = ({ keyCode, target }) => {
    const { min, max, onChange } = this.props;

    if (keyCode === 13) {
      this.setState((state) => {
        const {
          inputFrom: currentInputFrom,
          inputTo: currentInputTo,
          to: currentTo,
        } = state;
        if (currentInputFrom.length !== 0) {
          const {
            value: parsedFrom,
            input: parsedInputFrom,
          } = parseInRange(currentInputFrom, min, max);
          const {
            value: parsedTo,
            input: parsedInputTo,
          } = getNonEmptyValue(currentInputTo, currentTo, max);
          const {
            min: from,
            inputMin: inputFrom,
            max: to,
            inputMax: inputTo,
          } = normalizeRange(parsedInputFrom, parsedFrom, parsedInputTo, parsedTo);
          onChange(inputFrom, inputTo);
          return {
            from,
            inputFrom,
            to,
            inputTo,
            unselected: false,
            selection: 'not-selecting',
          };
        }
        onChange('', '');
        return {
          inputFrom: '',
          inputTo: '',
          from: min,
          to: max,
          unselected: true,
          selection: 'not-selecting',
        };
      }, () => { target.blur(); });
    }
  }

  handleToKeyDown = ({ keyCode, target }) => {
    const { min, max, onChange } = this.props;
    if (keyCode === 13) {
      this.setState((state) => {
        const {
          inputFrom: currentInputFrom,
          from: currentFrom,
          inputTo: currentInputTo,

        } = state;
        if (currentInputTo.length !== 0) {
          const {
            value: parsedTo,
            input: parsedInputTo,
          } = parseInRange(currentInputTo, min, max);
          const {
            value: parsedFrom,
            input: parsedInputFrom,
          } = getNonEmptyValue(currentInputFrom, currentFrom, min);
          const {
            min: from,
            inputMin: inputFrom,
            max: to,
            inputMax: inputTo,
          } = normalizeRange(parsedInputFrom, parsedFrom, parsedInputTo, parsedTo);
          onChange(inputFrom, inputTo);
          return {
            from,
            inputFrom,
            to,
            inputTo,
            unselected: false,
            selection: 'not-selecting',
          };
        }
        onChange('', '');
        return {
          inputFrom: '',
          inputTo: '',
          from: min,
          to: max,
          unselected: true,
          selection: 'not-selecting',
        };
      }, () => { target.blur(); });
    }
  }


  handleFromRangeChange = ({ target }) => {
    this.setState({
      from: parseInt(target.value, 10),
      selection: 'selecting', // eslint-disable-line
    });
  }

  handleToRangeChange = ({ target }) => {
    this.setState({
      to: parseInt(target.value, 10),
      selection: 'selecting', // eslint-disable-line
    });
  }

  handleEndRange = ({ target }) => {
    const { onChange } = this.props;
    this.setState((state) => {
      const { from: currentFrom, to: currentTo } = state;
      const {
        min: from,
        inputMin: inputFrom,
        max: to,
        inputMax: inputTo,
      } = normalizeRange(currentFrom.toString(), currentFrom, currentTo.toString(), currentTo);
      onChange(inputFrom, inputTo);
      return {
        from,
        to,
        inputFrom,
        inputTo,
        selection: 'finishing-selection',
      };
    }, () => { target.blur(); });
  }

  handleClose = () => {
    this.setState((state) => {
      if (state.open && state.unselected) {
        return {
          open: false,
          inputFrom: '',
          inputTo: '',
        };
      }
      return {
        open: false,
      };
    });
  }

  handleOpenToogle = () => {
    this.setState((state) => {
      if (state.open && state.unselected) {
        return {
          open: !state.open,
          inputFrom: '',
          inputTo: '',
        };
      }
      return {
        open: !state.open,
      };
    });
  }

  handleSelectionStart = () => {
    this.setState({
      unselected: false,
      selection: 'selecting', // eslint-disable-line
    });
  }

  render() {
    const {
      min, max, position, label,
    } = this.props;
    const {
      from, inputFrom, to, inputTo, open, unselected,
    } = this.state;
    let layout;
    if (open) layout = 'open'; else if (!open && !unselected) layout = 'selected'; else layout = 'unselected';
    return (
      <FieldContainer>
        <Label layout={layout}>{label}</Label>
        <ClickOutside onOutsideClick={this.handleClose}>
          <Fragment>
            <FieldBox onClick={this.handleOpenToogle} layout={layout}>
              {unselected ? null : `De ${from} a ${to}`}
            </FieldBox>

            <RangeContainer open={open} position={position}>
              <CardContent>
                <ValueContainer>
                  <ValueLabel>
                    de:
                    <ValueField
                      id="input_range_from"
                      value={inputFrom}
                      placeholder={min}
                      unselected={unselected}
                      onChange={this.handleFromInputChange}
                      onFocus={this.handleFocus}
                      onKeyDown={this.handleFromKeyDown}
                    />
                  </ValueLabel>
                  <ValueLabel>
                    a:
                    <ValueField
                      id="input_range_to"
                      value={inputTo}
                      placeholder={max}
                      unselected={unselected}
                      onChange={this.handleToInputChange}
                      onFocus={this.handleFocus}
                      onKeyDown={this.handleToKeyDown}
                    />
                  </ValueLabel>
                </ValueContainer>
                <RangeInputContainer>
                  <DiffBar
                    from={from < to ? this.getFromPos(from, min, max) : this.getToPos(to, min, max)}
                    to={to > from ? this.getToPos(to, min, max) : this.getFromPos(from, min, max)}
                  >
                    <FromTooltip unselected={unselected}>{from < to ? from : to}</FromTooltip>
                    <ToTooltip unselected={unselected}>{to > from ? to : from}</ToTooltip>
                  </DiffBar>
                  <RangeInputFrom
                    value={from.length !== 0 ? from : min}
                    min={min}
                    max={max}
                    onChange={this.handleFromRangeChange}
                    onMouseUp={this.handleEndRange}
                    onMouseDown={this.handleSelectionStart}
                    onBlur={this.handleBlur}
                  />
                  <RangeInputTo
                    value={to.length !== 0 ? to : max}
                    min={min}
                    max={max}
                    onChange={this.handleToRangeChange}
                    onMouseUp={this.handleEndRange}
                    onMouseDown={this.handleSelectionStart}
                    onBlur={this.handleBlur}
                  />
                </RangeInputContainer>
              </CardContent>
            </RangeContainer>
          </Fragment>
        </ClickOutside>
      </FieldContainer>
    );
  }
}

RangeField.propTypes = {
  from: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  to: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  min: PropTypes.number,
  max: PropTypes.number,
  label: PropTypes.string,
  position: PropTypes.string,
  onChange: PropTypes.func,
};

RangeField.defaultProps = {
  from: undefined,
  to: undefined,
  min: 10,
  max: 200,
  position: 'left',
  label: '',
  onChange: () => {},

};

export default RangeField;
