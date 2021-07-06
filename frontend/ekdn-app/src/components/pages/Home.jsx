import React, { Suspense } from 'react';
import { Container } from 'semantic-ui-react';

import Recruitments from 'containers/organisms/Recruitments';

import UserForm from 'components/organisms/form/UserForm';
import LoginForm from 'components/organisms/form/LoginForm'
import ExperienceForm from 'components/organisms/form/ExperienceForm'
import RecruitmentForm from 'components/organisms/form/RecruitmentForm';
import ErrorBoundary from 'ErrorBoundary';

const Home=({userId})=>{
  console.log(userId)
  /*
  const handleSubmit = async (event) => {
     event.preventDefault();
     const response = await axios.post('/users', {
       user: {
         name: name.value,
         password: password.value,
         email: email.value
       }
     })
     console.log(response.status)
  };*/

  return (
    <Container>
      <h1>Home</h1>
        <ErrorBoundary>
          <Suspense fallback={<div>hello</div>}>
            <Recruitments userId={userId}/>
          </Suspense>
        </ErrorBoundary>
        {!userId && <UserForm />}
        {!userId && <LoginForm />}
        {userId && <ExperienceForm /> }
        {userId && <RecruitmentForm /> }
    </Container>
  )
}

export default Home