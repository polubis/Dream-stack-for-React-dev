import { useState } from 'react';
import { TableProps, RowData } from './defs';
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

const Table = ({
  data,
  pageSize,
  columns,
  onPageChange,
  onRowsPerPageChange, // Dodajemy propa do obsługi zmiany ilości wierszy na stronie
}: TableProps<RowData>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRowsPerPage, setSelectedRowsPerPage] = useState(pageSize);

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = Number(e.target.value) as 10 | 15 | 20 | 30;
    setSelectedRowsPerPage(selectedValue);
    onRowsPerPageChange(selectedValue);
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / selectedRowsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * selectedRowsPerPage;
  const endIndex = startIndex + selectedRowsPerPage;
  const visibleData = data.slice(startIndex, endIndex);

  const toggleEdit = (row: RowData) => {
    const updatedData = data.map((d) =>
      d.ID === row.ID ? { ...d, isEditing: !d.isEditing } : d
    );
    onPageChange(currentPage);
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
    onPageChange(currentPage);
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
          <button onClick={prevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(data.length / selectedRowsPerPage)}
          >
            Next
          </button>
          <select value={selectedRowsPerPage} onChange={handleRowsPerPageChange}>
            {[10, 15, 20, 30].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <span>
            Page {currentPage} of {Math.ceil(data.length / selectedRowsPerPage)}
          </span>
        </div>
      </TableWrapper>
    );
};

export { Table };