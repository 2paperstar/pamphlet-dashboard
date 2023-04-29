import { Box, Button, Paper, TextField } from '@mui/material';
import { useSnackbar } from 'notistack';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      e.currentTarget.userId.value === 'admin' &&
      e.currentTarget.password.value === 'Wingforever'
    ) {
      enqueueSnackbar('로그인 성공', { variant: 'success' });
      login();
    } else {
      enqueueSnackbar('로그인 실패', { variant: 'error' });
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Paper>
        <Box
          p={2}
          component="form"
          display="flex"
          flexDirection="column"
          gap={2}
          onSubmit={handleSubmit}
        >
          <TextField label="아이디" name="userId" />
          <TextField label="패스워드" name="password" type="password" />
          <Button type="submit" variant="contained">
            로그인
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
