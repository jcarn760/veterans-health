import * as React from "react";
import { useState, useEffect } from "react";
import Icon from "@mui/material/Icon";

import {
  LinearProgress,
  Typography,
  Box,
  Button,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
  Container,
  Divider,
  ButtonBase,
} from "@mui/material";
import Fab from "@mui/material/Fab";
import VeteranPic from "../assets/Dashboard/veteran.webp";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import awsExports from "../aws-exports";
import config from "../amplifyconfiguration.json";
import {
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../graphql/mutations";
import { listWorkouts } from "../graphql/queries";
import { Flex } from "@aws-amplify/ui-react";
Amplify.configure(awsExports);
Amplify.configure(config);
const client = generateClient();

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export const Home = () => {
  const [progress, setProgress] = React.useState(10);
  const [getWorkouts, setGetWorkout] = useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [workoutName, setWorkoutName] = useState("");
  const [workoutReps, setWorkoutReps] = useState("");
  const [workoutTime, setWorkoutTime] = useState("");
  const [feeling, setFeeling] = useState("Amazing");
  //Get data from DB
  useEffect(() => {
    const handleWorkoutDisplay = async () => {
      try {
        const result = await client.graphql({ query: listWorkouts });
        console.log("List Workout");
        console.log(result.data.listWorkouts.items);
        setGetWorkout(result.data.listWorkouts.items);
      } catch (error) {
        console.error("Error adding todo", error);
      }
    };
    handleWorkoutDisplay();
  }, []);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  //Submit data to the DB
  const handleWorkoutSubmit = async () => {
    console.log("Submitting workout:", { workoutName, feeling });
    setWorkoutName("");
    setFeeling("");
    try {
      const result = await client.graphql({
        query: createWorkout,
        variables: {
          input: {
            workout_name: workoutName,
            feel: feeling,
          },
        },
      });
      console.log(result); // Process the result as needed
    } catch (error) {
      console.error("Error adding todo", error);
    }

    // Add your submit logic here
    handleModalClose();
  };

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "end" }}>
          Dashboard Overview
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: "linear-gradient(to left, #fff, #E1FAF6,#91C7DB)",
            bgcolor: "background.paper",
            width: 800,
            height: 180,
            boxShadow: 1,
            borderRadius: 2,
            mb: 3,
            mt: 2,
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ m: 1 }}>
              Hello, {"Users_name"}
            </Typography>
            {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
              <LinearProgressWithLabel value={progress} sx={{ width: "50%" }} />
            </Box> */}

            <Typography variant="body1" sx={{ m: 1 }}>
              Have a nice day and don't forget to take care of your health!
            </Typography>
          </Box>
          <Box
            sx={{
              width: 180,
              height: 180,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 3,
            }}
          >
            <img
              src={VeteranPic}
              alt="Veteran"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: 4,
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 3,
          }}
        >
          <ButtonBase
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(to left, #E1FAF6, #91C7DB)",
              width: 250,
              height: 120,
              boxShadow: 1,
              borderRadius: 2,
              mb: 3,
              mt: 2,
            }}
          >
            <Icon>add_circle</Icon>
            <Typography>Add Exercise</Typography>
          </ButtonBase>
          <ButtonBase
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(to right, #E1FAF6, #91C7DB)",
              width: 250,
              height: 120,
              boxShadow: 1,
              borderRadius: 2,
              mb: 3,
              mt: 2,
            }}
          >
            <Icon>message</Icon>
            <Typography>Message of the Day</Typography>
          </ButtonBase>
          <ButtonBase
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(to top, #E1FAF6, #91C7DB)",
              width: 250,
              height: 120,
              boxShadow: 1,
              borderRadius: 2,
              mb: 3,
              mt: 2,
            }}
          >
            <Typography>
              <b>Text/Call 998</b>
            </Typography>
            <Typography>Suicide Prevention Number</Typography>
          </ButtonBase>
        </Box>

        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Box
              sx={{
                position: "relative",
                m: 8,
                // background: "linear-gradient(to left, #fff, #E1FAF6,#91C7DB)",
                // bgcolor: "background.paper",
                boxShadow: 3,
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" sx={{ textAlign: "center", pb: 7 }}>
                Your Last Workouts
              </Typography>
              <Fab
                color="primary"
                aria-label="add"
                onClick={handleModalOpen}
                sx={{ position: "absolute", top: 25, right: 0 }}
              >
                <AddIcon />
              </Fab>
              <TableContainer sx={{}} component={Paper}>
                <Table aria-label="workout table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Workout Name</TableCell>
                      <TableCell align="right">Feeling</TableCell>
                      <TableCell align="right">Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {getWorkouts.map((getWorkout, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {getWorkout.workout_name}
                        </TableCell>
                        <TableCell align="right">{getWorkout.feel}</TableCell>
                        <TableCell align="right">
                          {getWorkout.createdAt}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box sx={{ position: "relative", m: 8 }}>
              <Typography variant="h5" sx={{ textAlign: "center", pb: 7 }}>
                Exercise of the Day
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={8}></Grid>
          <Modal
            open={modalOpen}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add Workout
              </Typography>
              <TextField
                label="Workout Name"
                variant="outlined"
                fullWidth
                value={workoutName}
                onChange={(e) => setWorkoutName(e.target.value)}
                sx={{ mt: 2 }}
              />
              <TextField
                label="Workout Repetitions"
                variant="outlined"
                fullWidth
                value={workoutReps}
                onChange={(e) => setWorkoutReps(e.target.value)}
                sx={{ mt: 2 }}
              />
              <TextField
                label="Workout Time"
                variant="outlined"
                fullWidth
                value={workoutTime}
                onChange={(e) => setWorkoutTime(e.target.value)}
                sx={{ mt: 2 }}
              />
              <FormControl component="fieldset" sx={{ mt: 2 }}>
                <FormLabel component="legend">How are you feeling?</FormLabel>
                <RadioGroup
                  row
                  aria-label="feeling"
                  name="row-radio-buttons-group"
                  value={feeling}
                  onChange={(e) => setFeeling(e.target.value)}
                >
                  <FormControlLabel
                    value="Amazing"
                    control={<Radio />}
                    label="Amazing"
                  />
                  <FormControlLabel
                    value="Okay"
                    control={<Radio />}
                    label="Okay"
                  />
                  <FormControlLabel
                    value="Tired"
                    control={<Radio />}
                    label="Tired"
                  />
                </RadioGroup>
              </FormControl>
              <Button
                variant="contained"
                onClick={handleWorkoutSubmit}
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Modal>
        </Grid>
      </Container>
    </>
  );
};
