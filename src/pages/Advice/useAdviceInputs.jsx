import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormDataContext } from '@/context';
import { ROUTES } from '@/config';
import { instance } from '@/services';

function useAdviceInputs() {
  const { updateFormData, formData } = useContext(FormDataContext);
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

  const onSubmit = async (data) => {
    updateFormData(data);

    const contextData = { ...formData };

    Object.entries(contextData).forEach(([key, value]) => {
      if (value === '') {
        delete contextData[key];
      }
      if (key === 'antibodies') {
        const number = contextData[key].number;
        const test_date = contextData[key].test_date;

        if (number === '') {
          delete contextData[key].number;
        } else {
          contextData[key].number = Number(contextData[key].number);
        }
        if (test_date === '') {
          delete contextData[key].test_date;
        }
        if (number === '' && test_date === '') {
          delete contextData[key];
        }
      }
      if (key === 'had_vaccine') {
        if (contextData[key] === 'კი') {
          contextData[key] = true;
        }
        if (contextData[key] === 'არა') {
          contextData[key] = false;
        }
      }
      if (key === 'number_of_days_from_office') {
        contextData[key] = Number(contextData[key]);
      }
    });

    try {
      const response = await instance.post('/create', contextData);
      if (response.status === 201) {
        navigate(ROUTES.THANK_YOU);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleSubmit,
    register,
    onSubmit,
  };
}

export default useAdviceInputs;