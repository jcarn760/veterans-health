import React, { useState } from "react";
import { Button, TextField, Typography, Grid, Stack } from "@mui/material";
import { signUp } from 'aws-amplify/auth';

export const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [dob, setDob] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [gender, setGender] = useState();
  const [goal, setGoal] = useState();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Creating new user:", {
      email,
      password,
      name,
      dob,
      weight,
      height,
      gender,
      goal,
    });
  };
  return (
    <>
      <Stack
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100vh",
          paddingLeft: "27%",
        }}
      >
        <Grid
          container
          spacing={2}
          style={{
            maxWidth: "550px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "white",
          }}
        >
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              Register new Account
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="name"
              label="Your Name"
              variant="outlined"
              required
              fullWidth
              value={name}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              type="email"
              label="Your Email"
              variant="outlined"
              required
              fullWidth
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              label="Your Password"
              variant="outlined"
              type="password"
              required
              fullWidth
              multiline
              value={password}
              onChange={handlePasswordChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="feedback"
              label="Your Date of Birth"
              variant="outlined"
              required
              fullWidth
              multiline
              value={dob}
              onChange={handleDobChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="height"
              label="Your Height"
              variant="outlined"
              required
              fullWidth
              multiline
              value={height}
              onChange={handleHeightChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="weight"
              label="Your Weight"
              variant="outlined"
              required
              fullWidth
              multiline
              value={weight}
              onChange={handleWeightChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="gender"
              label="Your Gender"
              variant="outlined"
              required
              fullWidth
              multiline
              value={gender}
              onChange={handleGenderChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="goal"
              label="Your Goal"
              variant="outlined"
              required
              fullWidth
              multiline
              value={goal}
              onChange={handleGoalChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};
