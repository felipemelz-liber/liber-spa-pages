import React from 'react';
import PropTypes from 'prop-types';
import {
  StepContainer, StepIcon, StepCheck, StepConnect, StepLabel,
} from './styles';

const renderIcon = (number, active, complete, onClick, clickable) => {
  if (complete) {
    return (
      <StepIcon complete={complete} onClick={clickable ? onClick : undefined} clickable={clickable}>
        <StepCheck />
      </StepIcon>
    );
  }
  return (
    <StepIcon active={active} complete={complete} onClick={clickable ? onClick : undefined} clickable={clickable}>
      {number}
    </StepIcon>
  );
};

const renderConnect = (connect, active, complete) => {
  if (connect) {
    return (<StepConnect active={active} complete={complete} />);
  }
  return null;
};

const renderLabel = (label) => {
  if (label) {
    return <StepLabel>{label}</StepLabel>;
  }
  return null;
};

const Step = ({
  active,
  clickable,
  connect,
  complete,
  number,
  label,
  onClick,
}) => (
  <StepContainer active={active} complete={complete}>
    { renderIcon(number, active, complete, onClick, clickable) }
    { renderConnect(connect, active, complete) }
    { renderLabel(label) }
  </StepContainer>
);

Step.propTypes = {
  active: PropTypes.bool,
  clickable: PropTypes.bool,
  connect: PropTypes.bool,
  complete: PropTypes.bool,
  number: PropTypes.number.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Step.defaultProps = {
  active: false,
  clickable: false,
  connect: false,
  complete: false,
  label: '',
  onClick: () => {},
};

export default Step;
