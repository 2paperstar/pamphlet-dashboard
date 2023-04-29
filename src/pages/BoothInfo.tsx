import { Box, Button, TextField } from '@mui/material';

const BoothInfo = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      boothName: e.currentTarget.boothName.value,
      boothSummary: e.currentTarget.boothSummary.value,
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
        label="요약 설명"
        fullWidth
        placeholder="본 부스는 커피와 즐거운 디저트에 대해서 판매를 하고 있습니다."
        multiline
        minRows={10}
        maxRows={10}
        name="boothSummary"
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

export default BoothInfo;
