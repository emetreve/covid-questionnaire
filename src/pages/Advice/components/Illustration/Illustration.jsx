function Illustration({ backwards }) {
  return (
    <div className='relative'>
      <img
        src='/assets/bike.png'
        alt='cycling to work'
        className=' mr-36 pt-16 pl-48 relative z-10'
      />
      <img
        src='/assets/heart.png'
        alt='heart'
        className='absolute animate-heart'
      />
      {backwards ? (
        ''
      ) : (
        <img
          src='/assets/star.png'
          alt='star'
          className='absolute animate-star-to-heart'
        />
      )}
    </div>
  );
}

export default Illustration;
