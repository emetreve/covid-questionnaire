import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/config';
import { Landing, Identification, Covid } from '@/pages';

function RoutesLibrary() {
  return (
    <Routes>
      <Route path={ROUTES.LANDING} element={<Landing />} />
      <Route path={ROUTES.IDENTIFICATION} element={<Identification />} />
      <Route path={ROUTES.COVID} element={<Covid />} />
    </Routes>
  );
}

export default RoutesLibrary;
