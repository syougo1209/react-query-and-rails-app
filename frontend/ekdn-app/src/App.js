import React, {Suspense} from 'react';
import { Navigate, Route, Routes } from 'react-router';

import Home from "./containers/pages/Home"
import User from "./containers/pages/User"
import DetailRecruitmentPage from './containers/pages/DetailRecruitmentPage';

import DetailExperiencePage from "./containers/pages/DetailExperiencePage"
import DetailChatRoomPage from "./containers/pages/DetailChatRoomPage"

import PrivateRoute from "./containers/PrivateRoute"
import Experiences from "./components/pages/root/Experiences"
import Recruitments from "./components/pages/root/Recruitments"
import ChatRooms from "./components/pages/root/ChatRooms"
import Users from "./components/pages/root/Users"

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
          <Route path="/users" element={<Users />}>
            <Route  path=":userId" element={<User/>} />
          </Route>
        <PrivateRoute>
          <Route path="/chat_rooms" element={<ChatRooms/>}>
            <Route path=":chatRoomId" element={<DetailChatRoomPage/>} />
          </Route>
        </PrivateRoute>
        <Route path="*" element={<Navigate to="/" replace />} />;
      </Routes>
    </>
  )
}

export default App;
