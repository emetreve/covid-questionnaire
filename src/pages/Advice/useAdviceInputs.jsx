import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormDataContext } from '@/context';
import { ROUTES } from '@/config';

function useAdviceInputs() {
  const { updateFormData } = useContext(FormDataContext);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      non_formal_meetings: localStorage.getItem('non_formal_meetings') || '',
      number_of_days_from_office:
        localStorage.getItem('number_of_days_from_office') || '',
      what_about_meetings_in_live:
        localStorage.getItem('what_about_meetings_in_live') || '',
      tell_us_your_opinion_about_us:
        localStorage.getItem('tell_us_your_opinion_about_us') || '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    updateFormData(data);
    navigate(ROUTES.THANK_YOU);
  };

  return {
    handleSubmit,
    register,
    onSubmit,
  };
}

export default useAdviceInputs;
