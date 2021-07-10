import axios from 'apis/settings/axios'

const getDetailRecruitment = async(id)=>{
  const response = await axios.get(`recruitments/${id}`)
  return response.data.recruitment
}

export default getDetailRecruitment