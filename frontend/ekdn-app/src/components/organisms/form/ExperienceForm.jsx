import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Input } from 'semantic-ui-react';
import Modal from 'react-modal';

import TextForm from 'components/molecules/form-component/TextForm';
import SelectBox from 'components/molecules/form-component/SelectBox'
import axios from 'domains/settings/axios';

Modal.setAppElement('body');

const ExperienceForm =({onCloseModal,formKey})=>{
  const {register, handleSubmit, formState: { errors, isValid}, reset} = useForm({mode: 'onChange'});
  const [modalIsOpen, setIsOpen]= useState(false);
  const onSubmit = async (data) => {
    try {
      console.log(data)
      await axios.post('/experiences',{
        experience: {...data}
      })
    } catch (error){
      console.log(error.response)
    } finally {
      
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
      {
        modalIsOpen ? (
          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
          >
            <h1>experience create</h1>
            <button onClick={()=>{reset(); setIsOpen(false)}}>close</button>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextForm register={register} errors={errors} formTarget="title" isRequired maxLength={20} />
              <TextForm register={register} errors={errors} formTarget="content" isRequired maxLength={100} />
              <SelectBox register={register} errors={errors} formTarget="categoryId" isRequired />
              <Input disabled={!isValid} type="submit"/>
            </form>
          </Modal>
        ) : (
          <button onClick={()=>{setIsOpen(true)}}>体験を共有する</button>
        )
      }
    </>
  )
}

export default ExperienceForm