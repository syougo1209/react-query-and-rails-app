import React from 'react'
import { Loader } from 'semantic-ui-react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  Loader: {
    position: 'fixed !important',
   	top: '50% !important',
	  left: '50% !important'
  }
})

const PageLoader = () => {
  const classes = useStyles();
  return (
    <>
      <Loader active inline='centered' className={classes.Loader}/>
    </>
  )
}

export default PageLoader