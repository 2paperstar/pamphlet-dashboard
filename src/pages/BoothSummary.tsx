import { Box, Button, TextField } from '@mui/material';

const BoothSummary = () => {
  return (
    <Box p={1} flex={1} display="flex" flexDirection="column" gap={2}>
      <TextField label="부스 이름" fullWidth placeholder="메리 트랙 4호" />
      <TextField
        label="단체 의도"
        fullWidth
        placeholder="즐거운 마음으로 커피를 내려 파는 곳"
      />
      <TextField label="대표 이름" fullWidth placeholder="0000" />
      <Box flex={1} />
      <Box display="flex">
        <Button>저장</Button>
      </Box>
    </Box>
  );
};

export default BoothSummary;
