import React from 'react';
import PropTypes from 'prop-types';
import {
  AlertContent,
  AlertInfoContent,
  AlertAdditionalInfoContent,
  AlertIcon,
  CloseIcon,
} from './styles';
import {
  MdAlertCircle,
} from '../Icons/MaterialDesign';

const Alert = ({
  additionalInfoContent,
  className,
  children,
  icon,
  onClose,
}) => (
  <div className={className}>
    <AlertIcon>
      { icon }
    </AlertIcon>
    <AlertContent>
      <AlertInfoContent>
        { children }
      </AlertInfoContent>
      {
        additionalInfoContent && (
          <AlertAdditionalInfoContent>
            { additionalInfoContent }
          </AlertAdditionalInfoContent>
        )
      }
    </AlertContent>
    <AlertIcon>
      <CloseIcon onClick={onClose} />
    </AlertIcon>
  </div>
);

Alert.propTypes = {
  additionalInfoContent: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  icon: PropTypes.node,
  onClose: PropTypes.func,
};

Alert.defaultProps = {
  additionalInfoContent: '',
  className: '',
  children: '',
  icon: <MdAlertCircle />,
  onClose: () => {},
};

export default Alert;
