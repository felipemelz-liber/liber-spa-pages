import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import {
  List,
  ListHeader,
  ListRow,
  ListItem,
  ListFooter,
  ListSubItem,
  CheckboxList,
  ListSubItemSelection,
} from './List';
import { MdDownload, MdEye, MdEdit, MdDelete } from '../Icons';

const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafdff;
`;

const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ListItemKey = styled.div`
  font-family: Roboto;
  font-size: 16px;
  color: #798e9b;
`;
const ListItemValue = styled.div`
  font-family: Roboto;
  font-size: 16px;
  color: #405f71;
  font-weight: 500;
`;
const ListItemValueAlert = styled.div`
  font-family: Roboto;
  font-size: 16px;
  color: #fabe00;
  font-weight: 500;
`;
const ListItemValueError = styled.div`
  font-family: Roboto;
  font-size: 16px;
  color: #dc3545;
  font-weight: 500;
`;
const ListItemValueSuccess = styled.div`
  font-family: Roboto;
  font-size: 16px;
  color: #13ce66;
  font-weight: 500;
`;
const ListItemAction = styled.div`
  font-family: Roboto;
  font-size: 16px;
  background-color: #ffffff;
  color: #009dff;
  font-weight: 500;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
const ListItemActionIcon = styled(MdDownload)`
  fill: #009dff;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;
const ListHeaderContainer = styled.div`
  display: flex;
`;
const ListHeaderLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const ListHeaderIconsContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;
const ListHeaderViewIcon = styled(MdEye)`
  fill: #798e9b;
  width: 16px;
  height: 16px;
  margin: 0px 8px;
  cursor: pointer;
`;
const ListHeaderEditIcon = styled(MdEdit)`
  fill: #798e9b;
  width: 16px;
  height: 16px;
  margin: 0px 8px;
  cursor: pointer;
`;
const ListHeaderDeleteIcon = styled(MdDelete)`
  fill: #798e9b;
  width: 16px;
  height: 16px;
  margin: 0px 8px;
  cursor: pointer;
