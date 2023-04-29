import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import BoothSummary from '../pages/BoothSummary';
import BoothInfo from '../pages/BoothInfo';
import Exhibition from '../pages/Exhibition';
import Login from '../pages/Login';
import useAuth from '../hooks/useAuth';

const Router = () => {
  const isLogined = useAuth((state) => state.logined);
  return (
    <BrowserRouter>
      <Routes>
        {isLogined ? (
          <>
            <Route path="/" element={<MainLayout />}>
              <Route path="booth">
                <Route path="summary" element={<BoothSummary />} />
                <Route path="info" element={<BoothInfo />} />
                <Route path="detail" element={<div>부스 상세 설명</div>} />
              </Route>
              <Route path="event" element={<div>이벤트 관리</div>} />
              <Route path="product" element={<div>상품 관리</div>} />
              <Route path="analysis" element={<div>통계 분석</div>} />
              <Route path="exhibition" element={<Exhibition />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
