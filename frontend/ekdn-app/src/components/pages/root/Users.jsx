import React, { Suspense } from 'react';
import { Outlet } from 'react-router';

import ErrorBoundary from 'ErrorBoundary';

const Users=()=>{
  return (
  <>
    <ErrorBoundary>
      <Suspense fallback={<div>loading</div>}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  </>)
}

export default Users