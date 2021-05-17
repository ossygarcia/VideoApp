import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Videos from './components/videos'
import Options from './components/options'
import Notify from './components/notify'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display:"flex",
    flexDirection:'column',
    alignItems:'center',
    width: '100%'
  },
  appBar: {
    borderRadius: 15,
    margin: '30px 190px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '900px',
    border: '2px solid black'
  }
}))
const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position='static' color='inherit' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h5' align='center'>
            Video Chat
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Videos />
        <Options>
          <Notify />
        </Options>
      </main>
    </div>
  )
}

export default App
