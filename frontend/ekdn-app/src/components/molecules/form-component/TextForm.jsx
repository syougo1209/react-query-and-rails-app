import React from 'react';
import { Input } from 'semantic-ui-react';

const TextForm = ({register, errors, formTarget, isRequired, maxLength}) => {

  return (
    <>
      <label>{formTarget}</label>
      <Input
        {...register(formTarget, { required: isRequired, maxLength: maxLength})}
      />
      {errors[formTarget] && "errors is presented"}
    </>
  )
}

export default TextForm