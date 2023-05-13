import { useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormDataContext } from '@/context';
import { ROUTES } from '@/config';

function useAdviceInputs() {
  const { updateFormData } = useContext(FormDataContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      non_formal_meetings: localStorage.getItem('non_formal_meetings') || '',
      number_of_days_from_office:
        localStorage.getItem('number_of_days_from_office') || '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return {
    handleSubmit,
    register,
    onSubmit,
  };
}

export default useAdviceInputs;
