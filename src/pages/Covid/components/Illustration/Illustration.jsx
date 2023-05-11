function Illustration() {
  return (
    <div className='relative'>
      <img
        src='/assets/high-temperature.png'
        alt='guy with high temperature'
        className='scale-[175%] mr-36 pt-28 relative z-10'
      />
      <div className='absolute animate-circle' />
    </div>
  );
}

export default Illustration;
