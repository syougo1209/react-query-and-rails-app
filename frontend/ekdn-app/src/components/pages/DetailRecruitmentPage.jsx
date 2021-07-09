import React, {Suspense} from 'react';

import DetailRecruitment from 'containers/organisms/DetailRecruitment';
import ErrorBoundary from 'ErrorBoundary';

const DetailRecruitmentPage=({recruitmentId, userId})=>{
    return (
      <>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading</div>}>
            <DetailRecruitment recruitmentId={recruitmentId}/>
          </Suspense>
        </ErrorBoundary>
      </>
    )
  }
  
  export default DetailRecruitmentPage