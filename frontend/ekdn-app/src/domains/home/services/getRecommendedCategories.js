import axios from 'domains/settings/axios'

const getRecommendedCategories = async(ids)=>{
  const response = await axios.get('/categories/recommended_categories', {
    params: {
      categoryIds: ids
    }
  })
  return response.data.categories
}

export default getRecommendedCategories