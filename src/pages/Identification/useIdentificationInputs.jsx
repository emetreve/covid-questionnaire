import { useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FormDataContext } from '@/context';

function useIdentificationInputs() {
  const { updateFormData } = useContext(FormDataContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    defaultValues: {
      name: localStorage.getItem('name') || '',
      surname: localStorage.getItem('surname') || '',
      email: localStorage.getItem('email') || '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (localStorage.getItem('name')) {
      trigger('name');
    }
    if (localStorage.getItem('surname')) {
      trigger('surname');
    }
    if (localStorage.getItem('email')) {
      trigger('email');
    }
  }, [trigger]);

  const onSubmit = (input, value) => {
    //TODO update context data if validated.
  };

  return { handleSubmit, register, errors, updateFormData, trigger, onSubmit };
}

export default useIdentificationInputs;
