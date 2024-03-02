import LogoImage from "../assets/LandingPage/logo.webp";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { NavLink as RouterLink, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { listUsers } from "../graphql/queries";
import { generateClient } from "aws-amplify/api";

export const LandingPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [results, setResults] = useState();
  const [profile, setProfile] = useState(false); //profile check
  const navigate = useNavigate();

  const client = generateClient();
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
    if (results == undefined) {
      console.log("No Profile- Undefined");
      setOpenModal(true);
      if (profile) {
        navigate("/home"); // Redirect to Home page if profile is true
      } else {
        setOpenModal(true); // Open the modal if profile is false
      }
    } else {
      console.log("Not Undefined");
    }

    handleProfile();
  }, [profile, navigate]);
  const handleClose = () => setOpenModal(false);
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
      </Stack>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={
            {
              /* Your modal styling here */
            }
          }
        >
          {/* Your Profile Form JSX here */}
        </Box>
      </Modal>
    </>
  );
};
