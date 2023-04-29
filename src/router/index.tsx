import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import BoothSummary from '../pages/BoothSummary';
import BoothInfo from '../pages/BoothInfo';
import Exhibition from '../pages/Exhibition';
import BoothDetail from '../pages/Boothdetail';
import EventPublish from '../pages/EventPublish';
import EventCheck from '../pages/EventCheck';
import EventRuffle from '../pages/EventRuffle';
import EventAuthenticate from '../pages/EventAuthenticate';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="booth">
            <Route path="summary" element={<BoothSummary />} />
            <Route path="info" element={<BoothInfo />} />
            <Route path="detail" element={<BoothDetail />} />
          </Route>
          <Route path="event">
            <Route path="publish/normal" element={<EventPublish />} />
            <Route path="check" element={<EventCheck />} />
            <Route path="ruffle" element={<EventRuffle />} />
            <Route
              path="publish/authenticate"
              element={<EventAuthenticate />}
            />
          </Route>
          <Route path="product" element={<div>상품 관리</div>} />
          <Route path="analysis" element={<div>통계 분석</div>} />
          <Route path="exhibition" element={<Exhibition />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
