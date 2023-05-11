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
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (localStorage.getItem('had_covid')) {
      trigger('had_covid');
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
