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
      had_covid: localStorage.getItem('had_covid') || '',
      had_antibody_test: localStorage.getItem('had_antibody_test') || '',
      antibodies: {
        test_date: localStorage.getItem('antibodies.test_date') || '',
        number: localStorage.getItem('antibodies.number') || '',
      },
      covid_sickness_date: localStorage.getItem('covid_sickness_date') || '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (localStorage.getItem('antibodies.number')) {
      trigger('antibodies.number');
    }
    if (localStorage.getItem('covid_sickness_date')) {
      trigger('covid_sickness_date');
    }
  }, [trigger]);

  const watchedFields = useWatch({
    control,
    name: ['had_covid', 'had_antibody_test'],
  });

  const [had_covid, had_antibody_test] = watchedFields;

  const onSubmit = (data) => {
    if (had_covid === 'ახლა მაქვს' || had_covid === 'არა') {
      localStorage.removeItem('had_antibody_test');
      setValue('had_antibody_test', '');
      localStorage.removeItem('covid_sickness_date');
      setValue('covid_sickness_date', '');
      localStorage.removeItem('antibodies.test_date');
      setValue('antibodies.test_date', '');
      localStorage.removeItem('antibodies.number');
      setValue('antibodies.number', '');
    }

    if (had_antibody_test === 'კი') {
      localStorage.removeItem('covid_sickness_date');
      setValue('covid_sickness_date', '');
    }

    if (had_antibody_test === 'არა') {
      localStorage.removeItem('antibodies.test_date');
      setValue('antibodies.test_date', '');
      localStorage.removeItem('antibodies.number');
      setValue('antibodies.number', '');
    }

    updateFormData(data);
    navigate(ROUTES.VACCINATION);
  };

  return {
    handleSubmit,
    register,
    errors,
    trigger,
    onSubmit,
    had_covid,
    had_antibody_test,
  };
}

export default useCovidInputs;
