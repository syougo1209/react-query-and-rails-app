import React, { Suspense } from 'react';
import { Outlet } from 'react-router';

import ErrorBoundary from 'ErrorBoundary';

const ChatRooms=()=>{
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>loading</div>}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  )
}

export default ChatRooms