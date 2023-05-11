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
      i_am_waiting: localStorage.getItem('i_am_waiting') || '',
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

  const vaccination_stage = useWatch({
    control,
    name: 'vaccination_stage',
  });

  const i_am_waiting = useWatch({
    control,
    name: 'i_am_waiting',
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
    vaccination_stage,
    i_am_waiting,
  };
}

export default useCovidInputs;
