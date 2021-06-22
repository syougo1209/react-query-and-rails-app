import React from 'react';
import { useParams, Navigate } from 'react-router';
import DetailExperiencePage from 'components/pages/DetailExperiencePage';
import axios from 'apis/settings/axios';

const EnhancedDetailExperiencePage=()=>{
  const { experienceId } = useParams();
  if (!Number.isInteger(parseInt(experienceId))) return <Navigate to="/" replace />

  //todo userが気になったカテゴリーを作成するための処理
  try {
    axios.post('/access_experience_categories',{
      access_experience_category: {experienceId: experienceId}
    })
  } catch (error){
    console.log(error.response)
  }

  return <DetailExperiencePage experienceId={experienceId}/>
}

export default EnhancedDetailExperiencePage