import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Input, Modal, Button, Form } from 'semantic-ui-react';

import TextForm from 'components/molecules/form-component/TextForm'
import axios from 'domains/settings/axios';

const UserForm =()=>{
  const {register, handleSubmit, formState: {isValid, errors}, reset} = useForm({mode: 'onChange'});
  const [modalIsOpen, setIsOpen]= useState(false);
  const onSubmit = async (data) => {
    try {
      await axios.post('/users',{
        user: {...data}
      })
    } catch (error){
      console.log(error.response)
    } finally {
      window.location.reload();
    }
  }

  useEffect(()=>{
    return ()=>reset()
  },[modalIsOpen,reset])

  return (
    <>
      <Modal
        closeIcon
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        open={modalIsOpen}
        trigger={<Button>新規登録</Button>}
      >
        <Modal.Header>user create</Modal.Header>
        <Modal.Content>
          <Button onClick={()=>{setIsOpen(false)}}>close</Button>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Field>
              <TextForm register={register("name", { required: true, maxLength: 20})} errors={errors} formTarget="name"/>
            </Form.Field>
            <Form.Field>
              <TextForm register={register("email", { required: true, maxLength: 100})} errors={errors} formTarget="email"/>
            </Form.Field>
            <Form.Field>
              <TextForm register={register("password", { required: true, maxLength: 100})} errors={errors} formTarget="password"/>
            </Form.Field>
            <Input disabled={!isValid} type="submit"/>
          </Form>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default UserForm