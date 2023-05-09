import { Link } from 'react-router-dom';
import { ROUTES } from '~/config';

function Landing() {
  return (
    <div className='flex flex-col justify-center items-center h-screen uppercase bg-granular-white'>
      <img
        src='/assets/logo-small.png'
        alt='Redberry logo'
        className='h-28 mb-16'
      />
      <Link to={ROUTES.IDENTIFICATION} className='text-center text-4xl'>
        <p>კითხვარის</p>
        <p>დაწყება</p>
      </Link>
    </div>
  );
}

export default Landing;
