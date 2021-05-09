
import React from 'react';
import { QueryClient } from 'react-query';
import Home from 'components/pages/Home';
import { getRecommendedCategories, getRecommededCategoriesExperiences, getRecommendedCategoriesUsers} from 'domains/home';

const EnhancedHome=()=>{
  const queryClient = new QueryClient()
  const getHomePageContentsForCategory = async (categoryIds) => {
    try{
      await Promise.all([
        queryClient.prefetchQuery([categoryIds, 'recommendedUsers'], (ids) =>
          getRecommendedCategoriesUsers(ids)
        ),
        queryClient.prefetchQuery(['recommendedCategories'], (ids) =>
          getRecommendedCategories(ids)
        ),
        queryClient.prefetchQuery([categoryIds[0], 'firstRecommendedCategoriesExperiences'], (id) =>
          getRecommededCategoriesExperiences(id)
        ),
        queryClient.prefetchQuery([categoryIds[1], 'secondRecommendedCategoriesExperiences'], (id) =>
          getRecommededCategoriesExperiences(id)
        ),
        queryClient.prefetchQuery([categoryIds[2], 'secondRecommendedCategoriesExperiences'], (id) =>
          getRecommededCategoriesExperiences(id)
        ),
      ])
    } catch(error) {
      console.log(error)
    }
  };

  const getDefaultHomePageContents = async (categoryIds) => {
    try{
      await Promise.all([
        queryClient.prefetchQuery([categoryIds, 'recommendedUsers'], (ids) =>
          getRecommendedCategoriesUsers(ids)
        ),
        queryClient.prefetchQuery(['recommendedCategories'], (ids) =>
          getRecommendedCategories(ids)
        ),
      ])
    } catch(error) {
      console.log(error)
    }
  };
  //配列の要素が一つの場合は[1]の要素がundefindedになることに注意
  const recommendedCategoryIds = JSON.parse(localStorage.getItem("recommendedCategoryIds"))?.slice(0,3);
  const haveRecommendedCategoryIds = !!recommendedCategoryIds;

  if(haveRecommendedCategoryIds) {
    getHomePageContentsForCategory(recommendedCategoryIds)
  }else {
    getDefaultHomePageContents(recommendedCategoryIds)
  }

  const homePageProps = haveRecommendedCategoryIds ? {haveRecommendedCategoryIds, recommendedCategoryIds} : {haveRecommendedCategoryIds}

  return <Home {...homePageProps} />
}
export default EnhancedHome;