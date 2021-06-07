import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Input } from 'semantic-ui-react';
import Modal from 'react-modal';

import TextForm from 'components/molecules/form-component/TextForm'
import axios from 'domains/settings/axios';

Modal.setAppElement('body');

const UserForm =()=>{
  const {register, handleSubmit, formState: { errors, isValid}} = useForm({mode: 'onChange'});
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
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '600px'
    }
  };

  return (
    <>
      {modalIsOpen ?
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
        >
          <h1>user create</h1>
          <button onClick={()=>setIsOpen(false)}>close</button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextForm register={register} errors={errors} formTarget="name" isRequired maxLength={20} />
            <TextForm register={register} errors={errors} formTarget="email" isRequired maxLength={100} />
            <TextForm register={register} errors={errors} formTarget="password" isRequired maxLength={100} />
            <Input disabled={!isValid} type="submit"/>
          </form>
        </Modal>
        : <button onClick={()=>setIsOpen(true)}>新規登録</button>
      }
    </>
  )
}

export default UserForm