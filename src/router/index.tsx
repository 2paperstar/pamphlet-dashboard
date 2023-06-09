import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import BoothSummary from '../pages/BoothSummary';
import BoothInfo from '../pages/BoothInfo';
import Exhibition from '../pages/Exhibition';
import BoothDetail from '../pages/Boothdetail';
import EventPublish from '../pages/EventPublish';
import EventCheck from '../pages/EventCheck';
import EventAuthenticate from '../pages/EventAuthenticate';
import Login from '../pages/Login';
import useAuth from '../hooks/useAuth';
import ProductManagement from '../pages/ProductManagement';
import ProductAnalysis from '../pages/ProductAnalysis';
import ExhibitionList from '../pages/ExhibitionList';
import ExhibitionCreate from '../pages/ExhibitionCreate';
import ExhibitionMapList from '../pages/ExhibitionMapList';
import ExhibitionMapCreate from '../pages/ExhibitionMapCreate';
import ExhibitionTicketCreate from '../pages/ExhibitionTicketCreate';
import SectionBooth from '../pages/SectionBooth';

const Router = () => {
  const isLogined = useAuth((state) => state.logined);
  return (
    <HashRouter>
      <Routes>
        {isLogined ? (
          <>
            <Route path="/" element={<MainLayout />}>
              <Route path="booth">
                <Route path="summary" element={<BoothSummary />} />
                <Route path="info" element={<BoothInfo />} />
                <Route path="detail" element={<BoothDetail />} />
              </Route>
              <Route path="event">
                <Route path="publish/normal" element={<EventPublish />} />
                <Route path="check" element={<EventCheck />} />
                <Route
                  path="publish/authenticate"
                  element={<EventAuthenticate />}
                />
              </Route>
              <Route path="product">
                <Route path="management" element={<ProductManagement />} />
                <Route path="analysis" element={<ProductAnalysis />} />
                <Route path="exhibition" element={<Exhibition />} />
              </Route>
              <Route path="analysis" element={<div>통계 분석</div>} />
              <Route path="exhibition">
                <Route index element={<ExhibitionList />} />
                <Route path="create" element={<ExhibitionCreate />} />
                <Route path=":id">
                  <Route index element={<ExhibitionMapList />} />
                  <Route path="maps">
                    <Route path="create" element={<ExhibitionMapCreate />} />
                    <Route path=":mapId">
                      <Route index element={<Exhibition />} />
                      <Route
                        path="sections/:sectionId/booth"
                        element={<SectionBooth />}
                      />
                    </Route>
                  </Route>
                  <Route
                    path="tickets/create"
                    element={<ExhibitionTicketCreate />}
                  />
                </Route>
              </Route>
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
    </HashRouter>
  );
};

export default Router;
