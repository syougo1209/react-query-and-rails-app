import React, {useState} from 'react';
import {useMutation} from 'react-query'
import axios from 'apis/settings/axios';

import {Button, Modal, Icon} from 'semantic-ui-react'

import { CREATE_CHAT_MODAL_STATUS } from 'constants/modalStatus'

const ConfirmCreateChatModal=({modalStatus, setModalStatus, setChatRoomId, recruitment})=>{

  const [isCreatePosting, setIsCreatePosting]=useState(false)

  const CreateRequestMutate= useMutation((recruitmentId) =>axios.post(`recruitments/${recruitmentId}/recruitment_chat_starts`), {
    onMutate: ()=>{
      setIsCreatePosting(true)
    },
    onError: ()=>{
      setModalStatus(CREATE_CHAT_MODAL_STATUS.createModalError)
    },
    onSuccess: (data)=>{
      setChatRoomId(data.data.chatRoomId)
      setModalStatus(CREATE_CHAT_MODAL_STATUS.displaySuccessModal)
    },
    onSettled: ()=>{
      setIsCreatePosting(false)
    }
  })

  const createRequest=()=>{
    CreateRequestMutate.mutate(recruitment.id)
  }

  const isSetConfirmModal=()=>{
    return modalStatus === CREATE_CHAT_MODAL_STATUS.displayConfirmModal || modalStatus === CREATE_CHAT_MODAL_STATUS.confirmModalError
  }

  return (
    <Modal
      closeIcon
      onClose={() => setModalStatus(CREATE_CHAT_MODAL_STATUS.notDisplay)}
      open={isSetConfirmModal()}
      >
          <Modal.Header>チャットに参加する</Modal.Header>
          <Modal.Content>
            <Modal.Description>
            { modalStatus === CREATE_CHAT_MODAL_STATUS.displayConfirmModal ?
                <p>グチを聞きますか?</p> : <p>この募集のチャットに参加することはできません</p>
            }
            </Modal.Description>
          </Modal.Content>
          { modalStatus === CREATE_CHAT_MODAL_STATUS.displayConfirmModal &&
            <Modal.Actions>
              <Button color='red' onClick={()=>setModalStatus(CREATE_CHAT_MODAL_STATUS.notDisplay)}>
                <Icon name='remove'/>いいえ
              </Button>
              <Button color='green' onClick={createRequest} disabled={isCreatePosting}>
                <Icon name='checkmark' />はい
              </Button>
            </Modal.Actions>
          }
      </Modal>
  )
}

export default ConfirmCreateChatModal