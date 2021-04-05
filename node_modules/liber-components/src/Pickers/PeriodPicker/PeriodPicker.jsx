import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import MonthPicker from '../MonthPicker';
import DropDown from '../../DropDown';
import { Content, MonthPickerContainer } from './styles';
import ClickOutside from '../../Util/ClickOutside';

class PeriodPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      period: props.value,
      month: null,
      year: null,
      monthPicker: false,
    };
    if (props.value) { this.calcPeriod(props.value); }
  }


  static getDerivatedStateFromProps(props) {
    if (props.value) {
      return {
        period: props.value,
      };
    }
    return {};
  }

  calcPeriod = (value) => {
    const {
      date,
      onSelect,
    } = this.props;
    const [direction, days] = value.split('-');
    let start;
    let end;
    switch (direction) {
      case 'last':
        start = moment(date).subtract(days - 1, 'days');
        end = moment(date);
        onSelect(value, start, end);
        break;
      case 'next':
        start = moment(date);
        end = moment(date).add(days - 1, 'days');
        onSelect(value, start, end);
        break;
      default:
        onSelect(value, null, null);
        break;
    }
  }

  handleMonthSelect = (obj, value, date) => {
    const { onSelect } = this.props;
    this.setState({
      monthPicker: false,
      month: obj.month,
      year: obj.year,
    }, () => {
      onSelect('month-picker', moment(date).startOf('month'), moment(date).endOf('month'));
    });
  }

  handleOpenDropDown = () => {
    this.setState(state => ({
      monthPicker: state.period === 'month-picker',
    }));
  }


  handlePeriodSelection = (value) => {
    const regex = /(last|next)-[1-9]+/gm;
    if (regex.test(value)) {
      this.setState({ period: value, month: null, year: null }, () => { this.calcPeriod(value); });
    } else if (value === 'month-picker') {
      this.setState({ period: value, monthPicker: true });
    } else {
      console.error(`Wrong format, try (last|next)-[1-9]+: ${value}`);
    }
  }

  render() {
    return (
      <Content>
        <DropDown
          value={this.state.period}
          defaultValue={this.state.period}
          onSelect={this.handlePeriodSelection}
          onOpen={this.handleOpenDropDown}
        >
          {this.props.children}
        </DropDown>
        <MonthPickerContainer show={this.state.monthPicker}>
          <ClickOutside onOutsideClick={() => { this.setState({ monthPicker: false }); }}>
            <MonthPicker
              month={this.state.month}
              year={this.state.year}
              onSelect={this.handleMonthSelect}
            />
          </ClickOutside>
        </MonthPickerContainer>
      </Content>
    );
  }
}

PeriodPicker.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  date: PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.string,
  ]),
  onSelect: PropTypes.func,
  value: PropTypes.string,
};

PeriodPicker.defaultProps = {
  value: null,
  date: undefined,
  onSelect: () => {},
};

export default PeriodPicker;
