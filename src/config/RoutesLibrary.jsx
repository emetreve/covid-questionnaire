import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '~/config';
import { Landing } from '~/pages/Landing';

function RoutesLibrary() {
  return (
    <Routes>
      <Route path={ROUTES.LANDING} element={<Landing />} />
    </Routes>
  );
}

export default RoutesLibrary;
