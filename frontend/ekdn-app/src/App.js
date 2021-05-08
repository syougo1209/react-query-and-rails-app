import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Home from "./containers/pages/Home"

const App = () => {
  return( 
    <>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />;
      </Routes>
    </>
  )
}

export default App;
