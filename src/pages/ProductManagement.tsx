import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import Spreadsheet from 'react-spreadsheet';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const ProductManagement = () => {
  const [data, setData] = useState([
    [
      { value: '상품 이름' },
      { value: '상품 한 줄 소개' },
      { value: '상품 가격' },
      { value: '상품 상세 소개' },
      { value: '판매 상태' },
      { value: '이미지' },
    ],
    [
      { value: 'Strawberry' },
      { value: 'Cookies' },
      { value: 'Strawberry' },
      { value: 'Cookies' },
      { value: 'Strawberry' },
      { value: 'Cookies' },
    ],
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      boothName: e.currentTarget.boothName.value,
      boothSummary: e.currentTarget.boothSummary.value,
      file: e.currentTarget.file.files[0],
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Spreadsheet data={data} />
      </div>

      <Button variant="contained" component="label">
        엑셀 업로드
        <input
          type="file"
          style={{ display: 'none' }}
          name="file"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          onChange={(e) => console.log(e.target.files?.[0])}
        />
      </Button>
      <br />
      <div>아이템 개별 업로드</div>
      <TextField
        label="상품 이름"
        fullWidth
        placeholder="메리 트랙 4호"
        name="boothName"
      />
      <TextField
        label="상품 한 줄 소개"
        fullWidth
        placeholder="메리 트랙 4호"
        name="boothName"
      />
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            상품 판매 상태
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="sale expected"
            name="radio-buttons-group"
          >
            <div>
              <FormControlLabel
                value="sale expected"
                control={<Radio />}
                label="판매 예정"
              />
              <FormControlLabel
                value="saling"
                control={<Radio />}
                label="판매 중"
              />
              <FormControlLabel
                value="sale in spot"
                control={<Radio />}
                label="현장 판매"
              />
            </div>
          </RadioGroup>
        </FormControl>
      </div>
      <div>상품 대표 이미지</div>
      <Button variant="contained" component="label">
        업로드
        <input
          type="file"
          style={{ display: 'none' }}
          name="file"
          accept="image/*"
          onChange={(e) => console.log(e.target.files?.[0])}
        />
      </Button>
      <TextField
        label="상품 상세 소개"
        fullWidth
        placeholder="메리 트랙 4호"
        name="boothName"
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

export default ProductManagement;
