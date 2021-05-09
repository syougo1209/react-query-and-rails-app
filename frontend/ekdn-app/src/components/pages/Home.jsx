import React, {Suspense} from 'react';
import Categories from 'containers/organisms/Categories';
import Users from 'containers/organisms/Users';

const Home=(haveRecommendedCategoryIds, recommendedCategoryIds=[])=>{
  return (
    <>
    <h1>Home</h1>
    {
      <>
      <Suspense fallback={<div>hello</div>}>
        <Categories categoryIds={recommendedCategoryIds}/>
      </Suspense>
      <Suspense fallback={<div>hello</div>}>
        <Users categoryIds={recommendedCategoryIds}/>
      </Suspense>
      </>
    }
    </>
  )
}

export default Home