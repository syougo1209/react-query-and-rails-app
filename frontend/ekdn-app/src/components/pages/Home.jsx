import React, { Suspense } from 'react';

import Categories from 'containers/organisms/Categories';
import Users from 'containers/organisms/Users';
import UserForm from 'components/organisms/form/UserForm';
import LoginForm from 'components/organisms/form/LoginForm'
import ExperienceForm from 'components/organisms/form/ExperienceForm'
//import axios from 'domains/settings/axios'

const Home=({userId, recommendedCategoryIds=[]})=>{
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
    <>
    <h1>Home</h1>
      <Suspense fallback={<div>hello</div>}>
        <Categories categoryIds={recommendedCategoryIds}/>
      </Suspense>
      <Suspense fallback={<div>hello</div>}>
        <Users categoryIds={recommendedCategoryIds}/>
      </Suspense>
      {!userId && <UserForm />}
      {!userId && <LoginForm />}
      {userId && <ExperienceForm /> }
    </>
  )
}

export default Home