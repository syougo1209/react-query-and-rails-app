import React from 'react';

import { useParams } from 'react-router';
import { useQuery } from 'react-query';

import ChatRoomMessages from 'components/organisms/ChatRoomMessages'

import { getChatRoomMessages } from 'apis/chatRoom';

const EnhancedChatRoomMessages=()=>{
  const {chatRoomId}=useParams();

  const {data: messages=[]}=useQuery([chatRoomId, 'ChatRoomMessages'], ()=>getChatRoomMessages(chatRoomId), {
    enabled: Number.isInteger(parseInt(chatRoomId))})

  return <ChatRoomMessages messages={messages}/>
}

export default EnhancedChatRoomMessages