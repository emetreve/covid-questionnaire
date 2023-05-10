import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';

function useIdentificationInputs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
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

  const name = useWatch({
    control,
    name: 'name',
    defaultValue: localStorage.getItem('name') || '',
  });

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  const surname = useWatch({
    control,
    name: 'surname',
    defaultValue: localStorage.getItem('surname') || '',
  });

  useEffect(() => {
    localStorage.setItem('surname', surname);
  }, [surname]);

  const email = useWatch({
    control,
    name: 'email',
    defaultValue: localStorage.getItem('email') || '',
  });

  useEffect(() => {
    localStorage.setItem('email', email);
  }, [email]);

  return { handleSubmit, register, errors };
}

export default useIdentificationInputs;
