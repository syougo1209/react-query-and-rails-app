import React from 'react';

const SelectBox = ({register, errors, formTarget}) => {

  //todo: selectListを親から呼ぶ
  const selectOptions = [{value: 1, name: "恋愛"}, {value: 2, name: "料理"}]
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