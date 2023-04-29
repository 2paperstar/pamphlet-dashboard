import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="map">
            <Route path="summary" element={<div>부스 요약 소개</div>} />
            <Route path="booth" element={<div>부스 정보 정리</div>} />
            <Route path="detail" element={<div>부스 상세 설명</div>} />
          </Route>
          <Route path="event" element={<div>이벤트 관리</div>} />
          <Route path="product" element={<div>상품 관리</div>} />
          <Route path="analysis" element={<div>통계 분석</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
