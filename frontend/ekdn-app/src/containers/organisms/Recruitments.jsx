import React from 'react';
import { useQuery } from 'react-query';

import getRecommendedRecruitments from 'apis/home/services/getRecommendedRecruitments'
import Recruitments from 'components/organisms/Recruitments'

const EnhancedRecruitments=({userId})=>{
  const {data: recommendedRecruitments=[]}=useQuery(
    userId && ["recommendedRecruitments"],
     getRecommendedRecruitments
  )
  return <Recruitments recruitments={recommendedRecruitments} />
}

export default EnhancedRecruitments