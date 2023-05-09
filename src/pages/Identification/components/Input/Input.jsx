import { InputPropTypes } from './input.propTypes';

function Input({ name, placeholder, label, handleChange }) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name}>{label}</label>
      <input onChange={handleChange} id={name} placeholder={placeholder} />
    </div>
  );
}

Input.propTypes = InputPropTypes;

export default Input;
