import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Input, Button, Modal, Form } from 'semantic-ui-react';

import TextForm from 'components/molecules/form-component/TextForm'
import axios from 'domains/settings/axios';


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
              <TextForm register={register} errors={errors} formTarget="email" isRequired maxLength={100} />
            </Form.Field>
            <Form.Field>
              <TextForm register={register} errors={errors} formTarget="password" isRequired maxLength={100} />
            </Form.Field>
            <Input disabled={!isValid} type="submit"/>
          </Form>
        </Modal.Content>
        </Modal>
      </>
    )
  }
  
  export default LoginForm