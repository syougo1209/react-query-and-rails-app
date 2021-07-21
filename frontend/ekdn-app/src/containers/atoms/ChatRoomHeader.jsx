import React from 'react';

import { useParams } from 'react-router';
import { useQuery } from 'react-query';

import getDetailChatRoom from  'apis/chatRoom/getDetailChatRoom'

import ChatRoomHeader from 'components/atoms/ChatRoomHeader'

const EnhancedChatRoomHeader=()=>{
  const {chatRoomId}=useParams();

  const {data: chatRoom}=useQuery([chatRoomId, 'detailChatRoom'], ()=>getDetailChatRoom(chatRoomId), {
    enabled: Number.isInteger(parseInt(chatRoomId))})

  console.log(chatRoom)
  return <ChatRoomHeader chatRoom={chatRoom}/>
}

export default EnhancedChatRoomHeader