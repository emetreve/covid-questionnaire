import { createContext, useState } from 'react';

const FormDataContext = createContext();

function FormDataProvider({ children }) {
  const [formData, setFormData] = useState({});

  const updateFormData = (key, value) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}

export { FormDataContext, FormDataProvider };
