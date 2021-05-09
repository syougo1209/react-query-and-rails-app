import React from 'react';

const Categories=({categories})=>{
  return (
    <>
      <p>category</p>
      { categories.map(category => {
        
        return <li key={category.id}>{category.title}</li>
      })}
    </>
  )
}

export default Categories