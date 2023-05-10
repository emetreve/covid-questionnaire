import { useEffect } from 'react';
import { useWatch } from 'react-hook-form';

function useLocalStorage(inputName, control) {
  const input = useWatch({
    control,
    name: inputName,
    defaultValue: localStorage.getItem(inputName) || '',
  });
  useEffect(() => {
    localStorage.setItem(inputName, input);
  }, [input, inputName]);
}

export default useLocalStorage;
