import React from 'react';
import { Segment, Header } from 'semantic-ui-react'
import {ChatRoomText} from 'constants/Text'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  CreateUserName: {
    fontSize: '15px',
    fontWeight: '100'
  }
})

const ChatRoomHeader=({chatRoom})=>{
  const classes=useStyles();

  return (
     <Segment>
      <Header>
        <span>{chatRoom.recruitment.title}</span> <p className={classes.CreateUserName}>{ChatRoomText.CREATED_USER} {chatRoom.recruitment.user.name}</p>
      </Header>
    </Segment>
  )
}

export default ChatRoomHeader
