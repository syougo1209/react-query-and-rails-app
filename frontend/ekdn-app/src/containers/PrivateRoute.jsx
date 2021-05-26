import React from 'react';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router';
import getCurrentUserId from  'domains/getCurrentUserId'

const PrivateRoute= ({children})=>{
  const data = useQuery(['currentUserId'], getCurrentUserId)

  const userId = data.data
  return (
    <>
      {
        !data.isLoading &&
          (userId ?
            children
            : <Navigate to="/" />
          )
      }
    </>
  )
}

export default PrivateRoute