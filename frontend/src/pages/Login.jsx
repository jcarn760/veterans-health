import React, { useState } from "react";
import { Button, TextField, Typography, Grid, Stack } from "@mui/material";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Logging in:", { email, password });
  };

  return (
    <>
      <Stack
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100vh",
        }}
      >
      </Stack>
    </>
  );
};
