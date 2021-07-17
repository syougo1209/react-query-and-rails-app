import React from 'react';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router';
import getCurrentUserId from  'apis/getCurrentUserId'

const PrivateRoute= ({children})=>{
  const {isLoading, data: userId=null} = useQuery(['currentUserId'], getCurrentUserId, {suspense: false})

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