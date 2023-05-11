import { FormTracker } from '@/components';
import { Error } from '@/components';
import { Illustration } from './components';

function Covid() {
  return (
    <div className='px-44 h-screen uppercase bg-granular-white relative'>
      <FormTracker progress={2} />
      <div className='flex justify-between'>
        <form></form>
        <div>
          <Illustration />
        </div>
      </div>
    </div>
  );
}
export default Covid;
