import { ErrorPropTypes } from './Error.propTypes';

function Error({ content }) {
  return (
    <div>
      <p className='pl-5 pt-2 text-error lowercase'>{content}</p>
    </div>
  );
}

Error.propTypes = ErrorPropTypes;

export default Error;
