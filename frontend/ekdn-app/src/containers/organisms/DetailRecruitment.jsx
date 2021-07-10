import React from 'react';
import { useQuery } from 'react-query';

import DetailRecruitment from 'components/organisms/DetailRecruitment';
import getDetailRecruitment from 'apis/recruitment/getDetailRecruitment';
import getCurrentUserId from  'apis/getCurrentUserId'

const EnhancedDetailRecruitment=({recruitmentId})=>{

  const { data: userId=null} = useQuery(['currentUserId'], getCurrentUserId)
  const { data: recruitment }=useQuery([recruitmentId, 'detailRecruitment'], ()=>getDetailRecruitment(recruitmentId), {
    enabled: Number.isInteger(parseInt(recruitmentId)) && !!userId})

  return <DetailRecruitment recruitment={recruitment}/>
}

export default EnhancedDetailRecruitment