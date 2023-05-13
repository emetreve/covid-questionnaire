import { createContext, useState } from 'react';

const FormDataContext = createContext();

function FormDataProvider({ children }) {
  const defaultValues = {
    first_name: localStorage.getItem('first_name') || '',
    last_name: localStorage.getItem('last_name') || '',
    email: localStorage.getItem('email') || '',
    had_covid: localStorage.getItem('had_covid') || '',
    had_antibody_test: localStorage.getItem('had_antibody_test') || '',
    antibodies: {
      test_date: localStorage.getItem('antibodies.test_date') || '',
      number: localStorage.getItem('antibodies.number') || '',
    },
    covid_sickness_date: localStorage.getItem('covid_sickness_date') || '',
    had_vaccine: localStorage.getItem('had_vaccine') || '',
    vaccination_stage: localStorage.getItem('vaccination_stage') || '',
    i_am_waiting: localStorage.getItem('i_am_waiting') || '',
    non_formal_meetings: localStorage.getItem('non_formal_meetings') || '',
    number_of_days_from_office:
      localStorage.getItem('number_of_days_from_office') || '',
    what_about_meetings_in_live:
      localStorage.getItem('what_about_meetings_in_live') || '',
    tell_us_your_opinion_about_us:
      localStorage.getItem('tell_us_your_opinion_about_us') || '',
  };

  const [formData, setFormData] = useState(defaultValues);

  const updateFormData = (data) => {
    setFormData((prevState) => ({ ...prevState, ...data }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}

export { FormDataContext, FormDataProvider };
