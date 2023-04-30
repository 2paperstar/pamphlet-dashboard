import { DataGrid } from '@mui/x-data-grid';
import { useAllMapInExhibitions } from '../api/exhitbition';
import { useMemo } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ExhibitionMapList = () => {
  const { id } = useParams<{ id: string }>();
  const { data: exhibitions } = useAllMapInExhibitions(Number(id));
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
      <Link to={`/exhibition/${id}/maps/create`}>
        <Button>지도 생성</Button>
      </Link>
      <Link to={`/exhibition/${id}/tickets/create`}>
        <Button>티켓 생성</Button>
      </Link>
      {exhibitions ? (
        <DataGrid
          getRowId={(row) => row.id}
          columns={columns}
          rows={exhibitions}
          autoHeight
          onRowDoubleClick={(row) =>
            navigate(`/exhibition/${id}/maps/${row.id}`)
          }
        />
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default ExhibitionMapList;
