import React from 'react';
import styled from 'styled-components';
import {
  SelectionTable,
  SelectionTableHeader,
  SelectionTableRow,
  SelectionTableHeaderColumn,
  SelectionTableBody,
  SelectionTableRowColumn,
  CheckboxTable,
} from './SelectionTable';
import { SimpleDropDown } from '../../../DropDown';
import { Button } from '../../../Buttons';
import { MoreVert, AttachMoney, Description } from '../../../Icons';

const Container = styled.div`
  margin: 20px;
`;

const ResponsiveContainer = styled.div`
  margin: 20px;
  overflow-y: hidden;
  overflow-x: auto;
`;

const MoreVertIcon = styled(MoreVert)`
  width: 16px;
  height: 16px;
`;

const DropDownButton = styled(Button)`
  width: 32px;
  height: 32px;
  padding: 8px;
  background-color: #ecf0f3;
`;

const DropDownContent = styled.div`
  padding: 14px;
  display: flex;
  flex-direction: column;
`;

const DropDownContentRow = styled.a`
  display: flex;
  flex-direction: row;
  margin-bottom: 3px;
  margin-top: 3px;
`;

const DropDownContentRowIcon = styled.div`
  margin-right: 8px;
`;

const MoneyIcon = styled(AttachMoney)`
  width: 16px;
  height: 16px;
  fill: #4b6f85;
`;

const DescriptionIcon = styled(Description)`
  width: 16px;
  height: 16px;
  fill: #4b6f85;
`;

const makeSelection = (selected, value) => {
  if (selected.includes(value)) {
    return selected.filter(item => item !== value);
  }
  return [...selected, value];
};

export default {
  title: 'Components 2.0|Table/Selection Table',
  parameters: {
    jest: ['SelectionTable'],
  },
};

