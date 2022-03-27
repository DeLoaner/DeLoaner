import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function FormPropsTextFields() {
  return (
    <Box sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}>
      <Grid item xs={12} md={6}>
        <Stack direction="column" spacing={2}>
          <TextField
            required
            id="wallet id"
            label="wallet id"
            defaultValue=""
          />
          <TextField
            required
            id="wallet password"
            label="wallet Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField required id="outlined-password-input" label="recipient " />
          <TextField
            required
            id="outlined-password-input"
            label="Amount transferred"
          />
          <Button
            variant="outlined"
            onClick={() => {
              window.open("google.com");
            }}
          >
            Submit
          </Button>
        </Stack>
      </Grid>
    </Box>
  );
}