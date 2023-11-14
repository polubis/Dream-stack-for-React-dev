import { ROWS_PER_PAGE, STATUS_LABELS } from './consts';

type RowsNumber = (typeof ROWS_PER_PAGE)[number];
type StatusLabel = keyof typeof STATUS_LABELS;

type RowData = {
  ID: number;
  Index: number;
  firstName: string;
  lastName: string;
  nickName: string;
  status: StatusLabel;
  email: string;
  isEditing?: boolean; // Dodajemy opcjonalne pole isEditing
  originalData?: Omit<RowData, 'isEditing' | 'originalData'>; // Dodajemy opcjonalne pole originalData
};

type TableColumn<T> = {
  label: string;
  key: keyof T;
};

type TableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
  pageSize: RowsNumber;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (value: RowsNumber) => void; // Dodajemy obsługę zmiany ilości wierszy na stronie
};

export type { TableProps, TableColumn, RowData };