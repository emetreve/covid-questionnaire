import { useNavigate } from 'react-router-dom';
import { ROUTES } from '~/config';

function Landing() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(ROUTES.IDENTIFICATION);
  }
  return (
    <div className='flex flex-col justify-center items-center h-screen uppercase bg-granular-white'>
      <img
        src='/assets/logo-small.png'
        alt='Redberry logo'
        className='h-28 mb-16'
      />
      <span onClick={handleClick} className='text-center text-4xl'>
        <p>კითხვარის</p>
        <p>დაწყება</p>
      </span>
    </div>
  );
}

export default Landing;
