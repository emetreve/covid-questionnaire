import { Link } from 'react-router-dom';
import { ROUTES } from '@/config';
import { LogoRound } from '@/components';

function Landing() {
  return (
    <div className='bg-granular-white flex flex-col justify-center items-center h-screen uppercase overflow-hidden'>
      <LogoRound classes='mb-[5rem] animate-dissolve-logo h-28' />
      <div className='text-center h-25 relative w-60 overflow-y-hidden'>
        <Link
          to={ROUTES.IDENTIFICATION}
          className='font-helvetica-cap animate-text-drop text-4xl opacity-0 relative custom-shadow'
        >
          კითხვარის დაწყება
        </Link>
      </div>
    </div>
  );
}

export default Landing;
