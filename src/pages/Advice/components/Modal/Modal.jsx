import { Heart } from '../';

function Modal() {
  return (
    <div className='fixed h-screen flex items-center justify-center top-0 left-0 w-full opacity-0 z-50 animate-fade-in overflow-hidden'>
      <div>
        <img
          src='/assets/sparkle.png'
          alt='sparkle'
          className='h-14 animate-sparkle-top absolute z-50'
        />
        <h1 className='text-[5rem] font-helvetica-cap tracking-[1rem] text-white thankyou animate-thank-you-fade-in'>
          მადლობა
        </h1>
        <img
          src='/assets/sparkle.png'
          alt='sparkle'
          className='h-8 animate-sparkle-bottom absolute z-50'
        />
      </div>
      <Heart
        svgClass='animate-heart-zoom -z-20 absolute'
        pathClass='animate-heart-color'
      />
    </div>
  );
}

export default Modal;
