import React, {Suspense} from 'react';

import DetailExperience from 'containers/organisms/DetailExperience';
import ErrorBoundary from 'ErrorBoundary';

const DetailExperiencePage=({experienceId})=>{
  return (
    <>
    <ErrorBoundary>
      <Suspense fallback={<div>Loading</div>}>
        <DetailExperience experienceId={experienceId}/>
      </Suspense>
    </ErrorBoundary>
    </>
  )
}

export default DetailExperiencePage