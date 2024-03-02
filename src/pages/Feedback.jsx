import React, { useState } from "react";
import { Button, TextField, Typography, Grid } from "@mui/material";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitting feedback:", { name, email, feedback });
    setName("");
    setEmail("");
    setFeedback("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
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
          backgroundColor: 'white'
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Feedback
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="name"
            label="Your Name"
            variant="outlined"
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
            fullWidth
            value={email}
            onChange={handleEmailChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="feedback"
            label="Your Feedback"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={feedback}
            onChange={handleFeedbackChange}
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
    </div>
  );
};

export default Feedback;
