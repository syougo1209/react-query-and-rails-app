import axios from 'apis/settings/axios'

const getRecommendedCategoriesExperiences = async(id)=>{
  const response = await axios.get('/experiences/recommended_categories_experiences', {
    params: {
      categoryIds: id
    }
  })
  const experiences = await response.data

  return experiences
}

export default getRecommendedCategoriesExperiences