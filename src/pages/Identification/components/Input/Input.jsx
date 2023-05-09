import { InputPropTypes } from './input.propTypes';

function Input({ name, placeholder, label, handleChange, customClass }) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name} className='text-xl mb-2'>
        {label}
      </label>
      <input
        onChange={handleChange}
        id={name}
        placeholder={placeholder}
        className={`${
          customClass && customClass
        } text-xl bg-transparent block mt-1 border border-black py-3 px-5 text-s w-full placeholder-black font-light`}
      />
    </div>
  );
}

Input.propTypes = InputPropTypes;

export default Input;
