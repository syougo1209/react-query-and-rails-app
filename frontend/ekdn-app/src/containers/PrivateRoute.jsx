import React from 'react';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router';
import getCurrentUserId from  'domains/getCurrentUserId'

const PrivateRoute= ({children})=>{
  const {isLoading, data: userId=null} = useQuery(['currentUserId'], getCurrentUserId)

  return (
    <>
      {
        !isLoading &&
          (userId ?
            children
            : <Navigate to="/" />
          )
      }
    </>
  )
}

export default PrivateRoute