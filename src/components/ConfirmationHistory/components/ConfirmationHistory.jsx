import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ToastContainer from 'liber-components/components/Toast';
import { fetchConfirmations, setCredentials, updateFilters } from '../actions/index.js';
import ConfirmationHistoryTable from './Table.jsx';
import {
  ConfirmationHistoryContainer,
  LoadingBlock,
  Loading,
  Global,
  ScreenTitle,
  TitleContainer,
} from './ConfirmationHistory.styles.jsx';

const DATE_LOWER = 'q[created_at_date_lteq]';
const DATE_GREATER = 'q[created_at_date_gteq]';
const DATE_FORMAT = 'YYYY-MM-DD';

export const ConfirmationHistory = ({
  token,
  sacadoId,
  onSetCredentials,
  onFetchConfirmations,
  loadingAllPage,
  per,
  onUpdateFilters,
}) => {
  React.useEffect(() => {
    onSetCredentials(token, sacadoId);
    onFetchConfirmations({ token, params: { page: '1', per: '10' } });
  }, []);

  const handleFilter = ({ start, end }) => {
    let newFilters = {};
    if (start && end) {
      newFilters = {
        [DATE_GREATER]: start.format(DATE_FORMAT),
        [DATE_LOWER]: end.format(DATE_FORMAT),
      };
    } else if (start || end) {
      newFilters = {
        [DATE_GREATER]: start ? start.format(DATE_FORMAT) : end.format(DATE_FORMAT),
        [DATE_LOWER]: start ? start.format(DATE_FORMAT) : end.format(DATE_FORMAT),
      };
    }
    onUpdateFilters(newFilters);
    onFetchConfirmations({ token, params: { page: '1', per, ...newFilters } });
  };

  return (
    <>
      <Global />
      {loadingAllPage ? <Loading loop /> : null}
      <LoadingBlock loading={loadingAllPage ? 1 : 0}>
        <ConfirmationHistoryContainer>
          <TitleContainer>
            <ScreenTitle>Histórico de Confirmações</ScreenTitle>
          </TitleContainer>
          <ConfirmationHistoryTable handleFilter={handleFilter} />
        </ConfirmationHistoryContainer>
      </LoadingBlock>
      <ToastContainer />
    </>
  );
};

ConfirmationHistory.propTypes = {
  onSetCredentials: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  sacadoId: PropTypes.number.isRequired,
  onFetchConfirmations: PropTypes.func.isRequired,
  loadingAllPage: PropTypes.bool.isRequired,
  per: PropTypes.number.isRequired,
  onUpdateFilters: PropTypes.func.isRequired,
};

const mapStateToProps = ({ confirmationHistory }) => ({
  loadingAllPage: confirmationHistory.loadingAllPage,
  per: confirmationHistory.pagination.per,
});

const mapDispatchToProps = {
  onFetchConfirmations: fetchConfirmations,
  onSetCredentials: setCredentials,
  onUpdateFilters: updateFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationHistory);
