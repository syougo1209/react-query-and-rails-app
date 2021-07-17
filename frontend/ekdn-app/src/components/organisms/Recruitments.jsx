import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Card, Image } from 'semantic-ui-react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  Header: {
    fontSize: '30px !important',
    width: '200px'
  },
  Content: {
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflowWrap: 'break-word !important'
  }
})

const Recruitments=({recruitments})=>{
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <p>recruitments</p>
      <Card.Group itemsPerRow={4}>
      { recruitments.map(recruitment => {
        return(
          <Card link onClick={() => navigate(`/recruitments/${recruitment.id}`)}>
            <Card.Content className={classes.Content}>
              <Card.Header size='huge' textAlign="center" className={classes.Header}>{recruitment.title}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <p>{recruitment.user.name}</p>
              <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
              />
            </Card.Content>
          </Card>
        )
      })}
      </ Card.Group>
    </>
  )
}

export default Recruitments