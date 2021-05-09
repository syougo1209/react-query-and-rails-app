import axios from 'domains/settings/axios'

const getRecommendedCategories = async(ids)=>{
  console.log(ids)
  const response = await axios.get('/categories/recommended_categories', {
    params: {
        categoryIds: ids
    }
  })
  const categories = await response.data
  console.log(categories)

  return categories
}

export default getRecommendedCategories