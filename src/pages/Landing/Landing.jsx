import { Link } from 'react-router-dom';
import { ROUTES } from '~/config';

function Landing() {
  return (
    <div className='bg-granular-white flex flex-col justify-center items-center h-screen uppercase'>
      <img
        src='/assets/logo.svg'
        alt='Redberry rocket'
        className='mb-25 animate-dissolve-logo h-28 mb-16'
      />
      <div className='text-center h-20 relative w-60 overflow-y-hidden'>
        <Link
          to={ROUTES.IDENTIFICATION}
          className='animate-text-drop text-3xl opacity-0 font-bold relative'
        >
          კითხვარის დაწყება
        </Link>
      </div>
    </div>
  );
}

export default Landing;
