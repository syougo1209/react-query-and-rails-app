import React from 'react';
import { useQuery } from 'react-query';
import Categories from 'components/organisms/Categories';
//import { getRecommendedCategories} from 'domains/home';
import axios from 'domains/settings/axios';

const EnhancedCategories=({categoryIds})=>{
  const { data: categories=[]} = useQuery([1, 'recommendedCategories'], async (categoryIds)=>{
    const response = await axios.get('/categories/recommended_categories', {
      params: {
        categoryIds: categoryIds
      }
    })
    return response.data.categories
  })

  return <Categories categories={categories} />
}


export default EnhancedCategories;