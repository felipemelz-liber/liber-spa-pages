import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatButton, FlatLink } from 'liber-components';
import {
  SubTitle,
  AdvancesContainer,
  Item,
  Card,
  Section,
  Row,
  FaceLabel,
  NetValue,
  ValueContainer,
  Footer,
  EyeIcon,
} from './PendingAdvances.styles';
import StatusText from '../../../StatusText/StatusText';
import { formatMoney } from '../../../../views/withdraw/moneyHandler';
import CancellationDialog from '../../../CancellationDialog/CancellationDialog';
import { CANCEL_PAGE_URL } from '../../urls';
import HideFromAdmin from '../HideFromAdmin/HideFromAdmin';
import { dispatchDataLayerEvent } from '../../../../vendor/Utils';

const statusReference = {
  signed: 'Realizando Pagamento',
  started: 'Aguardando Confirmação',
  created: 'Aguardando Confirmação',
};

const renderAdvanceCard = (
  advance,
  setDialogOpen,
  setSelectedAdvanceId,
  onDetailsClick,
  isAdmin,
) => {
  const { id, status, netValue, userHasSigned } = advance;

  const isDocumentGenerated = status !== 'created';
  const userHasToSign = ['created', 'started'].includes(status) && !userHasSigned;

  const handleConfirmClick = () => {
    dispatchDataLayerEvent('antecipacoesConfirmarAntecipacao', isAdmin);
  };

  const handleAdvanceShowClick = () => {
    dispatchDataLayerEvent('antecipacoesSolicitacoesEmAndamentoShowDoBordero', isAdmin);
  };

  return (
    <Item key={id}>
      <Card>
        <StatusText type="neutral">{statusReference[status]}</StatusText>
        <FaceLabel>Valor de Antecipação</FaceLabel>
        <Row>
          <ValueContainer>
            <NetValue>{`R$ ${formatMoney(netValue)}`}</NetValue>
          </ValueContainer>
          {!isAdmin ? (
            <a href={`/fornecedor/antecipacoes/${id}`} onClick={handleAdvanceShowClick}>
              <EyeIcon />
            </a>
          ) : (
            <EyeIcon onClick={() => onDetailsClick(id)} />
          )}
        </Row>
        {userHasToSign ? (
          <HideFromAdmin>
            <Footer>
              <FlatButton
                onClick={() => {
                  setDialogOpen(true);
                  setSelectedAdvanceId(advance.id);
                }}
              >
                CANCELAR
              </FlatButton>
              <FlatLink
                href={`/fornecedor/antecipacoes/sign?ids[]=${id}&generated=${isDocumentGenerated}`}
                onClick={handleConfirmClick}
              >
                CONFIRMAR
              </FlatLink>
            </Footer>
          </HideFromAdmin>
        ) : null}
      </Card>
    </Item>
  );
};

export const PendingAdvances = ({ pendingAdvances, onDetailsClick, isAdmin }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedAdvanceId, setSelectedAdvanceId] = React.useState(null);

  const onDialogClose = () => {
    setSelectedAdvanceId(null);
    setDialogOpen(false);
  };

  const redirectToCancel = () => {
    dispatchDataLayerEvent('antecipacoesCancelarAntecipacao', isAdmin);
    window.location.href = `${CANCEL_PAGE_URL}?id=${selectedAdvanceId}`;
  };

  return pendingAdvances.length > 0 ? (
    <>
      <Section>
        <SubTitle>Solicitações em Andamento</SubTitle>
        <AdvancesContainer>
          {pendingAdvances.map(advance =>
            renderAdvanceCard(
              advance,
              setDialogOpen,
              setSelectedAdvanceId,
              onDetailsClick,
              isAdmin,
            ),
          )}
        </AdvancesContainer>
      </Section>
      <CancellationDialog open={dialogOpen} onClose={onDialogClose} onConfirm={redirectToCancel} />
    </>
  ) : null;
};

PendingAdvances.propTypes = {
  pendingAdvances: PropTypes.arrayOf(PropTypes.object),
  onDetailsClick: PropTypes.func,
  isAdmin: PropTypes.bool,
};

PendingAdvances.defaultProps = {
  pendingAdvances: [],
  onDetailsClick: () => null,
  isAdmin: false,
};

const mapStateToProps = ({ vendorAdvances: { pendingAdvances, isAdmin } }) => ({
  pendingAdvances,
  isAdmin,
});

export default connect(mapStateToProps)(PendingAdvances);
