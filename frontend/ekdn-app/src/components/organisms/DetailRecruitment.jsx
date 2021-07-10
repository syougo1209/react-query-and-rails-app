import React from 'react';
import{ format } from 'date-fns'

import { Container, Header, Image, Button, Popup} from 'semantic-ui-react'
import {createUseStyles} from 'react-jss'

import BottomMenu from 'components/molecules/BottomMenu'

const useStyles = createUseStyles({
  Title: {
    fontSize: '40px !important',
  },
  Content: {
    marginTop: '50px',
    lineHeight: '50px',
    fontSize: '20px',
    height: '2000px'
  },
  Date: {
    fontSize: '13px',
    margin: '0'
  },
  UserName: {
    fontSize: '15px',
    margin: '0'
  },
  BottomMenuComponent: {
    marginLeft: '20px !important',
  }
})

const DetailRecruitment=({recruitment})=>{
  const classes = useStyles();
  return (
    <>
      <Container text>
        <Header as='h2' textAlign='center' className={classes.Title}>{recruitment.title}</Header>
        <Container textAlign='left'>
          <Image
            floated='left'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
          />
          <p className={classes.UserName}>{recruitment.user.name}</p>
          <p className={classes.Date}>{format(new Date(recruitment.created_at),'yyyy年MM月dd日 HH時mm分')}</p>
        </Container>
        <Container textAlign='center' className={classes.Content}>
          <p>
            {recruitment.content}
          </p>
        </Container>
      </Container>
      <BottomMenu>
        <Popup
          content='このグチを聞く'
          trigger={
            <Button
              circular
              color='facebook'
              icon='chat'
              className={classes.BottomMenuComponent}
            />
          }
        />
      </BottomMenu>
    </>
  )
}

export default DetailRecruitment