import React from 'react';
import { Container} from 'semantic-ui-react'

import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  BottomMenu: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '50px',
    borderTop: '1px solid #f2f2f2',
  },
  BottomMenuContainer: {
    height: '100%',
    display: 'flex !important',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})

const BottomMenu=({children})=>{
  const classes = useStyles();

  return (
    <div className={classes.BottomMenu}>
      <Container text className={classes.BottomMenuContainer}>
        {children}
      </Container>
    </div>
  )
}

export default BottomMenu