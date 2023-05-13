import { FormTracker } from '@/components';
import useAdviceInputs from './useAdviceInputs';

function Advice() {
  const { handleSubmit, register, onSubmit } = useAdviceInputs();

  return (
    <div className='px-44 h-screen uppercase bg-granular-white relative'>
      <FormTracker progress={4} />
      <div className='flex justify-between'>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className='w-[43rem] pt-3'
        >
          <div className='w-[38rem] leading-6 text-[1.4em]'>
            <p>
              რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
              რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა
              წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის
              კი — ჩვენთან გადმოსვლის.
            </p>
            <p className='pt-4'>
              პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
              ყოველდღიური კომუნიკაციაც გაიშვიათდა.
            </p>
          </div>
          <div className='text-[1.4em] pt-10 mb-10'>
            <p className='font-bold mb-4'>
              რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ
              შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*
            </p>
            <div className='ml-6 '>
              <div className='flex items-center mb-[1.25rem]'>
                <label htmlFor='option1'>
                  <input
                    type='radio'
                    name='non_formal_meetings'
                    id='option1'
                    value='კვირაში ორჯერ'
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
                <label htmlFor='option2'>
                  <input
                    type='radio'
                    name='non_formal_meetings'
                    id='option2'
                    value='კვირაში ერთხელ'
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
                <label htmlFor='option2'>
                  <input
                    type='radio'
                    name='non_formal_meetings'
                    id='option2'
                    value='ორ კვირაში ერთხელ'
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
                <label htmlFor='option2'>
                  <input
                    type='radio'
                    name='non_formal_meetings'
                    id='option2'
                    value='თვეში ერთხელ'
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
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}
export default Advice;
