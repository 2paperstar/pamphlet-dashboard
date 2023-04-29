//import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
//import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const EventPublish = () => {
  // const [startDate, setStartDate] = useState<Date>(new Date());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      boothName: e.currentTarget.boothName.value,
      boothSummary: e.currentTarget.boothSummary.value,
    });
  };
  return (
    <Box
      flex={1}
      component="form"
      display="flex"
      onSubmit={handleSubmit}
      flexDirection="column"
      gap={2}
    >
      <h1>이벤트 유형 선택: 일반형</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Link to="/event/publish/normal" style={{ marginRight: 8 }}>
          일반형
        </Link>
        <Link to="/event/publish/authenticate"> 인증형</Link>
      </div>

      <TextField
        label="이벤트 이름"
        fullWidth
        placeholder="메리 트랙 4호"
        name="boothName"
      />
      <TextField
        label="이벤트 제목"
        fullWidth
        placeholder="본 부스는 커피와 즐거운 디저트에 대해서 판매를 하고 있습니다."
        multiline
        name="boothSummary"
      />
      <TextField
        label="이벤트 한 줄 소개"
        fullWidth
        placeholder="oooo"
        multiline
        name="boothSummary"
      />
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <div>이벤트 발행 시간 설정</div>
        <div style={{ marginLeft: 8 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </div>
      </div>
      <TextField
        label="이벤트 소개"
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

export default EventPublish;
