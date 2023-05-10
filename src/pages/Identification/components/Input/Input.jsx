import { InputPropTypes } from './input.propTypes';
import { forwardRef } from 'react';

const Input = forwardRef(
  ({ name, placeholder, label, error, customClass }, ref) => {
    return (
      <div className={`${customClass && customClass} flex flex-col`}>
        <label htmlFor={name} className='text-xl mb-2'>
          {label}
        </label>
        <input
          ref={ref}
          id={name}
          placeholder={placeholder}
          className='text-xl bg-transparent block mt-1 border border-black py-3 px-5 text-s w-full placeholder-black font-light'
        />
        <div className='h-2'>{error}</div>
      </div>
    );
  }
);

Input.displayName = 'Input';

Input.propTypes = InputPropTypes;

export default Input;
