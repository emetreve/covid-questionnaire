import { ErrorPropTypes } from './Error.propTypes';

function Error({ content }) {
  return <>{content}</>;
}

Error.propTypes = ErrorPropTypes;

export default Error;
