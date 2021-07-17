import React, {useState} from 'react';

import SuccessCreateChatModal from 'components/molecules/SuccessCreateChatModal'

import ConfirmCreateChatModal from 'components/molecules/ConfirmCreateChatModal';

const CreateChatRequestModal=({modalStatus, setModalStatus, recruitment })=>{
  const [chatRoomId, setChatRoomId]=useState(null)

  return (
    <>
      <ConfirmCreateChatModal
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        setChatRoomId={setChatRoomId}
        recruitment={recruitment}
      />

      <SuccessCreateChatModal
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        chatRoomId={chatRoomId}
      />
    </>
  )
}

export default CreateChatRequestModal