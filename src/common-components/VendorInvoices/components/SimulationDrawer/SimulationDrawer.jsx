/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from '@mdi/react';
import { mdiFinance } from '@mdi/js';
import { Drawer, Button } from 'liber-components';
import { Title, SelectedNumber, Row, ConfirmationButton } from './SimulationDrawer.styles';
import { SimulationInfo } from '../../../../views/fornecedor-duplicatas/components/SimulationDrawer/components/SimulationInfo/SimulationInfo';
import { SimulationDialog } from '../../../../views/fornecedor-duplicatas/components/SimulationDrawer/components/SimulationDialog/SimulationDialog';
import SimulationTerms from '../../../../views/fornecedor-duplicatas/components/SimulationDrawer/components/SimulationTerms/SimulationTerms';
import LoadingButton from '../../../Buttons/LoadingButton';
import {
  requestSimulationReport,
  anticipateInvoices,
  calculateQuote,
} from '../../actions/VendorInvoicesActions';
import { dispatchDataLayerEvent } from '../../../../vendor/Utils';

export const SimulationDrawer = ({
  selectedInvoices,
  quote,
  rateByPeriod,
  requestReport,
  requestAnticipation,
  changeQuote,
  loading,
  isSimulationOutdated,
}) => {
  React.useEffect(() => {
    if (selectedInvoices.length > 0) {
      changeQuote();
    }
  }, [selectedInvoices]);

  const [open, setOpen] = useState(false);
  const [canDownload, setCanDownload] = useState(false);

  const handleConfirmation = () => {
    dispatchDataLayerEvent('titulosBaixarRelatorioDaSimulacao');

    setOpen(false);
    setCanDownload(false);
    requestReport();
  };

  return (
    <>
      <Drawer
        blockNavigation={false}
        position="bottom"
        drawerSize={1120}
        size={128}
        show={selectedInvoices.length > 0}
      >
        <Row hasPaddingTop>
          <Title>
            Simulação de Adiantamento{' '}
            <SelectedNumber>{`(${selectedInvoices.length} títulos)`}</SelectedNumber>
          </Title>
          <Button version={2} size="small" onClick={() => setOpen(true)}>
            <Icon path={mdiFinance} />
            Baixar Relatório da Simulação (Excel)
          </Button>
        </Row>
        <Row>
          <SimulationInfo
            {...quote}
            selectedInvoices={selectedInvoices}
            rateByPeriod={rateByPeriod}
            isSimulationOutdated={isSimulationOutdated}
          >
            <LoadingButton
              onClick={requestAnticipation}
              loading={loading && !isSimulationOutdated}
              ButtonComponent={ConfirmationButton}
              size="large"
              disabled={isSimulationOutdated}
            >
              SOLICITAR ADIANTAMENTO
            </LoadingButton>
          </SimulationInfo>
        </Row>
      </Drawer>
      <SimulationDialog
        title="Termos do Relatório de Simulação"
        open={open}
        onClose={() => {
          setOpen(false);
          setCanDownload(false);
        }}
        maxWidth={592}
        confirmationButtonProps={{
          text: 'CONTINUAR',
          onConfirmation: handleConfirmation,
          disabled: !canDownload,
        }}
      >
        <SimulationTerms checked={canDownload} onChange={() => setCanDownload(!canDownload)} />
      </SimulationDialog>
    </>
  );
};

SimulationDrawer.propTypes = {
  selectedInvoices: PropTypes.arrayOf(PropTypes.number),
  quote: PropTypes.shape({
    faceValue: PropTypes.number,
    discountValue: PropTypes.number,
    discountRate: PropTypes.number,
    netValue: PropTypes.number,
  }),
  rateByPeriod: PropTypes.bool,
  requestReport: PropTypes.func,
  requestAnticipation: PropTypes.func,
  changeQuote: PropTypes.func,
  loading: PropTypes.bool,
  isAdmin: PropTypes.bool,
  isSimulationOutdated: PropTypes.bool,
};

SimulationDrawer.defaultProps = {
  selectedInvoices: [],
  quote: {},
  rateByPeriod: false,
  requestReport: () => {},
  requestAnticipation: () => {},
  changeQuote: () => {},
  loading: false,
  isAdmin: false,
  isSimulationOutdated: false,
};

const mapStateToProps = ({
  vendorInvoices: { selectedInvoices, quote, rateByPeriod, loading, isAdmin, isSimulationOutdated },
}) => ({
  selectedInvoices,
  quote,
  rateByPeriod,
  loading,
  isAdmin,
  isSimulationOutdated,
});

const mapDispatchToProps = {
  requestReport: requestSimulationReport,
  requestAnticipation: anticipateInvoices,
  changeQuote: calculateQuote,
};

export default connect(mapStateToProps, mapDispatchToProps)(SimulationDrawer);
