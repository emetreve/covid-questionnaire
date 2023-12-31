import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '@/config';
import { FormTracker, Error } from '@/components';
import { Illustration } from './components';
import useCovidInputs from './useCovidInputs';

function Covid() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const {
    handleSubmit,
    onSubmit,
    register,
    errors,
    had_covid,
    had_antibody_test,
  } = useCovidInputs();

  return (
    <div className='px-44 h-screen uppercase bg-granular-white relative'>
      <FormTracker progress={2} />
      <div className='flex justify-between'>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className='w-[39rem] pt-3'
        >
          <div className='text-[1.4em]'>
            <b>
              <p className='mb-4 font-helvetica-bold'>
                გაქვს გადატანილი Covid-19?*
              </p>
            </b>
            <div className='ml-6 flex flex-col gap-3'>
              <div>
                <label htmlFor='option1-1' className='flex align-items'>
                  <input
                    type='radio'
                    name='had_covid'
                    id='option1-1'
                    value='yes'
                    {...register('had_covid', {
                      required: 'ველი სავალდებულოა',
                      onChange: (e) => {
                        localStorage.setItem('had_covid', e.target.value);
                      },
                    })}
                  />
                  კი
                </label>
              </div>
              <div>
                <label htmlFor='option2-1'>
                  <input
                    type='radio'
                    name='had_covid'
                    id='option2-1'
                    value='no'
                    {...register('had_covid', {
                      onChange: (e) => {
                        localStorage.setItem('had_covid', e.target.value);
                      },
                    })}
                  />
                  არა
                </label>
              </div>
              <div>
                <label htmlFor='option3-1'>
                  <input
                    type='radio'
                    name='had_covid'
                    id='option3-1'
                    value='have_right_now'
                    {...register('had_covid', {
                      onChange: (e) => {
                        localStorage.setItem('had_covid', e.target.value);
                      },
                    })}
                  />
                  ახლა მაქვს
                </label>
              </div>
              <div className='h-4'>
                {errors?.had_covid && (
                  <Error content={errors.had_covid.message} />
                )}
              </div>
            </div>
          </div>
          {had_covid === 'yes' && (
            <div className='text-[1.4em] pt-10'>
              <p className='font-bold mb-4 font-helvetica-bold'>
                ანტისხეულების ტესტი გაქვს გაკეთებული?*
              </p>
              <div className='ml-6 '>
                <div className='flex items-center mb-[1.25rem]'>
                  <label htmlFor='option1-2'>
                    <input
                      type='radio'
                      name='had_antibody_test'
                      id='option1-2'
                      value='კი'
                      {...register('had_antibody_test', {
                        required: 'ველი სავალდებულოა',
                        onChange: (e) => {
                          localStorage.setItem(
                            'had_antibody_test',
                            e.target.value
                          );
                        },
                      })}
                    />
                    კი
                  </label>
                </div>
                <div className='flex items-center mb-[1.25rem]'>
                  <label htmlFor='option2-2'>
                    <input
                      type='radio'
                      name='had_antibody_test'
                      id='option2-2'
                      value='არა'
                      {...register('had_antibody_test', {
                        onChange: (e) => {
                          localStorage.setItem(
                            'had_antibody_test',
                            e.target.value
                          );
                        },
                      })}
                    />
                    არა
                  </label>
                </div>
              </div>
              <div className='h-4'>
                {errors?.had_antibody_test && (
                  <Error content={errors.had_antibody_test.message} />
                )}
              </div>
            </div>
          )}
          {had_antibody_test === 'კი' && had_covid === 'yes' && (
            <div className='text-[1.4em] pt-6'>
              <p className='font-bold mb-4 font-helvetica-bold'>
                თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
                ანტისხეულების რაოდენობა
              </p>
              <input
                type='date'
                {...register('antibodies.test_date', {
                  onChange: (e) => {
                    localStorage.setItem(
                      'antibodies.test_date',
                      e.target.value
                    );
                  },
                })}
                className='border border-zinc-400 ml-6 bg-transparent px-[1.25rem] w-[32rem] text-lg h-14'
                placeholder='რიცხვი'
              />
              <input
                {...register('antibodies.number', {
                  pattern: {
                    value: /^[0-9]+$/i,
                    message: 'გთხოვთ ჩაწერეთ რიცხვი',
                  },
                  onChange: (e) => {
                    localStorage.setItem('antibodies.number', e.target.value);
                  },
                })}
                className='border mt-7 border-zinc-400 ml-6 bg-transparent px-[1.25rem] w-[32rem] text-lg h-14'
                placeholder='ანტისხეულების რაოდენობა'
              />
              {errors?.antibodies?.number && (
                <Error content={errors.antibodies.number.message} />
              )}
            </div>
          )}
          {had_antibody_test === 'არა' && had_covid === 'yes' && (
            <div className='text-[1.4em] pt-6'>
              <p className='font-bold mb-4 font-helvetica-bold'>
                მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა
                Covid-19*
              </p>
              <input
                type='date'
                {...register('covid_sickness_date', {
                  required: 'ველი სავალდებულოა',
                  onChange: (e) => {
                    localStorage.setItem('covid_sickness_date', e.target.value);
                  },
                })}
                className='border mt-7 border-zinc-400 ml-6 bg-transparent px-[1.25rem] w-[32rem] text-lg h-14'
                placeholder='რიცხვი'
              />
              {errors?.covid_sickness_date && (
                <Error content={errors.covid_sickness_date.message} />
              )}
            </div>
          )}
          <div>
            <img
              className='h-6 absolute bottom-24 left-[56rem] z-20'
              src='/assets/previous-button.png'
              alt='go to previous page'
              onClick={() => {
                navigate(`${ROUTES.IDENTIFICATION}`, {
                  state: { back: true },
                });
              }}
            />
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
          <Illustration backwards={state} />
        </div>
      </div>
    </div>
  );
}
export default Covid;
