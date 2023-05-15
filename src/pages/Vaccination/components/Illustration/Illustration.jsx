function Illustration({ location }) {
  return (
    <div className='relative'>
      <img
        src='/assets/doctor.png'
        alt='covid doctor'
        className='scale-[162%] mr-36 pt-36 relative z-10'
      />

      {location ? (
        <>
          <img
            src='/assets/star.png'
            alt='star'
            className='absolute animate-star-back'
          />
          <img
            src='/assets/heart.png'
            alt='heart'
            className='absolute animate-heart-to-star'
          />
        </>
      ) : (
        <>
          <img
            src='/assets/star.png'
            alt='star'
            className='absolute animate-star'
          />
          <div className='absolute animate-circle-to-star' />
        </>
      )}
    </div>
  );
}

export default Illustration;
