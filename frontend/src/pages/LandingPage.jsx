import LandingPageImage from "../assets/LandingPage/fitness-web-dark.jpg";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { NavLink as RouterLink, useNavigate } from "react-router-dom";

export const LandingPage = () => {
  return (
    <>
      <Box pl="19%" pr="3%">
        <Stack direction="row" spacing="20px">
          <img
            width="50%"
            src={LandingPageImage}
            alt="two people working out"
            style={{ borderRadius: "90px" }}
          />
          <Stack>
            <h1>Welcome to Veteran Health</h1>
            <h3>
              Veteran health is a one stop shop for tracking your fitness goals
              and providing resources for your mental well being.
            </h3>
            <Divider />
            <h3>Get started by registering or logging in below.</h3>
            <Stack direction="row" pt="12%" pl="33%" spacing="10px">
              <RouterLink to="/login">
                <Button variant="contained">Login</Button>
              </RouterLink>
              <RouterLink to="register">
                <Button variant="contained">Sign Up</Button>
              </RouterLink>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
