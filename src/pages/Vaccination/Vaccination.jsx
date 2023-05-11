import { FormTracker } from '@/components';
import { Illustration } from './components';

function Vaccinaton() {
  return (
    <div className='px-44 h-screen uppercase bg-granular-white relative'>
      <FormTracker progress={3} />
      <div className='flex justify-between'>
        <form noValidate className='w-[39rem] pt-3'></form>
        <div>
          <Illustration />
        </div>
      </div>
    </div>
  );
}
export default Vaccinaton;
