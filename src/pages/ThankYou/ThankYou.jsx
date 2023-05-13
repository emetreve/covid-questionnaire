import { useContext } from 'react';
import { FormDataContext } from '@/context';

function ThankYou() {
  const { formData } = useContext(FormDataContext);

  console.log(222, formData);

  return <div>THANK YOU</div>;
}

export default ThankYou;
