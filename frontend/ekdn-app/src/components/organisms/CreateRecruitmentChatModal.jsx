import React, {useState} from 'react';
import {useMutation} from 'react-query'

import {Button, Modal, Icon} from 'semantic-ui-react'
import {createUseStyles} from 'react-jss'

import axios from 'apis/settings/axios';

const CreateChatRequestModal=({modalIsOpen, setModalIsOpen, modalMessage, setModalMessage, canCreate,setCanCreate, recruitment})=>{
  const [isCreatePosting, setIsCreatePosting]=useState(false)

  const CreateRequestMutate= useMutation((recruitmentId) =>axios.post(`recruitments/${recruitmentId}/recruitment_chat_starts`), {
    onMutate: ()=>{
      setIsCreatePosting(true)
    },
    onError: (error)=>{
      setModalIsOpen(true)
      setModalMessage(error.response.data.message)
    },
    onSuccess: (data)=>{
      console.log(data)
      setModalIsOpen(true)
      setModalMessage("グチチャットのルームを作成しました")
    },
    onSettled: ()=>{
      setCanCreate(false)
      setIsCreatePosting(false)
    }
  })

  const createRequest=()=>{
    CreateRequestMutate.mutate(recruitment.id)
  }

  return (
    <>
      <Modal
          closeIcon
          onClose={() => setModalIsOpen(false)}
          onOpen={() => setModalIsOpen(true)}
          open={modalIsOpen}
      >
          <Modal.Header>チャットに参加する</Modal.Header>
          <Modal.Content>
          <Modal.Description>
          {modalMessage}
          </Modal.Description>
          </Modal.Content>
          { canCreate &&
          <Modal.Actions>
            <Button color='red' disabled={isCreatePosting}>
             <Icon name='remove'/>いいえ
            </Button>
            <Button color='green' onClick={createRequest} disabled={isCreatePosting}>
             <Icon name='checkmark' />はい
            </Button>
          </Modal.Actions>
          }
      </Modal>
    </>
  )
}

export default CreateChatRequestModal