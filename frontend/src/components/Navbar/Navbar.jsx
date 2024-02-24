import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FeedbackIcon from "@mui/icons-material/Feedback";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import Stack from "@mui/material/Stack";
import { NavLink as RouterLink, useNavigate } from "react-router-dom";
import { signOut } from "aws-amplify/auth";

const drawerWidth = 240;

async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <RouterLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/"
          >
            <Stack direction="row">
              <HealthAndSafetyIcon />
              <Typography variant="h6" noWrap component="div" pl="12px">
                Veterans Health
              </Typography>
            </Stack>
          </RouterLink>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <RouterLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/home"
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
            </RouterLink>
            <RouterLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/workouts"
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText primary="Workouts" />
                </ListItemButton>
              </ListItem>
            </RouterLink>
            <RouterLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/mental_health"
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PsychologyIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mental Health" />
                </ListItemButton>
              </ListItem>
            </RouterLink>
            <RouterLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/feedback"
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FeedbackIcon />
                  </ListItemIcon>
                  <ListItemText primary="Feedback" />
                </ListItemButton>
              </ListItem>
            </RouterLink>
          </List>
          <Divider />
          <Box pt="30px" pl="30%">
            <ButtonGroup orientation="vertical" variant="contained">
              <RouterLink
                style={{ textDecoration: "none", color: "inherit" }}
                to="/auth"
              >
                <Button fullWidth="100%">Login</Button>
              </RouterLink>
              <RouterLink
                style={{ textDecoration: "none", color: "inherit" }}
                to="/"
              >
                <Button
                  color="secondary"
                  fullWidth="100%"
                  onClick={handleSignOut}
                >
                  Logout
                </Button>
              </RouterLink>
              <RouterLink
                style={{ textDecoration: "none", color: "inherit" }}
                to="/auth"
              >
                <Button fullWidth="100%">Register</Button>
              </RouterLink>
            </ButtonGroup>
          </Box>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
