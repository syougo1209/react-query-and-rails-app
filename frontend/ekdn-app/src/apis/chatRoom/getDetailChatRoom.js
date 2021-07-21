import axios from 'apis/settings/axios'

const getDetailChatRoom = async(id)=>{
  const response = await axios.get(`chat_rooms/${id}`)
  console.log(response.data)
  return response.data
}

export default getDetailChatRoom