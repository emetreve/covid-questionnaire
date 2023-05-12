function Illustration({ backwards }) {
  return (
    <div className='relative'>
      <img
        src='/assets/star-eyed-ones.png'
        alt='two people with starry eyes'
        className='scale-[165%] mr-28 pt-14 relative z-10'
      />
      <div className='absolute animate-rect bg-yellow-eyes' />
      {backwards && <div className='absolute animate-circle-reverse' />}
    </div>
  );
}

export default Illustration;
