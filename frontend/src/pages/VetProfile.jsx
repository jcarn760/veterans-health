import React from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Grid,
} from "@mui/material";

export const Profile = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="First Name"
              name="first_name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Last Name"
              name="last_name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Date of Birth"
              name="date_birth"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Height (cm)"
              name="height"
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Weight (kg)"
              name="weight"
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Gender"
              name="gender"
              variant="outlined"
              select
              SelectProps={{ native: true }}
            >
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Health Goal"
              name="health_goal"
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained">
              Save Profile
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
