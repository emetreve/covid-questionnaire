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
    setValue,
  } = useForm({
    defaultValues: {
      had_vaccine: localStorage.getItem('had_vaccine') || '',
      vaccination_stage: localStorage.getItem('vaccination_stage') || '',
      i_am_waiting: localStorage.getItem('i_am_waiting') || '',
    },
    mode: 'onChange',
  });

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
    if (had_vaccine === 'კი') {
      localStorage.removeItem('i_am_waiting');
      setValue('i_am_waiting', '');
    }
    if (had_vaccine === 'არა') {
      localStorage.removeItem('vaccination_stage');
      setValue('vaccination_stage', '');
    }
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
