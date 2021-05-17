import React from 'react';
import { useQuery } from 'react-query';
import Users from 'components/organisms/Users';
import { getRecommendedCategoriesUsers } from 'domains/home';

const EnhancedUsers=(categoryIds)=>{
  const { data: users=[] } = useQuery([1, 'recommendedUsers'], getRecommendedCategoriesUsers)
  return <Users users={users} />
}

export default EnhancedUsers;