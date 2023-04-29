import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
