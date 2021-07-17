import React from 'react';

import {Link} from 'react-router-dom'

import { Modal} from 'semantic-ui-react'

import { CREATE_CHAT_MODAL_STATUS } from 'constants/modalStatus'

const SuccessCreateChatModal=({modalStatus, setModalStatus, chatRoomId})=>{

  const isSetSuccessModal=()=>{
    return modalStatus === CREATE_CHAT_MODAL_STATUS.displaySuccessModal || modalStatus === CREATE_CHAT_MODAL_STATUS.createModalError
  }

  return (
    <Modal
          closeIcon
          onClose={() => setModalStatus(CREATE_CHAT_MODAL_STATUS.notDisplay)}
          open={isSetSuccessModal()}
      >
      <Modal.Header>チャットルームへ行く</Modal.Header>
      <Modal.Content>
        <Modal.Description>
        { modalStatus === CREATE_CHAT_MODAL_STATUS.displaySuccessModal ?
          (
            <>
              <p>チャットが始められます!</p>
              <Link to="/home">リンクをクリック</Link>
            </>
          )
          : <p>チャット部屋の作成に失敗しました</p>
        }
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default SuccessCreateChatModal