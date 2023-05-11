import { Link } from 'react-router-dom';
import { ROUTES } from '@/config';
import { FormTracker } from '@/components';
import { Illustration } from './components';
import useVaccinationInputs from './useVaccinationInputs';

function Vaccinaton() {
  const { register, onSubmit, handleSubmit, had_vaccine } =
    useVaccinationInputs();
  return (
    <div className='px-44 h-screen uppercase bg-granular-white relative'>
      <FormTracker progress={3} />
      <div className='flex justify-between'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className='w-[43rem] pt-3'
        >
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
                    {...register('had_vaccine', {
                      required: true,
                      onChange: (e) => {
                        localStorage.setItem('had_vaccine', e.target.value);
                      },
                    })}
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
                    {...register('had_vaccine', {
                      onChange: (e) => {
                        localStorage.setItem('had_vaccine', e.target.value);
                      },
                    })}
                  />
                  არა
                </label>
              </div>
            </div>
          </div>
          {had_vaccine === 'კი' && (
            <div className='text-[1.4em]'>
              <p className='font-bold mb-4'>აირჩიე რა ეტაპზე ხარ*</p>
              <div className='ml-6 flex flex-col gap-3'>
                <div>
                  <label htmlFor='option1' className='flex align-items'>
                    <input
                      type='radio'
                      name='vaccination_stage'
                      id='option1'
                      value='პირველი დოზა და დარეგისტრირებული ვარ მეორეზე'
                      {...register('vaccination_stage', {
                        required: true,
                        onChange: (e) => {
                          localStorage.setItem(
                            'vaccination_stage',
                            e.target.value
                          );
                        },
                      })}
                    />
                    პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
                  </label>
                </div>
                <div>
                  <label htmlFor='option2'>
                    <input
                      type='radio'
                      name='vaccination_stage'
                      id='option2'
                      value='სრულად აცრილი ვარ'
                      {...register('vaccination_stage', {
                        onChange: (e) => {
                          localStorage.setItem(
                            'vaccination_stage',
                            e.target.value
                          );
                        },
                      })}
                    />
                    სრულად აცრილი ვარ
                  </label>
                </div>
                <div>
                  <label htmlFor='option3'>
                    <input
                      type='radio'
                      name='vaccination_stage'
                      id='option3'
                      value='პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე'
                      {...register('vaccination_stage', {
                        onChange: (e) => {
                          localStorage.setItem(
                            'vaccination_stage',
                            e.target.value
                          );
                        },
                      })}
                    />
                    პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
                  </label>
                </div>
              </div>
            </div>
          )}
          <div>
            <Link to={ROUTES.COVID}>
              <img
                className='h-6 absolute bottom-24 left-[56rem] z-20'
                src='/assets/previous-button.png'
                alt='go to previous page'
              />
            </Link>
            <button type='submit'>
              <img
                className='h-6 absolute bottom-24 left-[64rem] z-20'
                src='/assets/next-button.png'
                alt='go to next page'
              />
            </button>
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
