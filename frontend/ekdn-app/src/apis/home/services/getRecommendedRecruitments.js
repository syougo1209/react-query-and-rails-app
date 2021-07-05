import axios from 'apis/settings/axios'

const getRecommendedRecruitments = async()=>{
  const response = await axios.get('/recruitments/recommended_recruitments')
  return response.data.recruitments
}

export default getRecommendedRecruitments