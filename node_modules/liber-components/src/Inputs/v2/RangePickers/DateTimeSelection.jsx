import React from 'react';
import PropTypes from 'prop-types';
import useResizeObserver from 'use-resize-observer';
import { Clock as Time } from '../TimePicker';
import Date from '../../../Calendar/v2/MonthCalendar';
import { Button } from '../../../Buttons';
import {
  SelectionBody as Body,
  SelectionSlider as Slider,
  SelectionFooter as Footer,
  SelectionDateContainer as DateContainer,
  SelectionTimeContainer as TimeContainer,
} from './Range.styles';

const onClick = (show, callback) => () => {
  if (show === 'date') {
    callback('time');
  }
  if (show === 'time') {
    callback('date');
  }
};

const DateTimeSelection = React.forwardRef((props, forwardedRef) => {
  const [stateShow, setShow] = React.useState('date');
  let ref = forwardedRef;
  let height;
  let width; // eslint-disable-line

  if (!ref) {
    [ref, width, height] = useResizeObserver();
  }

  const {
    dateProps,
    timeProps,
    show = stateShow,
    labels,
    onChange = setShow,
    showTime,
    ...bodyProps
  } = props;
  return (
    <Body {...bodyProps}>
      <Slider show={show}>
        <DateContainer>
          <Date {...dateProps} innerRef={ref} />
        </DateContainer>
        <TimeContainer style={height ? { '--clock-container-size': `${height + 64}px` } : null}>
          <Time {...timeProps} />
        </TimeContainer>
      </Slider>
      {showTime && (
        <Footer>
          <Button onClick={onClick(show, onChange)} version={2}>
            {labels[show]}
          </Button>
        </Footer>
      )}
    </Body>
  );
});

DateTimeSelection.displayName = 'DateTimeSelection';

DateTimeSelection.propTypes = {
  dateProps: PropTypes.objectOf(PropTypes.any),
  timeProps: PropTypes.objectOf(PropTypes.any),
  show: PropTypes.string,
  labels: PropTypes.shape({
    date: PropTypes.string,
    time: PropTypes.string,
  }),
  onChange: PropTypes.func,
  showTime: PropTypes.bool,
};

DateTimeSelection.defaultProps = {
  dateProps: {},
  timeProps: {},
  show: undefined,
  labels: {
    date: 'SELECIONAR HORÁRIO',
    time: 'SELECIONAR DATA',
  },
  onChange: undefined,
  showTime: true,
};

export default DateTimeSelection;
