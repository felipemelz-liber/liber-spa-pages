import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import KeyValueDropDown from '../KeyValueDropDown';
import {
  Container,
  Body,
  Footer,
  Box,
  BoxRow,
  BoxTitle,
  Tag,
  Checkbox,
} from './AcccountSelect.styles';
import { PsGlobalStyle } from '../Assets';

class AccountSelect extends PureComponent {
  constructor(props) {
    super(props);

    const account = props.accounts[0] || {
      id: -1,
      bankName: '',
    };
    this.state = {
      selected: account.id,
      name: account.bankName,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.selected !== null) {
      const account = props.accounts.find(acc => acc.id === props.selected);
      return {
        selected: props.selected,
        name: account.bankName,
      };
    }
    if (state.selected === -1 && props.accounts[0]) {
      return {
        selected: props.accounts[0].id,
        name: props.accounts[0].bankName,
      };
    }

    return state;
  }

  savingsComplementLabel = bankCode =>
    ({
      '001': 'Variação: ',
      104: 'Operação: ',
      341: 'Complemento: ',
    }[bankCode] || 'Número da poupança: ');

  renderAccountInfo = (kind, bankCode, account, digit, savingsComplement) => (
    <BoxRow>
      {kind.toUpperCase()}: {account}
      {digit !== '' && `-${digit}`}
      {kind === 'ci' &&
        ['001', '104', '341'].includes(bankCode) &&
        ` | ${this.savingsComplementLabel(bankCode)}${savingsComplement}`}
    </BoxRow>
  );

  selectionCallback = (account, onSelect) => onSelect(account);

  handleSelectAccount = selected => () => {
    const { accounts, onSelect } = this.props;
    const account = accounts.find(acc => acc.id === selected);
    this.setState(
      {
        selected,
        name: account.bankName,
      },
      this.selectionCallback(account, onSelect),
    );
  };

  renderOptions = (accounts, selected) =>
    accounts.map(account => {
      const checked = selected === account.id;
      return (
        <Box key={account.id} checked={checked} onClick={this.handleSelectAccount(account.id)}>
          <BoxRow>
            <BoxTitle>{account.bankName}</BoxTitle>
            {account.conjunct && <Tag>Conjunta</Tag>}
            <Checkbox id={`account-checkbox-${account.id}`} checked={checked} />
          </BoxRow>
          <BoxRow>
            Ag: {account.agency}
            {account.agencyDigit !== '' && `-${account.agencyDigit}`}
          </BoxRow>
          {this.renderAccountInfo(
            account.kind,
            account.bankCode,
            account.account,
            account.accountDigit,
            account.savingsComplement,
          )}
        </Box>
      );
    });

  render() {
    const { selected, name } = this.state;
    const { accounts, action, actionLabel, onAction } = this.props;
    return (
      <>
        <PsGlobalStyle />
        <KeyValueDropDown label={name} keyLabel="Banco" containerSize>
          <Container>
            {accounts.length !== 0 && <Body>{this.renderOptions(accounts, selected)}</Body>}
            {action && (
              <Footer>
                <button onClick={onAction} type="button">
                  {actionLabel}
                </button>
              </Footer>
            )}
          </Container>
        </KeyValueDropDown>
      </>
    );
  }
}

AccountSelect.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      default: PropTypes.bool,
      kind: PropTypes.string,
      agency: PropTypes.string,
      agencyDigit: PropTypes.string,
      account: PropTypes.string,
      accountDigit: PropTypes.string,
      conjunct: PropTypes.bool,
      bankCode: PropTypes.string,
      bankName: PropTypes.string,
      savingsComplement: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
  onSelect: PropTypes.func,
  selected: PropTypes.number, // eslint-disable-line
  action: PropTypes.bool,
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
};
AccountSelect.defaultProps = {
  accounts: [],
  selected: null,
  action: true,
  actionLabel: 'CADASTRAR',
  onSelect: () => {},
  onAction: () => {},
};

export default AccountSelect;
