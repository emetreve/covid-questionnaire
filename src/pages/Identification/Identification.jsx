import { FormTracker } from '@/components';
import { Input } from './components';

function Identification() {
  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <div className='px-44 h-screen uppercase bg-granular-white'>
      <FormTracker progress={1} />
      <div className='flex justify-between'>
        <div>
          <Input
            name='name'
            placeholder='იოსებ'
            label='სახელი*'
            handleChange={handleChange}
          />
        </div>
        <div>
          <img
            src='/assets/star-eyed-ones.png'
            alt='two people with starry eyes'
            className='scale-150 pr-28 pt-12'
          />
        </div>
      </div>
    </div>
  );
}

export default Identification;
