import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FormDataContext } from '@/context';
import { FormTracker } from '@/components';
import { Illustration } from './components';
import { Error } from '@/components';

function Identification() {
  const { updateFormData } = useContext(FormDataContext);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (input, value) => {
    updateFormData(input, value);
    localStorage.setItem(value, JSON.stringify(value));
  };

  return (
    <div className='px-44 h-screen uppercase bg-granular-white relative'>
      <FormTracker progress={1} />

      <div className='flex justify-between'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-[30rem] pt-3'>
          <div className='flex flex-col'>
            <label htmlFor='name' className='text-xl mb-2'>
              იოსებ
            </label>
            <input
              {...register('name', {
                required: 'სახელის ველი სავალდებულოა',
                minLength: {
                  value: 2,
                  message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
                },
              })}
              id='name'
              placeholder='იოსებ'
              className='text-xl bg-transparent block pt-1 border border-black py-3 px-5 text-s w-full placeholder-black font-light'
            />
            {errors?.name && <Error content={errors.name.message} />}
          </div>

          <button type='submit'>
            <img
              className='h-6 absolute bottom-24 left-[60rem]'
              src='/assets/next-button-active.png'
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
