import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '~/config';
import { Landing } from '~/pages/Landing';
import { Identification } from '~/pages/Identification';

function RoutesLibrary() {
  return (
    <Routes>
      <Route path={ROUTES.LANDING} element={<Landing />} />
      <Route path={ROUTES.IDENTIFICATION} element={<Identification />} />
    </Routes>
  );
}

export default RoutesLibrary;
