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
        <p className='font-bold text-2xl'>{progress} / 4</p>
      </div>
    </>
  );
}

FormTracker.propTypes = FormTrackerPropTypes;

export default FormTracker;
