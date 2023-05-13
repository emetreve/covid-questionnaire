function Illustration({ backwards }) {
  return (
    <div className='relative'>
      <img
        src='/assets/high-temperature.png'
        alt='guy with high temperature'
        className='scale-[170%] mr-36 pt-28 relative z-10'
      />
      <div className='absolute animate-circle' />
      {backwards && (
        <img
          src='/assets/star.png'
          alt='star'
          className='absolute animate-star-to-circle'
        />
      )}
    </div>
  );
}

export default Illustration;
