import React, { Suspense} from 'react';
import { Outlet } from 'react-router';

import ErrorBoundary from 'ErrorBoundary';

const Recruitments=()=>{
  return (
  <>
  <header>募集をみる</header>
    <ErrorBoundary>
      <Suspense fallback={<div>loading</div>}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  </>)
}

export default Recruitments