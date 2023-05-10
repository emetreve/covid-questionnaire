import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function useIdentificationInputs() {
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

  return { handleSubmit, register, errors };
}

export default useIdentificationInputs;
