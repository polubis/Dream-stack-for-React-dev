import type { Story, Meta } from '@storybook/react';

import { Table } from './table';
import { RowData, TableColumn } from './defs';

export default {
  component: Table,
  title: 'Table',
} as Meta;

const Template: Story = () => {
    const columns: TableColumn<RowData>[] = [
        { label: 'ID', key: 'ID' },
        { label: 'Index', key: 'Index' },
        { label: 'First Name', key: 'firstName' },
        { label: 'Last Name', key: 'lastName' },
        { label: 'Nick Name', key: 'nickName' },
        { label: 'Status', key: 'status' },
        { label: 'Email', key: 'email' },
      ];
  
      const data: RowData[] = Array.from({ length: 100 }, (_, index) => ({
        ID: index + 1,
        Index: index + 1,
        firstName: `First${index + 1}`,
        lastName: `Last${index + 1}`,
        nickName: `Nick${index + 1}`,
        status: index % 2 === 0 ? 'true' : 'false',
        email: `email${index + 1}@example.com`,
        // isEditing i originalData są opcjonalne, więc nie są wymagane
      }));
  
    return (
      <Table
        columns={columns}
        data={data}
        pageSize={10}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
      />
    );
  };
  
  export const Default = Template.bind({});
  Default.args = {};

