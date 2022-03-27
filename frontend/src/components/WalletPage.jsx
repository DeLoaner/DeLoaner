import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function FormPropsTextFields() {
  return (
    <Box sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper'}}>

    <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Have a wallet?
          </Typography>

      <Stack direction="column" spacing={2}>
        <TextField
          required
          id="user name"
          label="user name"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="outlined" onClick={() => { window.open("google.com") }}>Sign In</Button>
      </Stack> 
    </Grid>
    <Grid item xs={12} md={6}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Don't have a wallet? 
      </Typography>
      <Button variant="outlined" onClick={() => { window.open("google.com") }}>Make one </Button>
    </Grid>

    </Box>
  );
}