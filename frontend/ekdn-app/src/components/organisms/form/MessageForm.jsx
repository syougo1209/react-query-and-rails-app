import React from 'react';
import { useForm } from "react-hook-form";

import { Button, Form } from 'semantic-ui-react';

import TextAreaInput from 'components/molecules/form-component/TextAreaInput'
import axios from 'apis/settings/axios';

const MessageForm=()=>{
  const {register, handleSubmit, formState: { errors, isValid}} = useForm({mode: 'onChange'});

  const onSubmit = async (data) => {
    try {
      await axios.post('/messages',{
        message: {...data}
      })
    } catch (error){
      console.log(error.response)
    } finally {
      window.location.reload();
    }
  }

  return (
    <Form error onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
        <TextAreaInput register={register("content", { required: true, maxLength: 1000})} errors={errors} formTarget="content"/>
        <Button disabled={!isValid} type="submit">送信</Button>
      </Form.Field>
    </Form>
  )
}

export default MessageForm