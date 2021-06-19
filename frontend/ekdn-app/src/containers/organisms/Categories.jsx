import React from 'react';
import { useQuery } from 'react-query';
import Categories from 'components/organisms/Categories';
import { getRecommendedCategories} from 'apis/home';

const EnhancedCategories=({categoryIds})=>{
  const { data: categories=[]} = useQuery([1, 'recommendedCategories'], getRecommendedCategories)

  return <Categories categories={categories} />
}


export default EnhancedCategories;