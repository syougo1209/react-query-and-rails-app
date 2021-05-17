import React from 'react';

const Users=({users})=>{
  return (
    <>
      <p>users</p>
      { users.map(user => {
        return <li key={user.id}>{user.name}</li>
      })}
    </>
  )
}

export default Users