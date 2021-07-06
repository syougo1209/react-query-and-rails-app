import React from 'react';
import { useParams, Navigate } from 'react-router';

//import axios from 'apis/settings/axios';

const EnhancedDetailExperiencePage=()=>{
  const { recruitmentId } = useParams();
  if (!Number.isInteger(parseInt(recruitmentId))) return <Navigate to="/" replace />

  //todo userが気になったカテゴリーを作成するための処理


  return <p>{recruitmentId}</p>
}

export default EnhancedDetailExperiencePage