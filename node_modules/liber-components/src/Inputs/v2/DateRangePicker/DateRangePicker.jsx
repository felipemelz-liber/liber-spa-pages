import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Container, Icon, Close } from './DateRangePicker.styles';

import { SimpleDropDown } from '../../../DropDown';
import { ClickOutside } from '../../../Util';
import { Input, Range as RangeSelector, InputShell, Label, Hint, Error } from '../RangePickers';

const DATE_FORMAT = 'DD/MM/YYYY';

class DateRangePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      clear: false,
      startDate: '',
      endDate: '',
      displayDate: props.defaultDisplayDate || moment(),
    };
    this.input = React.createRef();
  }

  focusInput = () => {
    this.input.current.focus();
  };

  handleInputFocus = () => {
    this.setState({ open: true });
  };

  handleOutsideClick = () => {
    this.setState({ open: false });
  };

  setCallbackValue = (start = '', end = '') => {
    if (start === '' && end === '') {
      return '';
    }
    if (end === '') {
      return start.trim();
    }
    return `${start.trim()} a ${end.trim()}`;
  };

  getParsedValue = () => {
    const { value } = this.props;
    if (value) {
      let [startDate = '', endDate = ''] = value.split('a');
      startDate = startDate.trim();
      endDate = endDate.trim();
      return { startDate, endDate };
    }
    return {};
  };

  timeout = delay => {
    this.delay = setTimeout(() => {
      this.setState({ open: false });
    }, delay);
  };

  handleDateSelection = (mStartDate, mEndDate) => {
    const { onChange, closeDelay, closeOnSelect } = this.props;
    const startDate = mStartDate ? mStartDate.format('DD/MM/YYYY') : '';
    const endDate = mEndDate ? mEndDate.format('DD/MM/YYYY') : '';
    if (onChange) {
      onChange(this.setCallbackValue(startDate, endDate));
    } else {
      const displayDate = mStartDate ? moment(mStartDate).startOf('month') : undefined;
      this.setState({ startDate, endDate, displayDate });
    }
    if (moment(mEndDate).isValid() && closeOnSelect) {
      this.timeout(closeDelay);
    }
  };

  handleStartChange = endDate => event => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(this.setCallbackValue(event.target.value, endDate));
    } else {
      const displayDate = moment(event.target.value, DATE_FORMAT).startOf('month');
      this.setState({
        startDate: event.target.value,
        displayDate: displayDate.isValid() ? displayDate : undefined,
      });
    }
  };

  handleEndChange = startDate => event => {
    const { onChange, closeDelay, closeOnSelect } = this.props;
    const { value } = event.target;
    if (onChange) {
      onChange(this.setCallbackValue(startDate, value));
    } else {
      this.setState({
        endDate: value,
      });
    }
    if (value.length >= 10 && moment(value, DATE_FORMAT).isValid() && closeOnSelect) {
      this.timeout(closeDelay);
    }
  };

  handleOnMouseEnter = () => {
    const { startDate: stateStartDate, endDate: stateEndDate } = this.state;
    const { startDate = stateStartDate, endDate = stateEndDate } = this.getParsedValue();
    if (startDate.trim() !== '' || endDate.trim() !== '') {
      this.setState({ clear: true });
    }
  };

  handleOnMouseLeave = () => {
    this.setState({ clear: false });
  };

  handleNavigate = displayDate => {
    this.setState({ displayDate });
  };

  clearInput = () => {
    const { onChange } = this.props;
    if (onChange) {
      onChange('');
      this.setState({ clear: false });
    } else {
      this.setState({
        startDate: '',
        endDate: '',
        clear: false,
      });
    }
  };

  renderShell = (startDate, endDate, open, error, disabled) => (
    <InputShell
      onClick={this.focusInput}
      onMouseEnter={this.handleOnMouseEnter}
      handleOnMouseLeave={this.handleOnMouseLeave}
      open={open}
      error={error}
      disabled={disabled}
    >
      <Input
        ref={this.input}
        onFocus={this.handleInputFocus}
        fields={[
          {
            value: startDate,
            mask: '99/99/9999',
            separator: 'a',
            onChange: !disabled ? this.handleStartChange(endDate) : undefined,
            id: 'start_day_field',
            size: '87px',
            disabled,
          },
          {
            value: endDate,
            mask: '99/99/9999',
            onChange: !disabled ? this.handleEndChange(startDate) : undefined,
            id: 'end_day_field',
            size: '87px',
            disabled,
          },
        ]}
      />
    </InputShell>
  );

  render() {
    const {
      open,
      clear,
      startDate: stateStartDate,
      endDate: stateEndDate,
      displayDate: stateDisplayDate,
    } = this.state;
    const {
      label,
      openLabel,
      disabled,
      errorMessage,
      placeholder,
      hintText,
      displayDate = stateDisplayDate,
      onNavigate = this.handleNavigate,
      position,
      autoPosition,
    } = this.props;
    const { startDate = stateStartDate, endDate = stateEndDate } = this.getParsedValue();
    return (
      <ClickOutside onOutsideClick={this.handleOutsideClick}>
        <Container>
          {label !== '' && (
            <Label
              open={(openLabel || open || startDate !== '' || endDate !== '') && !disabled}
              error={errorMessage !== ''}
              disabled={disabled}
            >
              {label}
            </Label>
          )}

          <Hint visible={(open || !label) && !(startDate !== '' || endDate !== '')}>
            {placeholder || hintText}
          </Hint>
          {errorMessage !== '' && <Error visible={errorMessage !== ''}>{errorMessage}</Error>}
          <SimpleDropDown
            open={open && !disabled}
            position={position}
            autoPosition={autoPosition}
            customButton={this.renderShell(startDate, endDate, open, errorMessage !== '', disabled)}
            hasOutsideLabel={label !== ''}
          >
            <RangeSelector
              showTime={false}
              startDate={startDate.length >= 10 ? moment(startDate, DATE_FORMAT) : null}
              endDate={endDate.length >= 10 ? moment(endDate, DATE_FORMAT) : null}
              onChangeDates={!disabled ? this.handleDateSelection : undefined}
              displayDate={displayDate}
              onNavigate={onNavigate}
            />
          </SimpleDropDown>
          <Icon hide={clear} error={errorMessage !== ''} />
          <Close show={clear} onMouseEnter={this.handleOnMouseEnter} onClick={this.clearInput} />
        </Container>
      </ClickOutside>
    );
  }
}

DateRangePicker.propTypes = {
  label: PropTypes.string,
  openLabel: PropTypes.bool,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  hintText: PropTypes.string,
  displayDate: PropTypes.instanceOf(moment),
  defaultDisplayDate: PropTypes.instanceOf(moment),
  onChange: PropTypes.func,
  onNavigate: PropTypes.func,
  closeOnSelect: PropTypes.bool,
  closeDelay: PropTypes.number,
  position: PropTypes.string,
  autoPosition: PropTypes.bool,
};

DateRangePicker.defaultProps = {
  label: '',
  openLabel: false,
  value: null,
  disabled: false,
  errorMessage: '',
  placeholder: '',
  hintText: '',
  displayDate: undefined,
  defaultDisplayDate: undefined,
  onChange: undefined,
  onNavigate: undefined,
  closeOnSelect: true,
  closeDelay: 500,
  position: 'bottom-left',
  autoPosition: true,
};

export default DateRangePicker;
