import { FormTracker } from '@/components';
function Advice() {
  return (
    <div className='px-44 h-screen uppercase bg-granular-white relative'>
      <FormTracker progress={4} />
      <div className='flex justify-between'>
        <div className='w-[28rem] leading-6'>
          <p>
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
            რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
            განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
            ჩვენთან გადმოსვლის.
          </p>
          <p className='pt-4'>
            პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
            ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </p>
        </div>
        <form noValidate className='w-[43rem] pt-3'></form>
      </div>
    </div>
  );
}
export default Advice;
