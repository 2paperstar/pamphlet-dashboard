import { DataGrid } from '@mui/x-data-grid';
import { useAllExhibitions } from '../api/exhitbition';
import { useMemo } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const ExhibitionList = () => {
  const { data: exhibitions } = useAllExhibitions();
  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      { field: 'id', width: 70 },
      { field: 'name', width: 130 },
    ],
    []
  );

  return (
    <div>
      <Link to="/exhibition/create">
        <Button>행사장 생성</Button>
      </Link>
      {exhibitions ? (
        <DataGrid
          columns={columns}
          rows={exhibitions}
          autoHeight
          getRowId={(row) => row.id}
          onRowDoubleClick={(row) => navigate(`/exhibition/${row.id}`)}
        />
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default ExhibitionList;
