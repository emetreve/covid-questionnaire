import { createContext, useState } from 'react';

const FormDataContext = createContext();

function FormDataProvider({ children }) {
  const [formData, setFormData] = useState({});

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
