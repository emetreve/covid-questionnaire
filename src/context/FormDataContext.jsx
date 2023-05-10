import { createContext, useState } from 'react';
import { FormDataContextPropTypes } from './FormDataContext.propTypes';

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

FormDataProvider.propTypes = FormDataContextPropTypes;

export { FormDataContext, FormDataProvider };
