import React from 'react';

import { useParams } from 'react-router';
import { useQuery } from 'react-query';

import DetailChatRoomPage from 'components/pages/DetailChatRoomPage'

import getDetailChatRoom from  'apis/chatRoom/getDetailChatRoom'

const EnhancedDetailChatRoomPage=()=>{
  const { chatRoomId } = useParams();
  console.log("chatROom")

  const { data: chatRoom }=useQuery([chatRoomId, 'detailChatRoom'], ()=>getDetailChatRoom(chatRoomId), {
    enabled: Number.isInteger(parseInt(chatRoomId))})

  return <DetailChatRoomPage chatRoom={chatRoom}/>
}

export default EnhancedDetailChatRoomPage