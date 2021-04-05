import React from 'react';
import styled from 'styled-components';
import AccountSelect from './AccountSelect';
import accounts from './accounts';

const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafdff;
  padding: 64px;
  box-sizing: border-box;

  & > div {
    width: 296px;
  }
`;

class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 0,
      accounts: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ accounts });
    }, 1000);
  }

  render() {
    const { selection, accounts: accs } = this.state;
    return (
      <Center>
        <div>
          <AccountSelect
            accounts={accs}
            selection={selection}
            onSelect={account => this.setState({ selection: account.id })}
          />
        </div>
      </Center>
    );
  }
}

export default {
  title: 'Components 2.0|Account Select',
  parameters: {
    jest: ['AccountSelect'],
  },
};

export const defaultStory = () => (
  <Center>
    <div>
      <AccountSelect
        accounts={accounts}
        onSelect={account => alert(`Conta do ${account.bankName} selecionada`)}
      />
    </div>
  </Center>
);

defaultStory.story = {
  name: 'default',
};

export const controled = () => <Selection />;

export const withoutActionButton = () => (
  <Center>
    <div>
      <AccountSelect accounts={accounts} action={false} />
    </div>
  </Center>
);

export const customActionButtonLabel = () => (
  <Center>
    <div>
      <AccountSelect
        accounts={accounts}
        actionLabel="Customizado"
        onAction={() => alert('Action')}
      />
    </div>
  </Center>
);
