import axios from 'domains/settings/axios'

const getRecommendedUsers = async(ids)=>{
  const response = await axios.get('/users/recommended_categories_users', {
    params: {
      categoryIds: ids
    }
  })
  const users = await response.data

  return users
}

export default getRecommendedUsers