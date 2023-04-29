import { Box, Button, TextField } from '@mui/material';

const BoothSummary = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      boothName: e.currentTarget.boothName.value,
      boothIntention: e.currentTarget.boothIntention.value,
      boothRepresentativeName: e.currentTarget.boothRepresentativeName.value,
    });
  };
  return (
    <Box
      p={1}
      flex={1}
      component="form"
      display="flex"
      onSubmit={handleSubmit}
      flexDirection="column"
      gap={2}
    >
      <TextField
        label="부스 이름"
        fullWidth
        placeholder="메리 트랙 4호"
        name="boothName"
      />
      <TextField
        label="단체 의도"
        fullWidth
        placeholder="즐거운 마음으로 커피를 내려 파는 곳"
        name="boothIntention"
      />
      <TextField
        label="대표 이름"
        fullWidth
        placeholder="0000"
        name="boothRepresentativeName"
      />
      <Box flex={1} />
      <Box display="flex" justifyContent="flex-end">
        <Button type="submit" variant="contained">
          저장
        </Button>
      </Box>
    </Box>
  );
};

export default BoothSummary;
