import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Home from "./containers/pages/Home"
import User from "./containers/pages/User"
import PrivateRoute from "./containers/PrivateRoute"

const App = () => {
  return( 
    <>
      <Routes>
        <Route  path="/" element={<Home />} />
        <PrivateRoute>
          <Route path="/users" element={<User />} />
        </PrivateRoute>
        <Route path="*" element={<Navigate to="/" replace />} />;
      </Routes>
    </>
  )
}

export default App;
