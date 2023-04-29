import { Box, Button, TextField } from '@mui/material';
import { createExhibition } from '../api/exhitbition';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';

const ExhibitionCreate = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createExhibition(e.currentTarget.exhibitionName.value).then((data) => {
      enqueueSnackbar('행사장이 생성되었습니다.', { variant: 'success' });
      navigate(`/exhibition/${data.id}`);
    });
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
      <TextField label="행사장 이름" name="exhibitionName" required />
      <Box flexGrow={1} />
      <Button variant="contained" type="submit">
        생성
      </Button>
    </Box>
  );
};

export default ExhibitionCreate;
