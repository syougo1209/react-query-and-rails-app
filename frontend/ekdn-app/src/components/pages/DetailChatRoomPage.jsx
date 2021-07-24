import React, { Suspense } from 'react';

import { Container, Grid} from 'semantic-ui-react'

import ChatRoomHeader from 'containers/atoms/ChatRoomHeader'
import ChatRoomMessages from 'containers/organisms/ChatRoomMessages'
import MessageForm from 'components/organisms/form/MessageForm'

import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  BottomForm: {
    position: 'fixed',
    bottom: '0',
    borderTop: '1px solid #f2f2f2',
  },
})

const EnhancedDetailChatRoomPage=()=>{
  const classes = useStyles();

  return (
  <Container>
    <Suspense fallback={<div>loading</div>}>
      <ChatRoomHeader/>
    </Suspense>
    <Grid>
      <Grid.Column width={4}>
      </Grid.Column>
      <Grid.Column width={12}>
        <Suspense fallback={<div>loading</div>}>
          <ChatRoomMessages />
        </Suspense>
        <MessageForm />
      </Grid.Column>
    </Grid>
  </Container>)
}

export default EnhancedDetailChatRoomPage