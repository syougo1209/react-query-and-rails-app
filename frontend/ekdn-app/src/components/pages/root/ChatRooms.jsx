import React, { Suspense } from 'react';
import { Outlet } from 'react-router';

import PageLoader from 'components/atoms/PageLoader'
import ErrorBoundary from 'ErrorBoundary';

const ChatRooms=()=>{
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  )
}

export default ChatRooms