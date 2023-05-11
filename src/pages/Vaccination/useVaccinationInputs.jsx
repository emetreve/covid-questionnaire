import { useEffect, useContext } from 'react';
import { useForm, useWatch } from 'react-hook-form';
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
    control,
  } = useForm({
    defaultValues: {
      had_vaccine: localStorage.getItem('had_vaccine') || '',
      vaccination_stage: localStorage.getItem('vaccination_stage') || '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    //TODO trigger needed question errors
  }, [trigger]);

  const had_vaccine = useWatch({
    control,
    name: 'had_vaccine',
  });

  const onSubmit = (data) => {
    updateFormData(data);
    navigate(ROUTES.ADVICE);
  };

  return {
    handleSubmit,
    register,
    errors,
    trigger,
    onSubmit,
    had_vaccine,
  };
}

export default useCovidInputs;
