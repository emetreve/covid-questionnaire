import { useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormDataContext } from '@/context';
import { ROUTES } from '@/config';

function useCovidInputs() {
  const { updateFormData } = useContext(FormDataContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    defaultValues: {
      had_covid: localStorage.getItem('had_covid') || '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (localStorage.getItem('had_covid')) {
      trigger('had_covid');
    }
  }, [trigger]);

  const onSubmit = (data) => {
    console.log('pass');
    updateFormData(data);
    navigate(ROUTES.VACCINATION);
  };

  return { handleSubmit, register, errors, trigger, onSubmit };
}

export default useCovidInputs;
