import { FormTracker } from '@/components';
import { Illustration } from './components';
import { Error } from '@/components';
import useIdentificationInputs from './useIdentificationInputs';

function Identification() {
  const { handleSubmit, onSubmit, register, errors } =
    useIdentificationInputs();

  return (
    <div className='px-44 h-screen uppercase bg-granular-white relative'>
      <FormTracker progress={1} />
      <div className='flex justify-between'>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className='w-[30rem] pt-3'
        >
          <div className='flex flex-col'>
            <label htmlFor='first_name' className='text-xl mb-2'>
              სახელი*
            </label>
            <input
              {...register('first_name', {
                required: 'სახელის ველი სავალდებულოა',
                minLength: {
                  value: 2,
                  message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
                },
                onChange: (e) => {
                  localStorage.setItem('first_name', e.target.value);
                },
              })}
              id='first_name'
              placeholder='იოსებ'
              className='text-xl bg-transparent block pt-1 border border-black py-3 px-5 text-s w-full placeholder-black font-light'
            />
            <div className='h-4'>
              {errors?.first_name && (
                <Error content={errors.first_name.message} />
              )}
            </div>
          </div>

          <div className='flex flex-col pt-6'>
            <label htmlFor='last_name' className='text-xl mb-2'>
              გვარი*
            </label>
            <input
              {...register('last_name', {
                required: 'გვარის ველი სავალდებულოა',
                minLength: {
                  value: 2,
                  message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
                },
                onChange: (e) => {
                  localStorage.setItem('last_name', e.target.value);
                },
              })}
              id='last_name'
              placeholder='ჯუღაშვილი'
              className='text-xl bg-transparent block pt-1 border border-black py-3 px-5 text-s w-full placeholder-black font-light'
            />
            <div className='h-4'>
              {errors?.last_name && (
                <Error content={errors.last_name.message} />
              )}
            </div>
          </div>

          <div className='flex flex-col pt-6'>
            <label htmlFor='email' className='text-xl mb-2'>
              მეილი*
            </label>
            <input
              {...register('email', {
                required: 'იმეილის ველი სავალდებულოა',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@redberry\.ge$/i,
                  message: 'მეილი უნდა მთავრდებოდეს @redberry.ge სუფიქსით',
                },
                onChange: (e) => {
                  localStorage.setItem('email', e.target.value);
                },
              })}
              id='email'
              placeholder='fbi@redberry.ge'
              className='text-xl bg-transparent block pt-1 border border-black py-3 px-5 text-s w-full placeholder-black font-light'
            />
            <div className='h-4'>
              {errors?.email && <Error content={errors.email.message} />}
            </div>
          </div>

          <button type='submit'>
            <img
              className='h-6 absolute bottom-24 left-[60rem]'
              src='/assets/next-button.png'
              alt='go to next page'
            />
          </button>

          <div className='pt-28'>
            <div className='w-60 mb-4'>
              <hr className='border-1 border-black' />
            </div>
            <p className='text-gray-400'>
              *-ით მონიშნული ველების შევსება <br /> სავალდებულოა
            </p>
          </div>
        </form>
        <div>
          <Illustration />
        </div>
      </div>
    </div>
  );
}

export default Identification;
