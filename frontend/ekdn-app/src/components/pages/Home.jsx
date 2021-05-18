import React, { Suspense, useState } from 'react';
import Modal from 'react-modal';

import Categories from 'containers/organisms/Categories';
import Users from 'containers/organisms/Users';
import UserForm from 'components/organisms/UserForm'
//import axios from 'domains/settings/axios'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('body');

const Home=(haveRecommendedCategoryIds, recommendedCategoryIds=[])=>{
  const [modalIsOpen, setIsOpen]= useState(false);
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
      <button onClick={()=>setIsOpen(true)}>open</button>
      <Modal
       isOpen={modalIsOpen}
       style={customStyles}
      >
        <button onClick={()=>setIsOpen(false)}>close</button>
        <UserForm />
      </Modal>
    </>
  )
}

export default Home