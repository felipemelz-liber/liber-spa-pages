import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Transition } from 'react-transition-group';
import { PsGlobalStyle } from '../../../Assets';
import { ClickOutside } from '../../../Util';
import { Container, Label, Error } from '../SelectField/SelectField.styles';
import { SimpleDropDown } from '../../../DropDown';
import {
  OptionsContainer,
  Option,
  DropdownContent,
  CalendarIcon,
  Shell,
  YearSelection,
  Arrow,
  IconButton,
  YearText,
  TextContainer,
} from './MonthSelect.styles';

const DATE_FORMAT = 'DD/MM/YYYY';
const ANIMATION_TIMEOUT = 150;

const renderOption = (value, onChange, setOpen, dateFormat) => option => {
  const { momentObject, label } = option;
  const isSelected = momentObject.isSame(value, 'year') && momentObject.isSame(value, 'month');

  return (
    <Option
      key={`option-${label}`}
      selected={isSelected}
      onClick={() => {
        setOpen(false);
        onChange({
          start: momentObject.startOf('month').format(dateFormat),
          end: momentObject.endOf('month').format(dateFormat),
          moment: momentObject,
        });
      }}
    >
      {label}
    </Option>
  );
};

const MonthSelect = ({
  openLabel,
  errorMessage,
  onChange,
  disabled,
  value,
  label,
  dateFormat,
  ...props
}) => {
  const referenceValue = value || moment();

  const [open, setOpen] = useState(false);
  const [year, setYear] = useState(referenceValue.year());
  const [options, setOptions] = useState([]);
  const [animate, setAnimate] = useState(false);

  React.useEffect(() => {
    moment.locale('pt-br');
    const newOptions = moment.months().map((month, index) => ({
      momentObject: moment()
        .year(year)
        .month(index),
      label: month,
    }));

    setOptions(newOptions);
  }, [year]);

  const doAnimation = useCallback(selectedYear => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      setYear(selectedYear);
    }, ANIMATION_TIMEOUT);
  }, []);

  const changeYear = direction => {
    const method = direction === 'left' ? 'subtract' : 'add';

    const newYear = moment()
      .year(year)
      [method](1, 'year')
      .year();

    doAnimation(newYear);
  };

  return (
    <>
      <PsGlobalStyle />
      <ClickOutside onOutsideClick={() => setOpen(false)}>
        <Container {...props}>
          {Boolean(label) && (
            <Label
              focused={openLabel || open || Boolean(value)}
              error={Boolean(errorMessage)}
              disabled={disabled}
              open={open}
            >
              {label}
            </Label>
          )}
          {Boolean(errorMessage) && <Error visible={Boolean(errorMessage)}>{errorMessage}</Error>}
          <SimpleDropDown
            open={open && !disabled}
            position="bottom-left"
            customButton={
              <Shell
                error={Boolean(errorMessage)}
                disabled={disabled}
                tabIndex="0"
                open={open}
                onClick={() => setOpen(true)}
                hasValue={Boolean(value)}
              >
                {value ? `${value.format('MMMM')} de ${value.format('YYYY')}` : null}
                <CalendarIcon open={open} error={Boolean(errorMessage)} />
              </Shell>
            }
          >
            <DropdownContent>
              <YearSelection>
                <IconButton
                  onClick={() => {
                    changeYear('left');
                  }}
                >
                  <Arrow />
                </IconButton>
                <TextContainer>
                  <Transition in={animate} timeout={ANIMATION_TIMEOUT}>
                    {state => (
                      <YearText timeout={ANIMATION_TIMEOUT} transitionState={state}>
                        {year}
                      </YearText>
                    )}
                  </Transition>
                </TextContainer>
                <IconButton
                  onClick={() => {
                    changeYear('right');
                  }}
                >
                  <Arrow direction="right" />
                </IconButton>
              </YearSelection>
              <OptionsContainer>
                {options.map(renderOption(value, onChange, setOpen, dateFormat))}
              </OptionsContainer>
            </DropdownContent>
          </SimpleDropDown>
        </Container>
      </ClickOutside>
    </>
  );
};

MonthSelect.propTypes = {
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  openLabel: PropTypes.bool,
  value: PropTypes.instanceOf(moment),
  onChange: PropTypes.func,
  dateFormat: PropTypes.string,
};

MonthSelect.defaultProps = {
  label: '',
  disabled: false,
  errorMessage: null,
  openLabel: false,
  value: null,
  onChange: () => {},
  dateFormat: DATE_FORMAT,
};

export default MonthSelect;
