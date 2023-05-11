function Illustration() {
  return (
    <div className='relative'>
      <img
        src='/assets/doctor.png'
        alt='guy with high temperature'
        className='scale-[162%] mr-36 pt-36 relative z-10'
      />
      <img
        src='/assets/star.png'
        alt='star'
        className='absolute animate-star opacity-0'
      />
    </div>
  );
}

export default Illustration;
