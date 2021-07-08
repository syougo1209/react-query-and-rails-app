import axios from 'apis/settings/axios'

const getRecommendedRecruitments = async()=>{
  const response = await axios.get('/recruitments/recommended_recruitments')
  console.log(response.data)
  return response.data
}

export default getRecommendedRecruitments