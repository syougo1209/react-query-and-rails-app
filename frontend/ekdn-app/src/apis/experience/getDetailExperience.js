import axios from 'apis/settings/axios'

const getDetailExperience = async(id)=>{
  const response = await axios.get(`experiences/${id}`)
  return response.data.experience
}

export default getDetailExperience