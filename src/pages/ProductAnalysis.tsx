//import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'productName',
    headerName: '상품 이름',
    width: 180,
    editable: true,
  },
  {
    field: 'Assignment',
    headerName: '등록일',
    width: 180,
    editable: true,
  },
  {
    field: 'Price',
    headerName: '가격',
    // type: 'number',
    width: 180,
    editable: true,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
  {
    field: 'State',
    headerName: '판매 상태',
    width: 180,
    editable: true,
  },
  {
    field: 'Recommend',
    headerName: '추천 제품',
    width: 180,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    productName: 'Snow',
    Assignment: 'Jon',
    Price: '$35',
    State: '판매 예정',
    Recommend: 'view Detail',
  },
  {
    id: 2,
    productName: 'Lannister',
    Assignment: 'Cersei',
    Price: '$42',
    State: '판매 예정',
    Recommend: 'view Detail',
  },
  {
    id: 3,
    productName: 'Lannister',
    Assignment: 'Jaime',
    Price: '$45',
    State: 'pending',
    Recommend: 'view Detail',
  },
  {
    id: 4,
    productName: 'Stark',
    Assignment: 'Arya',
    Price: '$16',
    State: 'pending',
    Recommend: 'view Detail',
  },
  {
    id: 5,
    productName: 'Targaryen',
    Assignment: 'Daenerys',
    Price: null,
    State: 'pending',
    Recommend: 'view Detail',
  },
  {
    id: 6,
    productName: 'Melisandre',
    Assignment: null,
    Price: '$150',
    State: 'pending',
    Recommend: 'view Detail',
  },
  {
    id: 7,
    productName: 'Clifford',
    Assignment: 'Ferrara',
    Price: '$44',
    State: '판매 예정',
    Recommend: 'view Detail',
  },
  {
    id: 8,
    productName: 'Frances',
    Assignment: 'Rossini',
    Price: '$36',
    State: 'pending',
    Recommend: 'view Detail',
  },
  {
    id: 9,
    productName: 'Roxie',
    Assignment: 'Harvey',
    Price: '$65',
    State: 'pending',
    Recommend: 'view Detail',
  },
];

const ProductAnalysis = () => {
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

export default ProductAnalysis;
