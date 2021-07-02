import React from 'react';

const SelectBox = ({register, errors, formTarget, selectOptions}) => {


  return (
    <>
      <label>{formTarget}</label>
      <select {...register} >
        {selectOptions.map((option)=>(
          <>
            <option key={option.value} value={option.value}>{option.name}</option>
          </>
        ))}
      </select>
      {errors[formTarget] && "errors is presented"}
    </>
  )
}

export default SelectBox