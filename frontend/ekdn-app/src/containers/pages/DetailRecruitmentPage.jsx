import React from 'react';
import { useParams, Navigate } from 'react-router';
import { useQuery } from 'react-query';

import DetailRecruitmentPage from 'components/pages/DetailRecruitmentPage'
import axios from 'apis/settings/axios';

import getCurrentUserId from  'apis/getCurrentUserId'

const EnhancedDetailExperiencePage=()=>{
  const { data: userId=null} = useQuery(['currentUserId'], getCurrentUserId, { suspense: false })
  const { recruitmentId } = useParams();

  if (!Number.isInteger(parseInt(recruitmentId))) return <Navigate to="/" replace />

  //todo userが気になったカテゴリーを作成するための処理
  if(userId) {
    try {
      axios.post('/access_recruitment_categories',{
        access_recruitment_category: {recruitmentId: recruitmentId}
      })
    } catch (error){
      console.log(error.response)
    }
  }

  return <DetailRecruitmentPage recruitmentId={recruitmentId} userId={userId}/>
}

export default EnhancedDetailExperiencePage