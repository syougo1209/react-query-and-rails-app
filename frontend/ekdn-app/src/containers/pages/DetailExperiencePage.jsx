import React from 'react';
import { useParams, Navigate } from 'react-router';
import DetailExperiencePage from 'components/pages/DetailExperiencePage';

const EnhancedDetailExperiencePage=()=>{
  console.log("ohayo")
  //todo userが気になったカテゴリーを作成するための処理
  const { experienceId } = useParams();
  if (!Number.isInteger(parseInt(experienceId))) return <Navigate to="/" replace />

  return <DetailExperiencePage experienceId={experienceId}/>
}

export default EnhancedDetailExperiencePage