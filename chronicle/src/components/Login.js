import * as React from 'react';
import { Avatar, Grid, Paper, TextField, Button, FormControlLabel, Radio, RadioGroup} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'



export default function Login() {

  const paperStyle = {padding: 30, height: '70vh', width: 350, margin: '100px auto'}
  const avatarStyle = {background: '#1bbd7e'}
  
  
  return (
    <Grid align='center'>
      <Paper elevation={10} style={paperStyle}>
        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
        <h3>SignIn</h3>
        <TextField id="standard-basic" label="Name" placeholder='Enter Name' variant="standard" fullWidth required />
        <TextField  id="standard-basic" label="Email" placeholder='Enter Email' variant="standard" fullWidth required />
        <TextField  id="standard-basic" label="Phone Number"  placeholder='Enter Phone' variant="standard" fullWidth required />
        <TextField  id="standard-basic" label="Password" type='password' placeholder='Enter Password' variant="standard" fullWidth required />
        <TextField  id="standard-basic" label="Confirm Password" type='password' placeholder='Confirm Password' variant="standard" fullWidth required />
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
        <FormControlLabel value="Current Student" control={<Radio color='primary'/>} label="Student" />
        <FormControlLabel value="Alumini" control={<Radio color='primary' />} label="Alumini" />
        </RadioGroup>
        <Button type='submit' variant='contained' color='primary'>SignUp</Button>
        


      </Paper>
    </Grid>
  );
}