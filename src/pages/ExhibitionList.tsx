import { DataGrid } from '@mui/x-data-grid';
import { useAllExhibitions } from '../api/exhitbition';
import { useMemo } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

const ExhibitionList = () => {
  const { data: exhibitions } = useAllExhibitions();

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
        <DataGrid columns={columns} rows={exhibitions} autoHeight />
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default ExhibitionList;
