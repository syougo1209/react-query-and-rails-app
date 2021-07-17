import axios from 'apis/settings/axios'

const getDetailChatRoom = async(id)=>{
  const response = await axios.get(`chat_rooms/${id}`)
  return response.data.chat_room
}

export default getDetailChatRoom