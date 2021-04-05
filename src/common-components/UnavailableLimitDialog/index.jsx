import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'liber-components';

import { Container, Header, Content, ActionsRow, Button } from './styles';
import { formatMoney } from '../../views/withdraw/moneyHandler';

function UnavailableLimitDialog({ surplusValue, onLeaved, show, redirectUrl }) {
  const handleOk = redirectUrl ? () => window.location.assign(redirectUrl) : onLeaved;

  return (
    <Modal onLeaved={onLeaved} show={show}>
      <Container>
        <Header>Limite Indisponível</Header>
        <Content>
          {surplusValue ? (
            <>
              A antecipação não poderá ser realizada, pois o valor líquido excedeu o seu limite
              disponível.
              <br />
              <br />O excesso tem o valor de {formatMoney(surplusValue, true)}. Remova esse valor
              dos títulos selecionados para solicitar sua antecipação.
            </>
          ) : (
            <>
              A antecipação foi cancelada, pois o valor líquido excedeu o limite mensal de
              antecipações definido pelo sacado.
              <br />
              <br />
              Aguarde o início do próximo mês ou a atualização dos limites.
            </>
          )}
        </Content>
        <ActionsRow>
          <Button onClick={handleOk}>OK</Button>
        </ActionsRow>
      </Container>
    </Modal>
  );
}

UnavailableLimitDialog.propTypes = {
  surplusValue: PropTypes.number,
  onLeaved: PropTypes.func,
  show: PropTypes.bool,
  redirectUrl: PropTypes.string,
};

UnavailableLimitDialog.defaultProps = {
  surplusValue: 0,
  onLeaved: () => {},
  show: false,
  redirectUrl: null,
};

export default UnavailableLimitDialog;
