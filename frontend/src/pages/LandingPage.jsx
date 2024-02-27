import LogoImage from "../assets/LandingPage/logo.webp";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { NavLink as RouterLink, useNavigate } from "react-router-dom";

export const LandingPage = () => {
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
    </>
  );
};
