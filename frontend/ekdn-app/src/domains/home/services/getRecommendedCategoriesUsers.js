import axios from 'domains/settings/axios'

const getRecommendedUsers = async(ids)=>{
  const response = await axios.get('/users/recommended_categories_users', {
    params: {
      categoryIds: ids
    }
  })
  return response.data.users
}

export default getRecommendedUsers