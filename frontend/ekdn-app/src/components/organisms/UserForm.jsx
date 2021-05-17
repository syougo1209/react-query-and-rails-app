import React from 'react';
import { useForm } from "react-hook-form";
import { Input } from 'semantic-ui-react';

import TextForm from 'components/molecules/TextForm'

const UserForm =()=>{
  const {register, handleSubmit, formState: { errors, isValid}} = useForm({mode: 'onChange'});
  const onSubmit = data => console.log(data)

  return (
    <>
      <h1>user create</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextForm register={register} errors={errors} formTarget="userName" isRequired maxLength={20} />
        <TextForm register={register} errors={errors} formTarget="email" isRequired maxLength={100} />
        <TextForm register={register} errors={errors} formTarget="password" isRequired maxLength={100} />
        <Input disabled={!isValid} type="submit"/>
      </form>
    </>
  )
}

export default UserForm