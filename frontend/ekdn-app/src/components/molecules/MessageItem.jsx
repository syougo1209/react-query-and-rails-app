import React from 'react';
import {formatDateTime} from 'helpers/DateTimeHelper'

import { Item , Segment } from 'semantic-ui-react'
import {createUseStyles} from 'react-jss'

const useStyles =createUseStyles(({
  ItemWrapper: {
    float: ({isMyMessage})=> isMyMessage ? 'right' : 'left',
    maxWidth: '80%',
  },
  ItemContent: {
    textAlign: ({isMyMessage})=> isMyMessage ? 'right' : 'left',
  },
  MessageContainer: {
    wordBreak: 'break-word !important',
    backgroundColor: '#87cefa',
    display: 'inline-block !important',
    textAlign: 'left',
    background: '#F7FFF7 !important'
  },
}))

const MessageItem=({message, isMyMessage})=>{
  const classes = useStyles({isMyMessage})
  return (
    isMyMessage ? (
      <Item className={classes.ItemWrapper}>
        <Item.Content verticalAlign='middle' className={classes.ItemContent}>
          <Segment compact className={classes.MessageContainer}>
            {message.content}
          </Segment>
        </Item.Content>
      </Item>
    ):
    (
      <Item className={classes.ItemWrapper}>
        <Item.Image className={classes.Image}  size='tiny' src='https://react.semantic-ui.com///images/avatar/small/matt.jpg' />
        <Item.Content verticalAlign='middle'>
        <Segment compact className={classes.MessageContainer}>
          {message.content}
        </Segment>
        </Item.Content>
      </Item>
      )
  )
}

export default MessageItem