import { Box, Button, TextField } from '@mui/material';
import { createExhibitionMap } from '../api/exhitbition';
import { useNavigate, useParams } from 'react-router';
import { useSnackbar } from 'notistack';
import { uploadImage } from '../api/file';
import { useState } from 'react';

const ExhibitionMapCreate = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [progress, setProgress] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    setProgress(true);
    uploadImage(currentTarget.file.files[0])
      .then((data) => {
        return createExhibitionMap(
          Number(id),
          currentTarget.exhibitionName.value,
          data.id
        );
      })
      .then((data) => {
        enqueueSnackbar('행사장 지도가 생성되었습니다.', {
          variant: 'success',
        });
        navigate(`/exhibition/${id}/maps/${data.id}`);
      })
      .finally(() => setProgress(false));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      flexGrow={1}
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <TextField label="행사장 id" defaultValue={id} required disabled />
      <TextField label="지도 이름" name="exhibitionName" required />
      <Button variant="contained" component="label">
        업로드
        <input
          type="file"
          style={{ display: 'none' }}
          name="file"
          accept="image/*"
          required
        />
      </Button>
      <Box flexGrow={1} />
      <Button variant="contained" type="submit" disabled={progress}>
        생성
      </Button>
    </Box>
  );
};

export default ExhibitionMapCreate;
