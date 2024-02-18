import LandingPageImage from "../assets/LandingPage/fitness-web-dark.jpg";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { NavLink as RouterLink, useNavigate } from "react-router-dom";

export const LandingPage = () => {
  return (
    <>
      <Box pl="5%" pr="5%">
        <Stack direction="row" spacing="20px">
          <img
            width="50%"
            src={LandingPageImage}
            alt="two people working out"
            style={{ borderRadius: "90px" }}
          />
          <Stack>
            <Typography variant="h3">Welcome to Veteran Health</Typography>
            <Typography variant="h6">
              Veteran health is a one stop shop for tracking your fitness goals
              and providing resources for your mental well being.
            </Typography>
            <Divider style={{ paddingTop: '5px', paddingBottom: '5px' }} />
            <Typography paddingTop="5px" variant="h6">Get started by registering or logging in below.</Typography>
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
