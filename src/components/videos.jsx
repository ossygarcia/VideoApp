import React, { useContext } from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SocketContext } from '../socketContext'

const useStyles = makeStyles(theme => ({
  videos: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px'
    }
  },
  grideContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'center'
    }
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px'
  }
}))
const Videos = () => {
  const classes = useStyles()
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call
  } = useContext(SocketContext)

  return (
    <Grid container className={classes.grideContainer}>
      {/* my own video */}
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant='h4' gutterBottom>
              {name || 'Name'}
            </Typography>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className={classes.videos}
            />
          </Grid>
        </Paper>
      )}
      {/* users videos */};
      {callAccepted &&  !callEnded &&(
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant='h4' gutterBottom>
              {call.name}
            </Typography>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className={classes.videos}
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  )
}

export default Videos
