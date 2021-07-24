import React from 'react';

import { Item } from 'semantic-ui-react'
import {ChatRoomText} from 'constants/Text'

import MessageItem from 'components/molecules/MessageItem'

const EnhancedChatRoomMessages=({messages, userId})=>{

  return (
    <Item.Group>
    {messages.length ? messages.map((message)=>{
      return (
          <MessageItem message={message} isMyMessage={message.user.id === userId} />
      )
    }) :
    <p>{ChatRoomText.NO_MESSAGES}</p>}
    </Item.Group>
  )
}

export default EnhancedChatRoomMessages