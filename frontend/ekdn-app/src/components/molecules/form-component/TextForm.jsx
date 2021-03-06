import React from 'react';
import { Input, Message } from 'semantic-ui-react';

const TextForm = ({register, errors, formTarget, showValidation}) => {

  console.log(errors[formTarget])
  return (
    <>
      <label>{formTarget}</label>
      <Input
        {...register}
      />
      {showValidation && errors[formTarget] &&
        <Message
          error
          header='バリデーションエラー'
          content='文字数制限'
        />
      }
    </>
  )
}

export default TextForm