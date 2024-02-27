import * as React from "react";
import { useState, useEffect } from "react";
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
} from "@mui/material";
import Fab from "@mui/material/Fab";
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
      <Box textAlign="center" sx={{}}>
        <Typography variant="h3">Hello, {"Users_name"}</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <LinearProgressWithLabel value={progress} sx={{ width: "50%" }} />
        </Box>
        <Typography variant="h6" sx={{ mt: 2 }}>
          How are you feeling today?
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Box sx={{ position: "relative", m: 8 }}>
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
            <TableContainer component={Paper}>
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
    </>
  );
};
