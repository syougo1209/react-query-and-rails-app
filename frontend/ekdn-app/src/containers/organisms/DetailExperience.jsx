import React from 'react';
import { useQuery } from 'react-query';

import DetailExperience from 'components/organisms/DetailExperience';
import getDetailExperience from 'apis/experience/getDetailExperience';

const EnhancedDetailExperience=({experienceId})=>{
  const { data: experience=null }=useQuery([experienceId, 'detailExperience'], ()=>getDetailExperience(experienceId), {
    enabled: Number.isInteger(parseInt(experienceId))})

  return <DetailExperience experience={experience}/>
}

export default EnhancedDetailExperience