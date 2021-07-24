import React from 'react';
import {formatDateTime} from 'helpers/DateTimeHelper'

import { Container, Header, Image} from 'semantic-ui-react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  Title: {
    fontSize: '40px !important',
  },
  Content: {
    marginTop: '50px',
    lineHeight: '50px',
    fontSize: '20px',
  },
  Date: {
    fontSize: '13px',
    margin: '0'
  },
  UserName: {
    fontSize: '15px',
    margin: '0'
  },
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
          <p className={classes.Date}>{formatDateTime(recruitment.created_at)}</p>
        </Container>
        <Container textAlign='center' className={classes.Content}>
          <p>
            {recruitment.content}
          </p>
        </Container>
      </Container>
    </>
  )
}

export default DetailRecruitment