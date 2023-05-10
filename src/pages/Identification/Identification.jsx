import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FormDataContext } from '@/context';
import { FormTracker } from '@/components';
import { Input } from './components';
import { Illustration } from './components';

function Identification() {
  const { updateFormData } = useContext(FormDataContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //   updateFormData('form1', data);
  //   localStorage.setItem('form1', JSON.stringify(data));
  // };
  const onSubmit = (data) => console.log(data);

  return (
    <div className='px-44 h-screen uppercase bg-granular-white'>
      <FormTracker progress={1} />
      <div className='flex justify-between'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-[30rem] pt-3'>
          <Input
            {...register('name', { required: true })}
            name='name'
            placeholder='იოსებ'
            label='სახელი*'
            customClass='mb-12'
            error={errors.name && <span>Name is required</span>}
          />

          <Input
            name='surname'
            placeholder='ჯუღაშვილი'
            label='გვარი*'
            customClass='mb-12'
          />
          <Input name='email' placeholder='fbi@redberry.ge' label='მეილი*' />

          <button type='submit'>Submit</button>

          <div className='mt-28'>
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
