import { FormTracker } from '@/components';
import { Illustration } from './components';

function Vaccinaton() {
  return (
    <div className='px-44 h-screen uppercase bg-granular-white relative'>
      <FormTracker progress={3} />
      <div className='flex justify-between'>
        <form noValidate className='w-[39rem] pt-3'>
          <div className='text-[1.4em] pt-10'>
            <p className='font-bold mb-4'>უკვე აცრილი ხარ?* </p>
            <div className='ml-6 '>
              <div className='flex items-center mb-[1.25rem]'>
                <label htmlFor='option1'>
                  <input
                    type='radio'
                    name='had_vaccine'
                    id='option1'
                    value='კი'
                    // {...register('had_antibody_test', {
                    //   required: true,
                    //   onChange: (e) => {
                    //     localStorage.setItem(
                    //       'had_antibody_test',
                    //       e.target.value
                    //     );
                    //   },
                    // })}
                  />
                  კი
                </label>
              </div>
              <div className='flex items-center mb-[1.25rem]'>
                <label htmlFor='option2'>
                  <input
                    type='radio'
                    name='had_vaccine'
                    id='option2'
                    value='არა'
                    // {...register('had_antibody_test', {
                    //   onChange: (e) => {
                    //     localStorage.setItem(
                    //       'had_antibody_test',
                    //       e.target.value
                    //     );
                    //   },
                    // })}
                  />
                  არა
                </label>
              </div>
            </div>
          </div>
        </form>
        <div>
          <Illustration />
        </div>
      </div>
    </div>
  );
}
export default Vaccinaton;
