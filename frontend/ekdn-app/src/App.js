import React, {Suspense} from 'react';
import { Navigate, Route, Routes } from 'react-router';

import Home from "./containers/pages/Home"
import User from "./containers/pages/User"
import DetailRecruitmentPage from './containers/pages/DetailRecruitmentPage';

import DetailExperiencePage from "./containers/pages/DetailExperiencePage"
import PrivateRoute from "./containers/PrivateRoute"
import Experiences from "./components/pages/root/Experiences"
import Recruitments from "./components/pages/root/Recruitments"


const App = () => {
  return( 
    <>
      <Routes>
        <Suspense fallback={<div>hello</div>}>
          <Route path="/" element={<Home />} />
        </Suspense>
        <Route path="/experiences" element={<Experiences/>}>
          <Route path=":experienceId" element={<DetailExperiencePage/>} />
        </Route>
        <Route path="/recruitments" element={<Recruitments />} >
        <Route path=":recruitmentId" element={<DetailRecruitmentPage/>} />
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
