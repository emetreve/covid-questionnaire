import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/config';
import {
  Landing,
  Identification,
  Covid,
  Vaccination,
  Advice,
  ThankYou,
} from '@/pages';

function RoutesLibrary() {
  return (
    <Routes>
      <Route path={ROUTES.LANDING} element={<Landing />} />
      <Route path={ROUTES.IDENTIFICATION} element={<Identification />} />
      <Route path={ROUTES.COVID} element={<Covid />} />
      <Route path={ROUTES.VACCINATION} element={<Vaccination />} />
      <Route path={ROUTES.ADVICE} element={<Advice />} />
      <Route path={ROUTES.THANK_YOU} element={<ThankYou />} />
    </Routes>
  );
}

export default RoutesLibrary;
