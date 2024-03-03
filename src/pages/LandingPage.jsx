import LogoImage from "../assets/LandingPage/logo.webp";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { listUsers } from "../graphql/queries";
import { generateClient } from "aws-amplify/api";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { fetchUserAttributes } from "aws-amplify/auth";
import { updateUserAttributes } from "aws-amplify/auth";

export const LandingPage = ({ user }) => {
  const [openModal, setOpenModal] = useState(false);
  const [results, setResults] = useState();
  const [profile, setProfile] = useState(false); //profile check
  const [email, setEmail] = useState();
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);
  const navigate = useNavigate();

  const client = generateClient();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    height: "",
    weight: "",
    gender: "",
    goal: "",
  });

  useEffect(() => {
    const handleProfile = async () => {
      try {
        const result = await client.graphql({ query: listUsers });
        console.log("List User");
        console.log(result.data.listUsers[0]);
        setResults(result.data.listUsers[0]);
        setProfile(result.data.listUsers.items[0].profile);
      } catch (error) {
        console.error("Error adding todo", error);
      }
    };
    console.log("Email", email);
    if (email === undefined) {
      console.log("No signed in");
      console.log(email);
      navigate("/"); // Redirect to Home page if profile is true
    } else {
      // Open the modal if profile is false
      // navigate("/home");
    }

    async function handleFetchUserAttributes() {
      try {
        const userAttributes = await fetchUserAttributes();
        console.log("Fetch User Atrributes");
        console.log(userAttributes.first_name);
        setEmail(userAttributes.first_name);
      } catch (error) {
        console.log(error);
      }
    }
    handleFetchUserAttributes();

    handleProfile();
  }, [profile, navigate]);
  const handleClose = () => setOpenModal(false);
  // Add your form submit handler here

  const handleUserSubmit = async (event) => {
    event.preventDefault();
    try {
      const attributes = await updateUserAttributes({
        userAttributes: {
          "first_name": formData.first_name,
          "last_name": formData.last_name,
          "date_of_birth": formData.date_of_birth,
          "goal": formData.goal,
          "height": formData.height,
          "weight": formData.weight,
          "gender": formData.gender,
        },
      });
      // handle next steps
    } catch (error) {
      console.log(error);
    }
  };

  // const handleUserSubmit = async (event) => {
  //   event.preventDefault();
  //   // Submit form logic here
  //   try {
  //     const newUser = await client.graphql({
  //       query: createUser,
  //       variables: {
  //         input: {
  //           first_name: formData.first_name,
  //           last_name: formData.last_name,
  //           date_birth: formData.date_birth,
  //           height: formData.height,
  //           weigth: formData.weight,
  //           gender: formData.gender,
  //           health_goal: formData.health_goal,
  //           profile: true,
  //           profile_user: user,
  //         },
  //       },
  //     });
  //     console.log(newUser); // Process the result as needed
  //     navigate("/home");
  //   } catch (error) {
  //     console.error("Error adding todo", error);
  //   }
  // };

  // Add your form change handler here
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          paddingTop: 5,
        }}
      >
        <img
          width="50%"
          src={LogoImage}
          alt="two people working out"
          style={{ borderRadius: "90px" }}
        />
        <Button onClick={() => setOpenModal(true)}>Complete Profile</Button>
      </Stack>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
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
                  <Button type="submit" fullWidth variant="contained" onClick={handleClose}>
                    Save Profile
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Modal>
    </>
  );
};
