import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Input, Button, Modal, Form } from 'semantic-ui-react';

import TextForm from 'components/molecules/form-component/TextForm'
import axios from 'apis/settings/axios';


const LoginForm =()=>{
    const {register, handleSubmit, formState: { errors, isValid}, reset} = useForm({mode: 'onChange'});
    const [modalIsOpen, setIsOpen]= useState(false);

    useEffect(()=>{
      return ()=>reset()
    },[modalIsOpen,reset])

    const onSubmit = async (data) => {
      try {
        await axios.post('/session_logins',{
          session_login: {...data}
        })
      } catch (error){
        console.log(error.response)
      } finally {
        window.location.reload();
      }
    }

    return (
      <>
        <Modal
          closeIcon
          onClose={() => setIsOpen(false)}
          onOpen={() => setIsOpen(true)}
          open={modalIsOpen}
          trigger={<Button>ログイン</Button>}
        >
        <Modal.Header>ログイン</Modal.Header>
        <Modal.Content>
          <button onClick={()=>{setIsOpen(false)}}>close</button>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
  
  export default LoginForm