export const selectionTable = () => {
  const [selected, setSelected] = React.useState([]);
  return (
    <Container>
      <SelectionTable>
        <SelectionTableHeader>
          <SelectionTableRow>
            <SelectionTableHeaderColumn width={40}>
              <CheckboxTable
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
            </SelectionTableHeaderColumn>
            <SelectionTableHeaderColumn>Número</SelectionTableHeaderColumn>
            <SelectionTableHeaderColumn>Vencimento</SelectionTableHeaderColumn>
            <SelectionTableHeaderColumn>Valor Face</SelectionTableHeaderColumn>
            <SelectionTableHeaderColumn>Taxa de Desconto</SelectionTableHeaderColumn>
            <SelectionTableHeaderColumn width={45}>Ações</SelectionTableHeaderColumn>
          </SelectionTableRow>
        </SelectionTableHeader>
        <SelectionTableBody>
          <SelectionTableRow selected={selected.includes(0)}>
            <SelectionTableRowColumn>
              <CheckboxTable
                checked={selected.includes(0)}
                onChange={() => {
                  setSelected(makeSelection(selected, 0));
                }}
              />
            </SelectionTableRowColumn>
            <SelectionTableRowColumn>6275</SelectionTableRowColumn>
            <SelectionTableRowColumn>28/04/2019</SelectionTableRowColumn>
            <SelectionTableRowColumn>R$ 101.360,00</SelectionTableRowColumn>
            <SelectionTableRowColumn>0,90% a.m.</SelectionTableRowColumn>
            <SelectionTableRowColumn>
              <SimpleDropDown
                customButton={
                  <DropDownButton>
                    <MoreVertIcon />
                  </DropDownButton>
                }
                position="bottom-center-right"
              >
                <DropDownContent>
                  <DropDownContentRow>
                    <DropDownContentRowIcon>
                      <MoneyIcon />
                    </DropDownContentRowIcon>
                    <div>Solicitar adiantamento</div>
                  </DropDownContentRow>
                  <DropDownContentRow>
                    <DropDownContentRowIcon>
                      <DescriptionIcon />
                    </DropDownContentRowIcon>
                    <div>Detalhes do título</div>
                  </DropDownContentRow>
                </DropDownContent>
              </SimpleDropDown>
            </SelectionTableRowColumn>
          </SelectionTableRow>
          <SelectionTableRow selected={selected.includes(1)}>
            <SelectionTableRowColumn>
              <CheckboxTable
                checked={selected.includes(1)}
                onChange={() => {
                  setSelected(makeSelection(selected, 1));
                }}
              />
            </SelectionTableRowColumn>
            <SelectionTableRowColumn>5961</SelectionTableRowColumn>
            <SelectionTableRowColumn>03/05/2019</SelectionTableRowColumn>
            <SelectionTableRowColumn>R$ 101.360,00</SelectionTableRowColumn>
            <SelectionTableRowColumn>0,90% a.m.</SelectionTableRowColumn>
            <SelectionTableRowColumn>
              <SimpleDropDown
                customButton={
                  <DropDownButton>
                    <MoreVertIcon />
                  </DropDownButton>
                }
                position="bottom-center-right"
              >
                <DropDownContent>
                  <DropDownContentRow>
                    <DropDownContentRowIcon>
                      <MoneyIcon />
                    </DropDownContentRowIcon>
                    <div>Solicitar adiantamento</div>
                  </DropDownContentRow>
                  <DropDownContentRow>
                    <DropDownContentRowIcon>
                      <DescriptionIcon />
                    </DropDownContentRowIcon>
                    <div>Detalhes do título</div>
                  </DropDownContentRow>
                </DropDownContent>
              </SimpleDropDown>
            </SelectionTableRowColumn>
          </SelectionTableRow>
          <SelectionTableRow selected={selected.includes(2)}>
            <SelectionTableRowColumn>
              <CheckboxTable
                checked={selected.includes(2)}
                onChange={() => {
                  setSelected(makeSelection(selected, 2));
                }}
              />
            </SelectionTableRowColumn>
            <SelectionTableRowColumn>1498</SelectionTableRowColumn>
            <SelectionTableRowColumn>07/06/2019</SelectionTableRowColumn>
            <SelectionTableRowColumn>R$ 101.360,00</SelectionTableRowColumn>
            <SelectionTableRowColumn>0,90% a.m.</SelectionTableRowColumn>
            <SelectionTableRowColumn>
              <SimpleDropDown
                customButton={
                  <DropDownButton>
                    <MoreVertIcon />
                  </DropDownButton>
                }
                position="bottom-center-right"
              >
                <DropDownContent>
                  <DropDownContentRow>
                    <DropDownContentRowIcon>
                      <MoneyIcon />
                    </DropDownContentRowIcon>
                    <div>Solicitar adiantamento</div>
                  </DropDownContentRow>
                  <DropDownContentRow>
                    <DropDownContentRowIcon>
                      <DescriptionIcon />
                    </DropDownContentRowIcon>
                    <div>Detalhes do título</div>
                  </DropDownContentRow>
                </DropDownContent>
              </SimpleDropDown>
            </SelectionTableRowColumn>
          </SelectionTableRow>
          <SelectionTableRow selected={selected.includes(3)}>
            <SelectionTableRowColumn>
              <CheckboxTable
                checked={selected.includes(3)}
                onChange={() => {
                  setSelected(makeSelection(selected, 3));
                }}
              />
            </SelectionTableRowColumn>
            <SelectionTableRowColumn>7842</SelectionTableRowColumn>
            <SelectionTableRowColumn>25/08/2019</SelectionTableRowColumn>
            <SelectionTableRowColumn>R$ 101.360,00</SelectionTableRowColumn>
            <SelectionTableRowColumn>0,90% a.m.</SelectionTableRowColumn>
            <SelectionTableRowColumn>
              <SimpleDropDown
                customButton={
                  <DropDownButton>
                    <MoreVertIcon />
                  </DropDownButton>
                }
                position="bottom-center-right"
              >
                <DropDownContent>
                  <DropDownContentRow>
                    <DropDownContentRowIcon>
                      <MoneyIcon />
                    </DropDownContentRowIcon>
                    <div>Solicitar adiantamento</div>
                  </DropDownContentRow>
                  <DropDownContentRow>
                    <DropDownContentRowIcon>
                      <DescriptionIcon />
                    </DropDownContentRowIcon>
                    <div>Detalhes do título</div>
                  </DropDownContentRow>
                </DropDownContent>
              </SimpleDropDown>
            </SelectionTableRowColumn>
          </SelectionTableRow>
        </SelectionTableBody>
      </SelectionTable>
    </Container>
  );
};

selectionTable.story = {
  name: 'selection table',
};

