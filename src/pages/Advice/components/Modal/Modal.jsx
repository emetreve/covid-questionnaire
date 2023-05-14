function Modal() {
  return (
    <div className='fixed h-screen flex items-center justify-center top-0 left-0 w-full bg-gray opacity-0 z-50 animate-fade-in overflow-hidden'>
      <div>
        <img
          src='/assets/sparkle.png'
          alt='sparkle'
          className='h-14 animate-sparkle-top absolute z-50'
        />
        <h1 className='font-bold text-white thankyou animate-thank-you-fade-in'>
          მადლობა
        </h1>
        <img
          src='/assets/sparkle.png'
          alt='sparkle'
          className='h-8 animate-sparkle-bottom absolute z-50'
        />
      </div>
      <img
        src='/assets/heart.png'
        alt='heard'
        className='animate-heart-zoom absolute z-50 h-[5rem] w-[10rem]'
      />
    </div>
  );
}

export default Modal;
