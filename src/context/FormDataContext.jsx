import { createContext, useState } from 'react';

const FormDataContext = createContext();

function FormDataProvider({ children }) {
  const [formData, setFormData] = useState({
    // first_name: localStorage.getItem('first_name') || '',
    // last_name: localStorage.getItem('last_name') || '',
    // email: localStorage.getItem('email') || '',
  });

  const updateFormData = (data) => {
    setFormData((prevState) => ({ ...prevState, data }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}

export { FormDataContext, FormDataProvider };
