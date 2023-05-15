import { useNavigate } from 'react-router-dom';
import { FormTracker } from '@/components';
import { ROUTES } from '@/config';
import useAdviceInputs from './useAdviceInputs';
import { Illustration } from './components';
import { Modal } from './components';

function Advice() {
  const { handleSubmit, register, onSubmit, showModal } = useAdviceInputs();

  const navigate = useNavigate();

  return (
    <div className='px-44 h-screen uppercase bg-granular-white'>
      <FormTracker progress={4} />
      <div className='flex justify-between'>
        <div className='overflow-y-scroll h-[55rem] scrollbar-hide pb-32'>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className='w-[50rem] pt-3 '
          >
            <div className='w-[39.5rem] leading-7 text-[1.4em] tracking-wide'>
              <p>
                რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია.
                გარემო, რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და
                ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი,
                ბევრისთვის კი — ჩვენთან გადმოსვლის.
              </p>
              <p className='pt-4'>
                პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
                ყოველდღიური კომუნიკაციაც გაიშვიათდა.
              </p>
            </div>
            <div className='text-[1.4em] pt-12 mb-10'>
              <p className='font-bold mb-4'>
                რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ
                შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*
              </p>
              <div className='ml-6 '>
                <div className='flex items-center mb-[1.25rem]'>
                  <label htmlFor='option1-1'>
                    <input
                      type='radio'
                      name='non_formal_meetings'
                      id='option1-1'
                      value='twice_a_week'
                      {...register('non_formal_meetings', {
                        required: true,
                        onChange: (e) => {
                          localStorage.setItem(
                            'non_formal_meetings',
                            e.target.value
                          );
                        },
                      })}
                    />
                    კვირაში ორჯერ
                  </label>
                </div>
                <div className='flex items-center mb-[1.25rem]'>
                  <label htmlFor='option2-1'>
                    <input
                      type='radio'
                      name='non_formal_meetings'
                      id='option2-1'
                      value='once_a_week'
                      {...register('non_formal_meetings', {
                        onChange: (e) => {
                          localStorage.setItem(
                            'non_formal_meetings',
                            e.target.value
                          );
                        },
                      })}
                    />
                    კვირაში ერთხელ
                  </label>
                </div>
                <div className='flex items-center mb-[1.25rem]'>
                  <label htmlFor='option3-1'>
                    <input
                      type='radio'
                      name='non_formal_meetings'
                      id='option3-1'
                      value='once_in_a_two_weeks'
                      {...register('non_formal_meetings', {
                        onChange: (e) => {
                          localStorage.setItem(
                            'non_formal_meetings',
                            e.target.value
                          );
                        },
                      })}
                    />
                    ორ კვირაში ერთხელ
                  </label>
                </div>
                <div className='flex items-center mb-[1.25rem]'>
                  <label htmlFor='option4-1'>
                    <input
                      type='radio'
                      name='non_formal_meetings'
                      id='option4-1'
                      value='once_in_a_month'
                      {...register('non_formal_meetings', {
                        onChange: (e) => {
                          localStorage.setItem(
                            'non_formal_meetings',
                            e.target.value
                          );
                        },
                      })}
                    />
                    თვეში ერთხელ
                  </label>
                </div>
              </div>
            </div>
            <div className='text-[1.4em] pt-10 mb-10'>
              <p className='font-bold mb-4'>
                კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
              </p>
              <div className='ml-6'>
                <div className='flex items-center mb-[1.25rem]'>
                  <label htmlFor='option1-2'>
                    <input
                      type='radio'
                      name='number_of_days_from_office'
                      id='option1-2'
                      value='0'
                      {...register('number_of_days_from_office', {
                        required: true,
                        onChange: (e) => {
                          localStorage.setItem(
                            'number_of_days_from_office',
                            e.target.value
                          );
                        },
                      })}
                    />
                    0
                  </label>
                </div>
                <div className='flex items-center mb-[1.25rem]'>
                  <label htmlFor='option2-2'>
                    <input
                      type='radio'
                      name='number_of_days_from_office'
                      id='option2-2'
                      value='1'
                      {...register('number_of_days_from_office', {
                        onChange: (e) => {
                          localStorage.setItem(
                            'number_of_days_from_office',
                            e.target.value
                          );
                        },
                      })}
                    />
                    1
                  </label>
                </div>
                <div className='flex items-center mb-[1.25rem]'>
                  <label htmlFor='option3-2'>
                    <input
                      type='radio'
                      name='number_of_days_from_office'
                      id='option3-2'
                      value='2'
                      {...register('number_of_days_from_office', {
                        onChange: (e) => {
                          localStorage.setItem(
                            'number_of_days_from_office',
                            e.target.value
                          );
                        },
                      })}
                    />
                    2
                  </label>
                </div>
                <div className='flex items-center mb-[1.25rem]'>
                  <label htmlFor='option4-2'>
                    <input
                      type='radio'
                      name='number_of_days_from_office'
                      id='option4-2'
                      value='3'
                      {...register('number_of_days_from_office', {
                        onChange: (e) => {
                          localStorage.setItem(
                            'number_of_days_from_office',
                            e.target.value
                          );
                        },
                      })}
                    />
                    3
                  </label>
                </div>
                <div className='flex items-center mb-[1.25rem]'>
                  <label htmlFor='option5-2'>
                    <input
                      type='radio'
                      name='number_of_days_from_office'
                      id='option5-2'
                      value='4'
                      {...register('number_of_days_from_office', {
                        onChange: (e) => {
                          localStorage.setItem(
                            'number_of_days_from_office',
                            e.target.value
                          );
                        },
                      })}
                    />
                    4
                  </label>
                </div>
                <div className='flex items-center mb-[1.25rem]'>
                  <label htmlFor='option6-2'>
                    <input
                      type='radio'
                      name='number_of_days_from_office'
                      id='option6-2'
                      value='5'
                      {...register('number_of_days_from_office', {
                        onChange: (e) => {
                          localStorage.setItem(
                            'number_of_days_from_office',
                            e.target.value
                          );
                        },
                      })}
                    />
                    5
                  </label>
                </div>
              </div>
            </div>
            <div className='text-[1.4em] pt-8 mb-10'>
              <p className='font-bold mb-4'>რას ფიქრობ ფიზიკურ შეკრებებზე?*</p>
              <textarea
                {...register('what_about_meetings_in_live', {
                  onChange: (e) => {
                    localStorage.setItem(
                      'what_about_meetings_in_live',
                      e.target.value
                    );
                  },
                })}
                className='block w-[41.5rem] h-52 p-5 border bg-transparent border-black resize-none focus:outline-none '
              ></textarea>
            </div>
            <div className='text-[1.4em] pt-5 mb-10'>
              <div className='font-bold mb-5'>
                <p>რას ფიქრობ არსებულ გარემოზე:</p>
                <p>რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?*</p>
              </div>
              <textarea
                {...register('tell_us_your_opinion_about_us', {
                  onChange: (e) => {
                    localStorage.setItem(
                      'tell_us_your_opinion_about_us',
                      e.target.value
                    );
                  },
                })}
                className='block w-[41.5rem] h-52 p-5 border bg-transparent border-black resize-none focus:outline-none '
              ></textarea>
            </div>
            <div className='relative w-[41.5rem] pt-11'>
              <button
                type='submit'
                className='absolute right-0 py-3 px-8 bg-turquoise tracking-wide text-white font-bold border rounded-[42px] submit'
              >
                დასრულება
              </button>
            </div>
          </form>
          <div className='float-right'>
            <img
              className='h-6 mt-32 z-20'
              src='/assets/previous-button.png'
              alt='go to previous page'
              onClick={() => {
                navigate(`${ROUTES.VACCINATION}`, {
                  state: { back: true },
                });
              }}
            />
          </div>
        </div>
        <div>
          <Illustration hideHeart={showModal} />
        </div>
      </div>
      {showModal && <Modal />}
    </div>
  );
}
export default Advice;
