import { Box, Button, TextField } from '@mui/material';
import { createExhibitionTicket } from '../api/exhitbition';
import { useParams } from 'react-router';
import { useSnackbar } from 'notistack';

const ExhibitionTicketCreate = () => {
  const { id } = useParams<{ id: string }>();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createExhibitionTicket({
      name: e.currentTarget.ticketName.value,
      description: e.currentTarget.description.value,
      exhibitionId: Number(id),
      price: Number(e.currentTarget.price.value),
      role_name: e.currentTarget.roleName.value,
    }).then((data) => {
      enqueueSnackbar(`티켓이 생성되었습니다. uuid: ${data.uuid}`, {
        variant: 'success',
      });
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
      <TextField label="티켓 이름" name="ticketName" required />
      <TextField label="역할 이름" name="roleName" required />
      <TextField label="가격" name="price" required type="number" />
      <TextField label="설명" name="description" required />
      <Box flexGrow={1} />
      <Button variant="contained" type="submit">
        생성
      </Button>
    </Box>
  );
};

export default ExhibitionTicketCreate;
