import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Home from "./containers/pages/Home"
import User from "./containers/pages/User"
import PrivateRoute from "./containers/PrivateRoute"

const App = () => {
  return( 
    <>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Suspense fallback={<div>hello</div>}>
          <PrivateRoute>
            <Route path="/users" element={<User />} />
          </PrivateRoute>
        </Suspense>
        <Route path="*" element={<Navigate to="/" replace />} />;
      </Routes>
    </>
  )
}

export default App;