export const responsiveSelectionTable = () => (
  <ResponsiveContainer>
    <SelectionTable>
      <SelectionTableHeader>
        <SelectionTableRow>
          <SelectionTableHeaderColumn width={40}>
            <CheckboxTable borderSize={2} />
          </SelectionTableHeaderColumn>
          <SelectionTableHeaderColumn>Número</SelectionTableHeaderColumn>
          <SelectionTableHeaderColumn>Vencimento</SelectionTableHeaderColumn>
          <SelectionTableHeaderColumn>Valor Face</SelectionTableHeaderColumn>
          <SelectionTableHeaderColumn>Taxa de Desconto</SelectionTableHeaderColumn>
          <SelectionTableHeaderColumn width={45}>Ações</SelectionTableHeaderColumn>
        </SelectionTableRow>
      </SelectionTableHeader>
      <SelectionTableBody>
        <SelectionTableRow>
          <SelectionTableRowColumn>
            <CheckboxTable />
          </SelectionTableRowColumn>
          <SelectionTableRowColumn>6275</SelectionTableRowColumn>
          <SelectionTableRowColumn>28/04/2019</SelectionTableRowColumn>
          <SelectionTableRowColumn>R$ 101.360,00</SelectionTableRowColumn>
          <SelectionTableRowColumn>0,90% a.m.</SelectionTableRowColumn>
          <SelectionTableRowColumn>
            <SimpleDropDown
              customButton={
                <DropDownButton>
                  <MoreVertIcon />
                </DropDownButton>
              }
              position="bottom-center-right"
            >
              <DropDownContent>
                <DropDownContentRow>
                  <DropDownContentRowIcon>
                    <MoneyIcon />
                  </DropDownContentRowIcon>
                  <div>Solicitar adiantamento</div>
                </DropDownContentRow>
                <DropDownContentRow>
                  <DropDownContentRowIcon>
                    <DescriptionIcon />
                  </DropDownContentRowIcon>
                  <div>Detalhes do título</div>
                </DropDownContentRow>
              </DropDownContent>
            </SimpleDropDown>
          </SelectionTableRowColumn>
        </SelectionTableRow>
        <SelectionTableRow>
          <SelectionTableRowColumn>
            <CheckboxTable />
          </SelectionTableRowColumn>
          <SelectionTableRowColumn>5961</SelectionTableRowColumn>
          <SelectionTableRowColumn>03/05/2019</SelectionTableRowColumn>
          <SelectionTableRowColumn>R$ 101.360,00</SelectionTableRowColumn>
          <SelectionTableRowColumn>0,90% a.m.</SelectionTableRowColumn>
          <SelectionTableRowColumn>
            <SimpleDropDown
              customButton={
                <DropDownButton>
                  <MoreVertIcon />
                </DropDownButton>
              }
              position="bottom-center-right"
            >
              <DropDownContent>
                <DropDownContentRow>
                  <DropDownContentRowIcon>
                    <MoneyIcon />
                  </DropDownContentRowIcon>
                  <div>Solicitar adiantamento</div>
                </DropDownContentRow>
                <DropDownContentRow>
                  <DropDownContentRowIcon>
                    <DescriptionIcon />
                  </DropDownContentRowIcon>
                  <div>Detalhes do título</div>
                </DropDownContentRow>
              </DropDownContent>
            </SimpleDropDown>
          </SelectionTableRowColumn>
        </SelectionTableRow>
        <SelectionTableRow>
          <SelectionTableRowColumn>
            <CheckboxTable />
          </SelectionTableRowColumn>
          <SelectionTableRowColumn>1498</SelectionTableRowColumn>
          <SelectionTableRowColumn>07/06/2019</SelectionTableRowColumn>
          <SelectionTableRowColumn>R$ 101.360,00</SelectionTableRowColumn>
          <SelectionTableRowColumn>0,90% a.m.</SelectionTableRowColumn>
          <SelectionTableRowColumn>
            <SimpleDropDown
              customButton={
                <DropDownButton>
                  <MoreVertIcon />
                </DropDownButton>
              }
              position="bottom-center-right"
            >
              <DropDownContent>
                <DropDownContentRow>
                  <DropDownContentRowIcon>
                    <MoneyIcon />
                  </DropDownContentRowIcon>
                  <div>Solicitar adiantamento</div>
                </DropDownContentRow>
                <DropDownContentRow>
                  <DropDownContentRowIcon>
                    <DescriptionIcon />
                  </DropDownContentRowIcon>
                  <div>Detalhes do título</div>
                </DropDownContentRow>
              </DropDownContent>
            </SimpleDropDown>
          </SelectionTableRowColumn>
        </SelectionTableRow>
        <SelectionTableRow>
          <SelectionTableRowColumn>
            <CheckboxTable />
          </SelectionTableRowColumn>
          <SelectionTableRowColumn>7842</SelectionTableRowColumn>
          <SelectionTableRowColumn>25/08/2019</SelectionTableRowColumn>
          <SelectionTableRowColumn>R$ 101.360,00</SelectionTableRowColumn>
          <SelectionTableRowColumn>0,90% a.m.</SelectionTableRowColumn>
          <SelectionTableRowColumn>
            <SimpleDropDown
              customButton={
                <DropDownButton>
                  <MoreVertIcon />
                </DropDownButton>
              }
              position="bottom-center-right"
            >
              <DropDownContent>
                <DropDownContentRow>
                  <DropDownContentRowIcon>
                    <MoneyIcon />
                  </DropDownContentRowIcon>
                  <div>Solicitar adiantamento</div>
                </DropDownContentRow>
                <DropDownContentRow>
                  <DropDownContentRowIcon>
                    <DescriptionIcon />
                  </DropDownContentRowIcon>
                  <div>Detalhes do título</div>
                </DropDownContentRow>
              </DropDownContent>
            </SimpleDropDown>
          </SelectionTableRowColumn>
        </SelectionTableRow>
      </SelectionTableBody>
    </SelectionTable>
  </ResponsiveContainer>
);
