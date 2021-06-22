import React from 'react';
import { useQuery } from 'react-query';
import Users from 'components/organisms/Users';
import { getRecommendedCategoriesUsers } from 'apis/home';

const EnhancedUsers=(categoryIds)=>{
  const { data: users=[] } = useQuery([1, 'recommendedUsers'], getRecommendedCategoriesUsers)
  console.log(users)
  return <Users users={users} />
}

export default EnhancedUsers;