`;

const makeSelection = (selected, value) => {
  if (selected.includes(value)) {
    return selected.filter(item => item !== value);
  }
  return [...selected, value];
};

export default {
  title: 'Components 2.0|List',
  parameters: {
    jest: ['List'],
  },
};

export const simple = () => (
  <Center>
    <List>
      <ListHeader>Header</ListHeader>
      <ListRow>
        <ListItem>Exemplo de conteúdo para lista simples.</ListItem>
      </ListRow>
      <ListRow>
        <ListItem>Exemplo de conteúdo para lista simples.</ListItem>
      </ListRow>
      <ListRow>
        <ListItem>Exemplo de conteúdo para lista simples.</ListItem>
      </ListRow>
      <ListRow>
        <ListItem>Exemplo de conteúdo para lista simples.</ListItem>
      </ListRow>
      <ListFooter>Footer</ListFooter>
    </List>
  </Center>
);

export const withSubItens = () => (
  <Center>
    <List>
      <ListHeader>Header</ListHeader>
      <ListRow>
        <ListItem>Exemplo de conteudo para lista com sub items.</ListItem>
        <ListSubItem>Exemplo de conteudo para lista com sub items.</ListSubItem>
      </ListRow>
      <ListRow>
        <ListItem>Exemplo de conteudo para lista com sub items.</ListItem>
        <ListSubItem>Exemplo de conteudo para lista com sub items.</ListSubItem>
      </ListRow>
      <ListRow>
        <ListItem>Exemplo de conteudo para lista com sub items.</ListItem>
      </ListRow>
      <ListRow>
        <ListItem>Exemplo de conteudo para lista com sub items.</ListItem>
      </ListRow>
      <ListFooter>Footer</ListFooter>
    </List>
  </Center>
);

export const withFixedWidth = () => (
  <Center>
    <List width="250px">
      <ListHeader>Header</ListHeader>
      <ListRow>
        <ListItem>Exemplo de conteudo para lista com sub items.</ListItem>
        <ListSubItem>Exemplo de conteudo para lista com sub items.</ListSubItem>
      </ListRow>
      <ListRow>
        <ListItem>Exemplo de conteudo para lista com sub items.</ListItem>
        <ListSubItem>Exemplo de conteudo para lista com sub items.</ListSubItem>
      </ListRow>
      <ListRow>
        <ListItem>Exemplo de conteudo para lista com sub items.</ListItem>
      </ListRow>
      <ListRow>
        <ListItem>Exemplo de conteudo para lista com sub items.</ListItem>
      </ListRow>
      <ListFooter>Footer</ListFooter>
    </List>
  </Center>
);

export const withData = () => (
  <Center>
    <List width="300px">
      <ListHeader>Header</ListHeader>
      <ListRow>
        <ListItem>
          <ListItemContainer>
            <ListItemKey>Conteúdo da lista</ListItemKey>
            <ListItemValue>Texto</ListItemValue>
          </ListItemContainer>
        </ListItem>
      </ListRow>
      <ListRow>
        <ListItem>
          <ListItemContainer>
            <ListItemKey>Conteúdo da lista</ListItemKey>
            <ListItemValueError>Erro</ListItemValueError>
          </ListItemContainer>
        </ListItem>
      </ListRow>
      <ListRow>
        <ListItem>
          <ListItemContainer>
            <ListItemKey>Conteúdo da lista</ListItemKey>
            <ListItemValueAlert>Alerta</ListItemValueAlert>
          </ListItemContainer>
        </ListItem>
      </ListRow>
      <ListRow>
        <ListItem>
          <ListItemContainer>
            <ListItemKey>Conteúdo da lista</ListItemKey>
            <ListItemValueSuccess>Sucesso</ListItemValueSuccess>
          </ListItemContainer>
        </ListItem>
      </ListRow>
      <ListRow>
        <ListItem>
          <ListItemContainer>
            <ListItemKey>Conteúdo da lista</ListItemKey>
            <ListItemAction onClick={action('click')}>
              <ListItemActionIcon />
              Download
            </ListItemAction>
          </ListItemContainer>
        </ListItem>
      </ListRow>
      <ListFooter>Footer</ListFooter>
    </List>
  </Center>
);

export const simpleSelection = () => {
  const [selected, setSelected] = React.useState([]);
  return (
    <Center>
      <List>
        <ListHeader>
          <CheckboxList
            borderSize={2}
            checked={selected.length === 4}
            onChange={() => {
              if (selected.length === 4) {
                setSelected([]);
              } else {
                setSelected([0, 1, 2, 3]);
              }
            }}
          />
          Header
        </ListHeader>
        <ListRow>
          <ListItem>
            <CheckboxList
              checked={selected.includes(0)}
              onChange={() => {
                setSelected(makeSelection(selected, 0));
              }}
            />
            Exemplo de conteúdo para lista simples.
          </ListItem>
        </ListRow>
        <ListRow>
          <ListItem>
            <CheckboxList
              checked={selected.includes(1)}
              onChange={() => {
                setSelected(makeSelection(selected, 1));
              }}
            />
            Exemplo de conteúdo para lista simples.
          </ListItem>
        </ListRow>
        <ListRow>
          <ListItem>
            <CheckboxList
              checked={selected.includes(2)}
              onChange={() => {
                setSelected(makeSelection(selected, 2));
              }}
            />
            Exemplo de conteúdo para lista simples.
          </ListItem>
        </ListRow>
        <ListRow>
          <ListItem>
            <CheckboxList
              checked={selected.includes(3)}
              onChange={() => {
                setSelected(makeSelection(selected, 3));
              }}
            />
            Exemplo de conteúdo para lista simples.
          </ListItem>
        </ListRow>
        <ListFooter>Footer</ListFooter>
      </List>
    </Center>
  );
};

export const selectionWithSubItens = () => {
  const [selected, setSelected] = React.useState([]);
  return (
    <Center>
      <List>
        <ListHeader>
          <CheckboxList
            borderSize={2}
            checked={selected.length === 4}
            onChange={() => {
              if (selected.length === 4) {
                setSelected([]);
              } else {
                setSelected([0, 1, 2, 3]);
              }
            }}
          />
          Header
        </ListHeader>
        <ListRow>
          <ListItem>
            <CheckboxList
              checked={selected.includes(0)}
              onChange={() => {
                setSelected(makeSelection(selected, 0));
              }}
            />
            Título registrado
          </ListItem>
          <ListSubItemSelection>Exemplo de conteudo para lista com sub items.</ListSubItemSelection>
        </ListRow>
        <ListRow>
          <ListItem>
            <CheckboxList
              checked={selected.includes(1)}
              onChange={() => {
                setSelected(makeSelection(selected, 1));
              }}
            />
            Título registrado
          </ListItem>
          <ListSubItemSelection>Exemplo de conteudo para lista com sub items.</ListSubItemSelection>
        </ListRow>
        <ListRow>
          <ListItem>
            <CheckboxList
              checked={selected.includes(2)}
              onChange={() => {
                setSelected(makeSelection(selected, 2));
              }}
            />
            Título registrado
          </ListItem>
          <ListSubItemSelection>Exemplo de conteudo para lista com sub items.</ListSubItemSelection>
        </ListRow>
        <ListRow>
          <ListItem>
            <CheckboxList
              checked={selected.includes(3)}
              onChange={() => {
                setSelected(makeSelection(selected, 3));
              }}
            />
            Título registrado
          </ListItem>
          <ListSubItemSelection>Exemplo de conteudo para lista com sub items.</ListSubItemSelection>
        </ListRow>
        <ListFooter>Footer</ListFooter>
      </List>
    </Center>
  );
};

export const SelectionWithFixedWidth = () => {
  const [selected, setSelected] = React.useState([]);
  return (
    <Center>
      <List width="350px">
        <ListHeader>
          <CheckboxList
            borderSize={2}
            checked={selected.length === 4}
            onChange={() => {
              if (selected.length === 4) {
                setSelected([]);
              } else {
                setSelected([0, 1, 2, 3]);
              }
            }}
          />
          Header
        </ListHeader>
        <ListRow>
          <ListItem>
            <CheckboxList
              checked={selected.includes(0)}
              onChange={() => {
                setSelected(makeSelection(selected, 0));
              }}
            />
            Título registrado
          </ListItem>
          <ListSubItemSelection>
            Exemplo de conteúdo para lista de seleção com número de linhas igual a 2.
          </ListSubItemSelection>
        </ListRow>
        <ListRow>
          <ListItem>
            <CheckboxList
              checked={selected.includes(1)}
              onChange={() => {
                setSelected(makeSelection(selected, 1));
              }}
            />
            Título registrado
          </ListItem>
          <ListSubItemSelection>
            Exemplo de conteúdo para lista de seleção com número de linhas igual a 2.
          </ListSubItemSelection>
        </ListRow>
        <ListRow>
          <ListItem>
            <CheckboxList
              checked={selected.includes(2)}
              onChange={() => {
                setSelected(makeSelection(selected, 2));
              }}
            />
            Título registrado
          </ListItem>
          <ListSubItemSelection>
            Exemplo de conteúdo para lista de seleção com número de linhas igual a 2.
          </ListSubItemSelection>
        </ListRow>
        <ListFooter>Footer</ListFooter>
      </List>
    </Center>
  );
};

export const withSelectionControl = () => {
  const [selected, setSelected] = React.useState([]);
  return (
    <Center>
      <List>
        <ListHeader>
          <ListHeaderContainer>
            <CheckboxList
              borderSize={2}
              checked={selected.length === 4}
              onChange={() => {
                if (selected.length === 4) {
                  setSelected([]);
                } else {
                  setSelected([0, 1, 2, 3]);
                }
              }}
            />
            <ListHeaderLabelContainer>
              {selected.length === 0
                ? 'Header'
                : `${selected.length} selecionado${selected.length !== 1 ? 's' : ''}`}
              {selected.length !== 0 && (
                <ListHeaderIconsContainer>
                  <ListHeaderViewIcon onClick={action('click')} />
                  <ListHeaderEditIcon onClick={action('click')} />
                  <ListHeaderDeleteIcon onClick={action('click')} />
                </ListHeaderIconsContainer>
              )}
            </ListHeaderLabelContainer>
          </ListHeaderContainer>
        </ListHeader>
        <ListRow>
          <ListItem>
            <CheckboxList
              checked={selected.includes(0)}
              onChange={() => {
                setSelected(makeSelection(selected, 0));
              }}
            />
            Título registrado
          </ListItem>
          <ListSubItemSelection>Exemplo de conteudo para lista com sub items.</ListSubItemSelection>
        </ListRow>
        <ListRow>
          <ListItem>
            <CheckboxList
              checked={selected.includes(1)}
              onChange={() => {
                setSelected(makeSelection(selected, 1));
              }}
            />
            Título registrado
          </ListItem>
          <ListSubItemSelection>Exemplo de conteudo para lista com sub items.</ListSubItemSelection>
        </ListRow>
        <ListRow>
          <ListItem>
            <CheckboxList
              checked={selected.includes(2)}
              onChange={() => {
                setSelected(makeSelection(selected, 2));
              }}
            />
            Título registrado
          </ListItem>
          <ListSubItemSelection>Exemplo de conteudo para lista com sub items.</ListSubItemSelection>
        </ListRow>
        <ListRow>
          <ListItem>
            <CheckboxList
              checked={selected.includes(3)}
              onChange={() => {
                setSelected(makeSelection(selected, 3));
              }}
            />
            Título registrado
          </ListItem>
          <ListSubItemSelection>Exemplo de conteudo para lista com sub items.</ListSubItemSelection>
        </ListRow>
        <ListFooter>Footer</ListFooter>
      </List>
    </Center>
  );
};
