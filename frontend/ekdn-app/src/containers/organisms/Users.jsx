import React from 'react';
import { useQuery } from 'react-query';
import Users from 'components/organisms/Users';
//import { getRecommendedCategoriesUsers} from 'domains/home';
import axios from 'domains/settings/axios';

const EnhancedUsers=(categoryIds)=>{
  const { data: users=[] } = useQuery([1, 'recommendedUsers'], async (categoryIds)=>{
    const response = await axios.get('/users/recommended_categories_users', {
      params: {
        categoryIds: categoryIds
      }
    })
    return response.data.users
  })
  return <Users users={users} />
}

export default EnhancedUsers;