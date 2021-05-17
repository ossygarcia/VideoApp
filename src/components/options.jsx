import React, { useContext, useState } from 'react'
import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Container
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons'

import { SocketContext } from '../socketContext'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  grideContainer: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  paper: {
    padding: '10px 20px',
    border: '2px solid black',
    margin: '10px'
  },
  container: {
    width: '600px',
    margin: '35px 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '80%'
    }
  },
  margin: {
    marginTop: '20px'
  },
  padding: {
    padding: '20px'
  }
}))

const Options = ({ children }) => {
  const classes = useStyles()
  const {
    me,
    callAccepted,
    name,
    setName,
    endCall,
    callUser,
    callEnded
  } = useContext(SocketContext)
  const [idToCall, setIdToCall] = useState('')
  return (
    <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete='off'>
          <Grid container className={classes.grideContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant='h6'>
                Account Info
              </Typography>
              <TextField
                label='Name'
                value={name}
                onChange={e => setName(e.target.value)}
                fullWidth
              />
              {console.log(me)}
              <CopyToClipboard text={me} className={classes.margin}>
                <Button
                  variant='contained'
                  color='primary'
                  startIcon={<Assignment fontSize='large' />}
                  fullWidth
                >
                  Copy ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant='h6'>
                Make a Call
              </Typography>
              <TextField
                label='ID to Call'
                value={idToCall}
                onChange={e => setIdToCall(e.target.value)}
                fullWidth
              />
              {callAccepted && !callEnded ? (
                <Button
                  variant='contained'
                  color='secondary'
                  startIcon={<PhoneDisabled />}
                  fullWidth
                  onClick={endCall}
                  className={classes.margin}
                >
                  End Call
                </Button>
              ) : (
                <Button
                  variant='contained'
                  color='primary'
                  startIcon={<Phone />}
                  fullWidth
                  onClick={() => callUser(idToCall)}
                  className={classes.margin}
                >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  )
}

export default Options
