
import React from 'react';
import { queryCache } from 'react-query';
import Home from 'components/pages/Home';

const EnhancedHome=()=>{
  const getHomePageContentsForCategory = async (categoryIds) => {
    try{
      await Promise.all([
        queryCache.prefetchQuery([categoryIds, 'recommendedUsers'], (ids) =>
          getRecommendedCategoriesUsers(ids)
        ),
        queryCache.prefetchQuery(['recommendedCategories'], (ids) =>
          getRecommendCategories(ids)
        ),
        queryCache.prefetchQuery([categoryIds[0], 'firstRecommendedCategoriesExperiences'], (ids) =>
          getRecommededCategoriesExperiences(ids)
        ),
        queryCache.prefetchQuery([categoryIds[1], 'secondRecommendedCategoriesExperiences'], (ids) =>
          getRecommededCategoriesExperiences(ids),
          { enabled: categoryIds[1] }
        ),
      ])
    } catch(error) {
      console.log(error)
    }
  };

  const getDefaultHomePageContents = async (categoryIds) => {
    try{
      await Promise.all([
        queryCache.prefetchQuery([categoryIds, 'recommendedUsers'], (ids) =>
          getRecommendedCategoriesUsers(ids)
        ),
        queryCache.prefetchQuery(['recommendedCategories'], (ids) =>
          getRecommendCategories(ids)
        ),
        queryCache.prefetchQuery([categoryIds[0], 'firstRecommendedCategoriesExperiences'], (ids) =>
          getRecommededCategoriesExperiences(ids)
        ),
        queryCache.prefetchQuery([categoryIds[1], 'secondRecommendedCategoriesExperiences'], (ids) =>
          getRecommededCategoriesExperiences(ids)
        ),
      ])
    } catch(error) {
      console.log(error)
    }
  };
  //配列の要素が一つの場合は[1]の要素がundefindedになることに注意
  const recommendedCategoryIds = JSON.parse(localStorage.getItem("recommendedCategoryIds"))?.slice(0,2);
  const haveRecommendedCategoryIds = !!recommendedCategoryIds;

  if(haveRecommendedCategoryIds) {
    getHomePageContentsForCategory(recommendedCategoryIds)
  }else {
    getDefaultHomePageContents()
  }

  const homePageProps = haveRecommendedCategoryIds ? {haveRecommendedCategoryIds, recommendedCategoryIds} : {haveRecommendedCategoryIds}

  return <Home {...homePageProps} />
}
export default EnhancedHome;