import axios from 'apis/settings/axios'

const getCurrentUserId = async()=>{
  const response = await axios.get('/session_logins/current_user_id')
  return response.data.userId
}

export default getCurrentUserId