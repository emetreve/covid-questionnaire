function ThankYou() {
  return (
    <div className='relative h-screen flex items-center justify-center top-0 left-0 w-full bg-gray opacity-0 z-50 animate-fade-in overflow-hidden'>
      {/* <div className='h-screen bg-gray flex items-center justify-center'> */}
      <div>
        <img src='/assets/sparkle.png' alt='sparkle' />
        <h1 className='font-bold text-white thankyou'>მადლობა</h1>
        <img src='/assets/sparkle.png' alt='sparkle' />
      </div>
      <img
        src='/assets/heart.png'
        alt='heard'
        className='animate-heart-zoom absolute z-50 h-[5.25rem]'
      />

      {/* </div> */}
    </div>
  );
}

export default ThankYou;
