import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Input, Modal, Button, Form } from 'semantic-ui-react';

import TextForm from 'components/molecules/form-component/TextForm';
import SelectBox from 'components/molecules/form-component/SelectBox'
import axios from 'apis/settings/axios';

import {CATEGORY_OPTIONS ,RECRUITMENT_TYPE_OPTIONS} from 'constants/selectOptionConstants'

const RecruitmentForm =()=>{
  const {register, handleSubmit, formState: { errors, isValid}, reset} = useForm({mode: 'onChange'});
  const [modalIsOpen, setIsOpen]= useState(false);
  const onSubmit = async (data) => {
    try {
      console.log(data)
      await axios.post('/recruitments',{
        recruitment: {...data}
      })
    } catch (error){
      console.log(error.response)
    } finally {
      window.location.reload();
    }
  }

  useEffect(()=>{
    return ()=>{reset(); console.log("reset")}
  },[modalIsOpen,reset])

  return (
    <>
      <Modal
        closeIcon
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        open={modalIsOpen}
        trigger={<Button>グチ相手を募集する</Button>}
      >
        <Modal.Header>Recruitment create</Modal.Header>
        <Modal.Content>
          <Button onClick={()=>setIsOpen(false)}>close</Button>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Field>
              <TextForm register={register("title", { required: true, maxLength: 100})} errors={errors} formTarget="title"/>
            </Form.Field>
            <Form.Field>
              <TextForm register={register("content", { required: true, maxLength: 1000})} errors={errors} formTarget="content"/>
            </Form.Field>
            <Form.Field>
              <SelectBox register={register("categoryId", { required: true})} errors={errors} formTarget="categoryId" selectOptions={CATEGORY_OPTIONS}/>
            </Form.Field>
            <Form.Field>
              <SelectBox register={register("recruitmentType", { required: true})} errors={errors} formTarget="recruitmentType" selectOptions={RECRUITMENT_TYPE_OPTIONS}/>
            </Form.Field>
            <Input disabled={!isValid} type="submit"/>
          </Form>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default RecruitmentForm