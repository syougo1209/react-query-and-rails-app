import React, {useState} from 'react';
import {useMutation} from 'react-query'
import {Link} from 'react-router-dom'

import {Button, Modal, Icon} from 'semantic-ui-react'

import axios from 'apis/settings/axios';

const CreateChatRequestModal=({modalIsOpen, setModalIsOpen, modalMessage, setModalMessage, canCreate,setCanCreate, recruitment})=>{
  const [isCreatePosting, setIsCreatePosting]=useState(false)
  const [chatRoomId, setChatRoomId]=useState(null)

  const CreateRequestMutate= useMutation((recruitmentId) =>axios.post(`recruitments/${recruitmentId}/recruitment_chat_starts`), {
    onMutate: ()=>{
      setIsCreatePosting(true)
    },
    onError: (error)=>{
      setModalIsOpen(true)
      setModalMessage(error.response.data.message)
    },
    onSuccess: (data)=>{
      setModalIsOpen(true)
      console.log(data.data.chat_room_id)
      setModalMessage("グチチャットのルームを作成しました")
      setChatRoomId(data.data.chat_room_id)
      console.log(chatRoomId)
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
              { chatRoomId && <Link to="/home">リンクをクリック</Link>}
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