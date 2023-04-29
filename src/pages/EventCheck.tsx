import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';

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

const RuffleButton = () => {
  const [open, setOpen] = useState(false);

  const [randomPicked, setRandomPicked] = useState<(typeof rows)[number]>();

  return (
    <>
      <Button onClick={() => setOpen(true)}>이벤트 추첨하기</Button>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>이벤트 추첨하기</DialogTitle>
        <DialogContent>
          {randomPicked ? (
            <>
              <div>추첨된 사람: {randomPicked.NAME}</div>
              <div>전화번호: {randomPicked.PHONENUMBER}</div>
            </>
          ) : (
            '추첨할 사람을 선택해주세요.'
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>닫기</Button>
          <Button
            variant="contained"
            onClick={() =>
              setRandomPicked(rows[Math.floor(Math.random() * rows.length)])
            }
          >
            추첨하기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const EventCheck = () => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Box display="flex">
        <RuffleButton />
      </Box>
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
