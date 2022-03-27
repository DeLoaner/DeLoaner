import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function Payment() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">


        </Grid>
        <Typography color="text.secondary" variant="body2">
          Please choose your method of payment.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>

        <Stack direction="column" spacing={5}>
      <Chip label="Visa/Master Card" component="a" href="#basic-chip" variant="outlined" clickable />
      <br></br>
      <Chip label="Paypal" component="a" href="#basic-chip" variant="outlined" clickable />
      <br></br>
      <Chip label="Pay with Terra" component="a" href="#basic-chip" variant="outlined" clickable />

    </Stack>
      </Box>

    </Box>
  );
}