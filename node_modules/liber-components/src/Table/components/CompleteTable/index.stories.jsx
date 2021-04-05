import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CompleteTable from './CompleteTable';
import {
  COLUMNS,
  ITEMS,
  ITEMS_EXTENDED,
  WEIGHTED_COLUMNS,
  TWO_LINE_COLUMNS,
  TWO_LINE_ITEMS,
} from '../../utils';

const Container = styled.div`
  padding: 16px;
  ${({ small }) => (small ? 'max-width: 420px;' : 'max-width: 720px;')}
  ${({ limitHeight }) => limitHeight && 'max-height: 300px; overflow-y: auto;'}
`;

const EmptyContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: 1px solid grey;
`;

export default {
  title: 'Components 2.0|Table/Complete Table',
  parameters: {
    jest: [
      'CompleteTable',
      'CompleteTable.styles',
      'TableHeader',
      'TableHeader.styles',
      'TableHeaderColumns',
      'TableRow',
    ],
  },
};

export const completeTable = () => {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState([]);
  const [currentPage, setCurrentPage] = useState('1');
  const [listing, setListing] = useState('10');

  const getCurrentItems = () =>
    ITEMS_EXTENDED.slice(
      parseInt(currentPage) -
        1 +
        (parseInt(currentPage) - 1) * parseInt(listing) -
        (parseInt(currentPage) - 1),
      parseInt(listing) * parseInt(currentPage),
    );

  useEffect(() => {
    setItems(getCurrentItems());
    setSelected([]);
  }, [currentPage, listing]);

  useEffect(() => {
    setCurrentPage('1');
    setItems(getCurrentItems());
  }, [listing]);

  const isItemSelected = item => selected.includes(item);
  const onSelect = item => {
    if (!selected.includes(item)) setSelected([item, ...selected]);
    else {
      let currentSelected = [...selected];
      currentSelected.splice(currentSelected.indexOf(item), 1);
      setSelected([...currentSelected]);
    }
  };
  const onKeyDownPage = ({ key, target }) => {
    if (key === 'Enter') {
      alert(`Página ${target.value} selecionada`);
    }
  };
  const pageTotal = (total, perPage) => String(parseInt(total / perPage) + 1);

  return (
    <Container>
      <CompleteTable
        columns={COLUMNS}
        items={items}
        onSelectAll={() => {
          if (selected.length === items.length) {
            setSelected([]);
          } else {
            setSelected([...items]);
          }
        }}
        allChecked={selected.length === items.length}
        isItemSelected={isItemSelected}
        onSelect={onSelect}
        filters={<div>Filtros</div>}
        actions={<div>Ações</div>}
        paginationProps={{
          currentPage: currentPage,
          pageTotal: pageTotal(ITEMS_EXTENDED.length, parseInt(listing)),
          onChangePage: target => setCurrentPage(target.value),
          onClickNext: () => setCurrentPage(`${parseInt(currentPage, 10) + 1}`),
          onClickPrev: () => setCurrentPage(`${parseInt(currentPage, 10) - 1}`),
          onKeyDownPage: onKeyDownPage,
          hasListing: true,
          listingProps: {
            onSelectListing: selectedListing => setListing(selectedListing),
            listing: listing,
            total: String(ITEMS_EXTENDED.length),
            listingLabelSingular: 'item',
            listingLabelPlural: 'itens',
          },
        }}
      />
    </Container>
  );
};

export const withoutPagination = () => {
  const [selected, setSelected] = useState([]);

  const isItemSelected = item => selected.includes(item);
  const onSelect = item => {
    if (!selected.includes(item)) setSelected([item, ...selected]);
    else {
      let currentSelected = [...selected];
      currentSelected.splice(currentSelected.indexOf(item), 1);
      setSelected([...currentSelected]);
    }
  };

  return (
    <Container>
      <CompleteTable
        columns={COLUMNS}
        items={ITEMS}
        onSelectAll={() => {
          if (selected.length === ITEMS.length) {
            setSelected([]);
          } else {
            setSelected([...ITEMS]);
          }
        }}
        allChecked={selected.length === ITEMS.length}
        isItemSelected={isItemSelected}
        onSelect={onSelect}
        filters={<div>Filtros</div>}
        actions={<div>Ações</div>}
      />
    </Container>
  );
};

export const stickyCompleteTable = () => {
  const [selected, setSelected] = useState([]);

  const isItemSelected = item => selected.includes(item);
  const onSelect = item => {
    if (!selected.includes(item)) setSelected([item, ...selected]);
    else {
      let currentSelected = [...selected];
      currentSelected.splice(currentSelected.indexOf(item), 1);
      setSelected([...currentSelected]);
    }
  };

  return (
    <Container limitHeight={1}>
      <CompleteTable
        columns={COLUMNS}
        items={ITEMS}
        onSelectAll={() => {
          if (selected.length === ITEMS.length) {
            setSelected([]);
          } else {
            setSelected([...ITEMS]);
          }
        }}
        allChecked={selected.length === ITEMS.length}
        isItemSelected={isItemSelected}
        onSelect={onSelect}
        filters={<div>Filtros</div>}
        actions={<div>Ações</div>}
      />
    </Container>
  );
};

export const withoutFilters = () => {
  const [selected, setSelected] = useState([]);

  const isItemSelected = item => selected.includes(item);
  const onSelect = item => {
    if (!selected.includes(item)) setSelected([item, ...selected]);
    else {
      let currentSelected = [...selected];
      currentSelected.splice(currentSelected.indexOf(item), 1);
      setSelected([...currentSelected]);
    }
  };

  return (
    <Container>
      <CompleteTable
        columns={COLUMNS}
        items={ITEMS}
        onSelectAll={() => {
          if (selected.length === ITEMS.length) {
            setSelected([]);
          } else {
            setSelected([...ITEMS]);
          }
        }}
        allChecked={selected.length === ITEMS.length}
        isItemSelected={isItemSelected}
        onSelect={onSelect}
        actions={<div>Ações</div>}
      />
    </Container>
  );
};
export const withUnselectableItems = () => {
  const [selected, setSelected] = useState([]);

  const isItemSelected = item => selected.includes(item);
  const isItemSelectable = ({ id }) => {
    console.log('in selection', id);
    return id % 2 === 0;
  };
  const onSelect = item => {
    if (!selected.includes(item)) setSelected([item, ...selected]);
    else {
      let currentSelected = [...selected];
      currentSelected.splice(currentSelected.indexOf(item), 1);
      setSelected([...currentSelected]);
    }
  };

  return (
    <Container>
      <CompleteTable
        columns={COLUMNS}
        items={ITEMS}
        isItemSelectable={isItemSelectable}
        onSelectAll={() => {
          if (selected.length === ITEMS.length) {
            setSelected([]);
          } else {
            setSelected([...ITEMS]);
          }
        }}
        allChecked={selected.length === ITEMS.length}
        isItemSelected={isItemSelected}
        onSelect={onSelect}
        actions={<div>Ações</div>}
      />
    </Container>
  );
};

export const withTooltipOnUnselectable = () => {
  const [selected, setSelected] = useState([]);

  const isItemSelected = item => selected.includes(item);
  const isItemSelectable = ({ id }) => {
    console.log('in selection', id);
    return id % 2 === 0;
  };
  const onSelect = item => {
    if (!selected.includes(item)) setSelected([item, ...selected]);
    else {
      let currentSelected = [...selected];
      currentSelected.splice(currentSelected.indexOf(item), 1);
      setSelected([...currentSelected]);
    }
  };

  const tooltipContent = ({ name, id }) =>
    isItemSelectable({ id }) ? null : (
      <b>O {name} não pode ser selecionado por motivos desconhecidos</b>
    );

  return (
    <Container>
      <CompleteTable
        columns={COLUMNS}
        items={ITEMS}
        isItemSelectable={isItemSelectable}
        onSelectAll={() => {
          if (selected.length === ITEMS.length) {
            setSelected([]);
          } else {
            setSelected([...ITEMS]);
          }
        }}
        allChecked={selected.length === ITEMS.length}
        isItemSelected={isItemSelected}
        onSelect={onSelect}
        actions={<div>Ações</div>}
        tooltipContent={tooltipContent}
      />
    </Container>
  );
};

export const withoutSelection = () => (
  <Container>
    <CompleteTable columns={COLUMNS} items={ITEMS} actions={<div>Ações</div>} />
  </Container>
);

export const withHiddenColumns = () => {
  const [hiddenColumns, setHiddenColumns] = useState([]);

  const toggleColumn = key => () => {
    let updatedColumns;

    if (hiddenColumns.includes(key)) {
      updatedColumns = hiddenColumns.filter(column => column !== key);
    } else {
      updatedColumns = [...hiddenColumns, key];
    }

    setHiddenColumns(updatedColumns);
  };

  return (
    <Container>
      <button type="button" onClick={toggleColumn('name')}>
        name
      </button>
      <button type="button" onClick={toggleColumn('date')}>
        date
      </button>
      <button type="button" onClick={toggleColumn('value')}>
        value
      </button>
      <CompleteTable
        columns={COLUMNS}
        items={ITEMS}
        actions={<div>Ações</div>}
        hiddenColumns={hiddenColumns}
      />
    </Container>
  );
};

export const withWeightedColumns = () => {
  return (
    <Container>
      <CompleteTable
        columns={WEIGHTED_COLUMNS}
        items={ITEMS}
        actions={<div>Ações</div>}
        weightedColumns
      />
    </Container>
  );
};

export const withSorting = () => {
  const [items, setItems] = useState(ITEMS);
  const [sorting, setSorting] = useState([]);

  const NEXT_DIRECTION = {
    asc: 'desc',
    desc: null,
  };

  const onSort = (column, columnSort) => {
    let newSortedColumns;
    if (columnSort) {
      const { columnName, direction: prevDirection } = columnSort;
      const baseArray = sorting.filter(sortItem => sortItem.columnName !== columnName);

      newSortedColumns = [...baseArray, { columnName, direction: NEXT_DIRECTION[prevDirection] }];
    } else {
      newSortedColumns = [...sorting, { columnName: column.name, direction: 'asc' }];
    }
    setSorting(newSortedColumns.filter(({ direction }) => Boolean(direction)));
  };

  return (
    <Container>
      <CompleteTable
        sortingProps={{
          onSort,
          sorting,
          sortedColumns: true,
        }}
        columns={COLUMNS}
        items={items}
        actions={<div>Ações</div>}
      />
    </Container>
  );
};

export const withSelectionControl = () => (
  <Container>
    <CompleteTable
      selectionControl={<Center>Controls</Center>}
      columns={COLUMNS}
      items={ITEMS}
      actions={<div>Ações</div>}
    />
  </Container>
);

export const withoutActions = () => (
  <Container small={1}>
    <CompleteTable columns={COLUMNS} items={ITEMS} />
  </Container>
);

export const emptyTable = () => (
  <Container>
    <CompleteTable columns={COLUMNS} items={[]} onSelectAll={() => null} />
  </Container>
);

export const withTwoLineContent = () => (
  <Container>
    <CompleteTable
      columns={TWO_LINE_COLUMNS}
      items={TWO_LINE_ITEMS}
      onSelectAll={() => null}
      actions={<div>Ações</div>}
    />
  </Container>
);

export const emptyWithCustom = () => (
  <Container>
    <CompleteTable
      columns={COLUMNS}
      items={[]}
      onSelectAll={() => null}
      emptyState={
        <EmptyContainer>Insira qualquer coisa aqui como uma mensagem ou uma imagem.</EmptyContainer>
      }
    />
  </Container>
);
