
import React from 'react';
import { QueryClient, useQuery } from 'react-query';
import Home from 'components/pages/Home';
import { getRecommendedCategories, getRecommendedCategoriesUsers} from 'domains/home';
import getCurrentUserId from  'domains/getCurrentUserId'

const EnhancedHome=()=>{
  const queryClient = new QueryClient()
  /* ログイン機能を実装した時に一緒に実装する
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
  */

  const getDefaultHomePageContents = async () => {
    try{
      await Promise.all([
        queryClient.prefetchQuery([1, 'recommendedUsers'],
          getRecommendedCategoriesUsers
        ),
        queryClient.prefetchQuery([1,'recommendedCategories'],
          getRecommendedCategories
        ),
      ])
    } catch(error) {
      console.log(error)
    }
  };
  const {data: userId=null} = useQuery(['currentUserId'], getCurrentUserId)
  //配列の要素が一つの場合は[1]の要素がundefindedになることに注意
  //const recommendedCategoryIds = JSON.parse(localStorage.getItem("recommendedCategoryIds"))?.slice(0,3);
  const haveRecommendedCategoryIds = false; //!!recommendedCategoryIds;

  if(haveRecommendedCategoryIds) {
    //getHomePageContentsForCategory(recommendedCategoryIds)
  }else {
    getDefaultHomePageContents()
  }

  const homePageProps = {userId}//haveRecommendedCategoryIds ? {haveRecommendedCategoryIds, recommendedCategoryIds} : {haveRecommendedCategoryIds}

  return <Home {...homePageProps} />
}
export default EnhancedHome;