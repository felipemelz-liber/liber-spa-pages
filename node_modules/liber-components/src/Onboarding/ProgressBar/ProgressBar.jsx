import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Container } from '../../GenericStyles';
import Step from './Step';
import {
  LabelUpper, LabelLower, Progress, Steps,
} from './styles';

const generateSteps = (steps, completed, current, onClick) => {
  if (typeof steps === 'object') {
    return Object.keys(steps).map((label, index) => {
      const key = _.uniqueId(label);
      const num = index + 1;
      return (
        <Step
          key={key}
          active={current === num}
          connect={num > 1}
          complete={completed ? num <= completed : current > num}
          label={steps[label]}
          number={num}
          clickable={completed ? num <= completed + 1 : false}
          onClick={() => (typeof onClick === 'function' ? onClick(steps[label], num) : {})}
        />
      );
    });
  }

  return steps.map((label, index) => {
    const key = _.uniqueId(label);
    const num = index + 1;
    return (
      <Step
        key={key}
        active={current === num}
        connect={num > 1}
        complete={completed ? num <= completed : current > num}
        label={label}
        number={num}
        clickable={completed ? num <= completed + 1 : Boolean(onClick)}
        onClick={() => onClick(steps[label], num)}
      />
    );
  });
};

const getStepNum = (steps, current) => {
  if (typeof current === 'string') {
    if (Array.isArray(steps)) {
      return steps.findIndex(step => step === current) + 1;
    }
    return Object.keys(steps).findIndex(step => step === current) + 1;
  }
  return current;
};

const ProgressBar = ({
  steps, completed, current, label, onClick,
}) => {
  const stepNum = getStepNum(steps, current);
  return (
    <Progress>
      <Container>
        <LabelUpper>Cadastro | {label || `Etapa ${stepNum}`}</LabelUpper>
        <Steps>
          { generateSteps(steps, completed, stepNum, onClick) }
        </Steps>
        <LabelLower>Cadastro | {label || `Etapa ${stepNum}`}</LabelLower>
      </Container>
    </Progress>
  );
};

ProgressBar.propTypes = {
  steps: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.objectOf(PropTypes.string),
  ]).isRequired,
  completed: PropTypes.number,
  current: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

ProgressBar.defaultProps = {
  completed: undefined,
  label: '',
  onClick: undefined,
};

export default ProgressBar;
