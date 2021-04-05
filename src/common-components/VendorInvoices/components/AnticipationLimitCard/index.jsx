import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Card, CardTitle } from './styles';
import { getAnticipationLimit } from './api';
import { formatMoney } from '../../../../views/withdraw/moneyHandler';
import { updateAvailableLimit } from '../../actions/VendorInvoicesActions';

function AnticipationLimitCard({ token }) {
  const [anticipationLimit, setAnticipationLimit] = useState(null);

  const dispatch = useDispatch();
  const updateLimit = value => dispatch(updateAvailableLimit(value));

  useEffect(() => {
    getAnticipationLimit(token).then(setAnticipationLimit);
  }, []);

  const { totalValue, availableValue } = anticipationLimit || {};

  useEffect(() => {
    updateLimit(availableValue);
  }, [availableValue]);

  return anticipationLimit ? (
    <Card>
      <CardTitle>Limite Mensal Disponível</CardTitle>
      {formatMoney(availableValue, true)} de {formatMoney(totalValue, true)}
    </Card>
  ) : null;
}

AnticipationLimitCard.propTypes = {
  token: PropTypes.string,
};

AnticipationLimitCard.defaultProps = {
  token: '',
};

export default AnticipationLimitCard;
