import { useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormDataContext } from '@/context';
import { ROUTES } from '@/config';

function useIdentificationInputs() {
  const { updateFormData } = useContext(FormDataContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    defaultValues: {
      first_name: localStorage.getItem('first_name') || '',
      last_name: localStorage.getItem('last_name') || '',
      email: localStorage.getItem('email') || '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (localStorage.getItem('first_name')) {
      trigger('first_name');
    }
    if (localStorage.getItem('last_name')) {
      trigger('last_name');
    }
    if (localStorage.getItem('email')) {
      trigger('email');
    }
  }, [trigger]);

  const onSubmit = (data) => {
    updateFormData(data);
    navigate(ROUTES.COVID);
  };

  return { handleSubmit, register, errors, trigger, onSubmit };
}

export default useIdentificationInputs;
