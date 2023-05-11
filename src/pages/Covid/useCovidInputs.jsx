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

  const had_covid = useWatch({
    control,
    name: 'had_covid',
  });

  const had_antibody_test = useWatch({
    control,
    name: 'had_antibody_test',
  });

  const onSubmit = (data) => {
    console.log('pass');
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
