import axios from 'apis/settings/axios'

const getChatRoomMessages = async(id)=>{
  const response = await axios.get(`chat_rooms/${id}/messages`)
  return response.data
}

export default getChatRoomMessages