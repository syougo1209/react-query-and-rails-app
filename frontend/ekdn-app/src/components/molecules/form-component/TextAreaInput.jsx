import React from 'react';
import { TextArea, Message } from 'semantic-ui-react';

const DEFAULT_TEXT_AREA_HEIGHT=100

const TextAreaInput = ({register, errors, formTarget, showValidation}) => {

  return (
    <>
      <label>{formTarget}</label>
      <TextArea
        {...register}
        style={{ minHeight: DEFAULT_TEXT_AREA_HEIGHT }}
        placeholder='Tell us more'
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

export default TextAreaInput