import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'NAME',
    headerName: 'NAME',
    width: 150,
    editable: true,
  },
  {
    field: 'PHONENUMBER',
    headerName: 'PHONENUMBER',
    width: 150,
    editable: true,
  },
  {
    field: 'CREATE',
    headerName: 'CREATE',
    type: 'number',
    width: 120,
    editable: true,
  },
  {
    field: 'ACTION',
    headerName: 'ACTION',
    type: 'number',
    width: 110,
    editable: true,
  },
  // {
  //   field: 'AVTION',
  //   headerName: 'ACTION',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, NAME: 'Snow', PHONENUMBER: 'Jon', CREATE: 35 },
  { id: 2, NAME: 'Lannister', PHONENUMBER: 'Cersei', CREATE: 42 },
  { id: 3, NAME: 'Lannister', PHONENUMBER: 'Jaime', CREATE: 45 },
  { id: 4, NAME: 'Stark', PHONENUMBER: 'Arya', CREATE: 16 },
  { id: 5, NAME: 'Targaryen', PHONENUMBER: 'Daenerys', CREATE: null },
  { id: 6, NAME: 'Melisandre', PHONENUMBER: null, CREATE: 150 },
  { id: 7, NAME: 'Clifford', PHONENUMBER: 'Ferrara', CREATE: 44 },
  { id: 8, NAME: 'Frances', PHONENUMBER: 'Rossini', CREATE: 36 },
  { id: 9, NAME: 'Roxie', PHONENUMBER: 'Harvey', CREATE: 65 },
];

const EventCheck = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      boothName: e.currentTarget.boothName.value,
      boothSummary: e.currentTarget.boothSummary.value,
    });
  };
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default EventCheck;
