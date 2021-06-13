import React from 'react';
import { Input } from 'semantic-ui-react';

const TextForm = ({register, errors, formTarget}) => {

  return (
    <>
      <label>{formTarget}</label>
      <Input
        {...register}
      />
      {errors[formTarget] && "errors is presented"}
    </>
  )
}

export default TextForm