import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/config';
import {
  Landing,
  Identification,
  Covid,
  Vaccination,
  Advice,
  NotFound,
} from '@/pages';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.LANDING} element={<Landing />} />
      <Route path={ROUTES.IDENTIFICATION} element={<Identification />} />
      <Route path={ROUTES.COVID} element={<Covid />} />
      <Route path={ROUTES.VACCINATION} element={<Vaccination />} />
      <Route path={ROUTES.ADVICE} element={<Advice />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
