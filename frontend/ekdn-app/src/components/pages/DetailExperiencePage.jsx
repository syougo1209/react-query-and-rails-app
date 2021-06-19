import React, {Suspense, useState} from 'react';

import DetailExperience from 'containers/organisms/DetailExperience';

const DetailExperiencePage=({experienceId})=>{
  return (
    <>
    <Suspense fallback={<div>Loading</div>}>
      <DetailExperience experienceId={experienceId}/>
    </Suspense>
    </>
  )
}

export default DetailExperiencePage