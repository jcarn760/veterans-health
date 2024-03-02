import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Grid,
} from "@mui/material";
import { createUser, updateUser, deleteWorkout } from "../graphql/mutations";
import { listWorkouts } from "../graphql/queries";
import { generateClient } from "aws-amplify/api";

const client = generateClient();
export const VeteranProfile = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    date_birth: "",
    height: "",
    weight: "",
    gender: "",
    health_goal: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.first_name);
  };

  //   Submit data to the DB
  const handleUserSubmit = async (event) => {
    console.log("Press Submit");
    event.preventDefault();
    console.log(formData);
    try {
      const newUser = await client.graphql({
        query: createUser,
        variables: {
          input: {
            first_name: formData.first_name,
            last_name: formData.last_name,
            date_birth: formData.date_birth,
            height: formData.height,
            weigth: formData.weight,
            gender: formData.gender,
            health_goal: formData.health_goal,
            profile: true,
          },
        },
      });
      console.log(newUser); // Process the result as needed
    } catch (error) {
      console.error("Error adding todo", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleUserSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="First Name"
              name="first_name"
              variant="outlined"
              value={formData.first_name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Last Name"
              name="last_name"
              variant="outlined"
              value={formData.last_name}
              onChange={handleChange}
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
              value={formData.date_birth}
              onChange={handleChange}
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
              value={formData.height}
              onChange={handleChange}
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
              value={formData.weight}
              onChange={handleChange}
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
              value={formData.gender}
              onChange={handleChange}
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
              value={formData.health_goal}
              onChange={handleChange}
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
