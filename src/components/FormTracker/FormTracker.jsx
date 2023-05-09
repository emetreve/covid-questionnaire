import { FormTrackerPropTypes } from './FormTracker.propTypes';

function FormTracker({ progress }) {
  return (
    <>
      <div className='pt-20 flex justify-between'>
        <img
          src='/assets/logo-written.svg'
          className='h-8'
          alt='Redberry logo written'
        />
        <p className='font-bold text-3xl font-anonymousPro'>{progress}/4</p>
      </div>
      <hr className='border-[0.01rem] border-black my-6' />
    </>
  );
}

FormTracker.propTypes = FormTrackerPropTypes;

export default FormTracker;
