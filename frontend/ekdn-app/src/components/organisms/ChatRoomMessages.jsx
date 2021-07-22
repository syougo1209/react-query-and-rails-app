import React from 'react';

import {ChatRoomText} from 'constants/Text'

const EnhancedChatRoomMessages=({messages})=>{

  return (
    <>
    {messages.length ? messages.map((message)=>{
      return (
        <p>{message.content}</p>
      )
    }) :
    <p>{ChatRoomText.NO_MESSAGES}</p>}
    </>
  )
}

export default EnhancedChatRoomMessages