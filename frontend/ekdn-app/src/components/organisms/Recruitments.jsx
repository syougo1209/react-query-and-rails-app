import React from 'react';

const EnhancedRecruitments=({recruitments})=>{
  console.log(recruitments)
  return (
    <>
      <p>recruitments</p>
      { recruitments.map(recruitment => {
        return <li key={recruitment.id}>{recruitment.title}</li>
      })}
    </>
  )
}

export default EnhancedRecruitments