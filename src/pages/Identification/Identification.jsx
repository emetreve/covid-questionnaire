import { FormTracker } from '@/components';
import { Input } from './components';

function Identification() {
  function handleChange(e) {
    console.log(e.target.value);
    console.log(e.target.id);
  }
  return (
    <div className='px-44 h-screen uppercase bg-granular-white'>
      <FormTracker progress={1} />
      <div className='flex justify-between'>
        <div className='w-[30rem] pt-3'>
          <Input
            name='name'
            placeholder='იოსებ'
            label='სახელი*'
            handleChange={handleChange}
            customClass='mb-12'
          />
          <Input
            name='surname'
            placeholder='ჯუღაშვილი'
            label='გვარი*'
            handleChange={handleChange}
            customClass='mb-12'
          />
          <Input
            name='email'
            placeholder='fbi@redberry.ge'
            label='მეილი*'
            handleChange={handleChange}
          />
          <div className='mt-28'>
            <div className='w-60 mb-4'>
              <hr className='border-1 border-black' />
            </div>
            <p className='text-gray-400'>
              *-ით მონიშნული ველების შევსება <br /> სავალდებულოა
            </p>
          </div>
        </div>
        <div>
          <img
            src='/assets/star-eyed-ones.png'
            alt='two people with starry eyes'
            className='scale-[165%] pr-28 pt-14'
          />
        </div>
      </div>
    </div>
  );
}

export default Identification;
