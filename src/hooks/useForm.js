import { useState } from 'react';

function useForm(initValues) {
  const [values, setValues] = useState(initValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(eventInfo) {
    setValue(
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value,
    );
  }

  function clearForm() {
    setValues(initValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
