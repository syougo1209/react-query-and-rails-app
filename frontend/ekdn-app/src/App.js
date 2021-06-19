import React, {Suspense} from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Home from "./containers/pages/Home"
import User from "./containers/pages/User"
import Experiences from "./components/pages/Experiences"
import DetailExperiencePage from "./containers/pages/DetailExperiencePage"
import PrivateRoute from "./containers/PrivateRoute"

const App = () => {
  return( 
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences/>}>
          <Route path=":experienceId" element={<DetailExperiencePage/>} />
        </Route>
        <PrivateRoute>
          <Route path="/users" element={<User />} />
        </PrivateRoute>
        <Route path="*" element={<Navigate to="/" replace />} />;
      </Routes>
    </>
  )
}

export default App;
