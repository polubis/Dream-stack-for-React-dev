import { useState, useReducer } from 'react';
import { TableProps, RowData, TableState, TableAction } from './defs';
import { ROWS_PER_PAGE } from './consts';
import styled from 'styled-components';

const TableWrapper = styled.div`
  overflow: auto;
  max-width: 100%;
`;

const TableHeader = styled.div`
  display: flex;
  background-color: #f0f0f0;
  font-weight: bold;
`;

const TableCell = styled.div`
  flex: 1;
  padding: 8px;
`;

const EditButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
`;

const EditWindow = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const tableReducer = (state: TableState, action: TableAction): TableState => {
  switch (action.type) {
    case 'SET_PAGE':
      return { ...state, page: action.payload };

    case 'SET_ROWS_PER_PAGE':
      return { ...state, rowsPerPage: action.payload };

    default:
      return state;
  }
};

const initialState = {
  page: 1,
  rowsPerPage: 10,
};

const Table = ({ data, columns, onPageChange, onRowsPerPageChange }: TableProps<RowData>) => {
  const [tableState, dispatch] = useReducer(tableReducer, initialState);
  const { page, rowsPerPage } = tableState;

  const nextPage = () => {
    if (page < Math.ceil(data.length / rowsPerPage)) {
      dispatch({ type: 'SET_PAGE', payload: page + 1 });
    }
  };

  const prevPage = () => {
    if (page > 1) {
      dispatch({ type: 'SET_PAGE', payload: page - 1 });
    }
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = Number(e.target.value) as typeof ROWS_PER_PAGE[number];
    dispatch({ type: 'SET_ROWS_PER_PAGE', payload: selectedValue });
    onRowsPerPageChange(selectedValue);
  };

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const visibleData = data.slice(startIndex, endIndex);

  const toggleEdit = (row: RowData) => {
    const updatedData = data.map((d) =>
      d.ID === row.ID ? { ...d, isEditing: !d.isEditing } : d
    );
    onPageChange(page);
  };

  const confirmEdit = (row: RowData) => {
    // Handle saving the edited data and updating the state
    const updatedData = data.map((d) =>
      d.ID === row.ID ? { ...d, isEditing: false } : d
    );
    // Handle saving data to the backend or any other necessary actions
    // ...
  };

  const cancelEdit = (row: RowData) => {
    const updatedData = data.map((d) =>
      d.ID === row.ID ? { ...d, isEditing: false } : d
    );
    onPageChange(page);
  };

  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {visibleData.map((row) => (
            <tr key={row.ID}>
              {columns.map((column) => (
                <td key={column.key}>
                  {row.isEditing ? (
                    <input
                      type="text"
                      value={row[column.key] as string}
                      onChange={(_) => {
                        // Handle input changes for editing
                      }}
                    />
                  ) : (
                    <>{row[column.key]}</>
                  )}
                </td>
              ))}
              <td>
                {row.isEditing ? (
                  <>
                    <button onClick={() => confirmEdit(row)}>Confirm</button>
                    <button onClick={() => cancelEdit(row)}>Cancel</button>
                  </>
                ) : (
                  <EditButton onClick={() => toggleEdit(row)}>
                    {row.isEditing ? 'Save' : 'Edit'}
                  </EditButton>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={prevPage} disabled={page === 1}>
          Prev
        </button>
        <button
          onClick={nextPage}
          disabled={page === Math.ceil(data.length / rowsPerPage)}
        >
          Next
        </button>
        <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
          {[10, 15, 20, 30].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <span>
          Page {page} of {Math.ceil(data.length / rowsPerPage)}
        </span>
      </div>
    </TableWrapper>
  );
};

export { Table };