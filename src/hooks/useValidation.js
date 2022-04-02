import React, { useCallback } from 'react';
const validator = require('validator');

export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;

    setValues({...values, [name]: value});

    if (name === 'email') {
      !validator.isEmail(value)
        ? setErrors({...errors, [name]: 'Некорректные данные в поле E-mail' })
        : setErrors({...errors, [name]: '' });
    } else {
      setErrors({...errors, [name]: target.validationMessage });
    }

    if (name === 'email') {
      setIsValid(validator.isEmail(value));
    } else {
      setIsValid(target.closest('form').checkValidity());
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
