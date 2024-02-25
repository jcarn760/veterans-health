import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import {
  LinearProgress,
  Typography,
  Box,
  Card,
  Grid,
  TextField,
  Button,
  Stack,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1, pl: "10px", pl: "10px" }}>
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

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export const Home = () => {
  const [progress, setProgress] = React.useState(10);

  const [workout, setWorkout] = useState("");
  const [feeling, setFeeling] = useState("");
  const [weight, setWeight] = useState("");

  const handleWorkoutChange = (event) => {
    setWorkout(event.target.value);
  };

  const handleFeelingChange = (event) => {
    setFeeling(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleWorkoutSubmit = () => {
    console.log("Submitting workout:", { workout, feeling });
    setWorkout("");
    setFeeling("");
  };

  const handleWeightSubmit = () => {
    console.log("Submitting weight:", { weight });
    setWeight("");
  };

  return (
    <>
      <Box>
        <Box textAlign="center">
          <Typography variant="h3">Hello!</Typography>
          <Typography variant="h6">How are you feeling today?</Typography>
        </Box>
        <Stack>
          <Box pl="30%" pt="10%">
            <Card style={{ width: "60%", padding: "20px" }}>
              <Typography variant="h6">Your goal progress!</Typography>
              <LinearProgressWithLabel value={progress} />
              <Typography variant="subtitle1">
                To change your goal head to account page.
              </Typography>
            </Card>
          </Box>
          <Box pl="30%" pt="3%">
            <Accordion sx={{ width: "60%" }}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h5">Add Workout</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box pl="3%">
                  <Grid
                    container
                    spacing={2}
                    style={{
                      maxWidth: "550px",
                      padding: "20px",
                      borderRadius: "10px",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "white",
                    }}
                  >
                    <Grid item xs={12}>
                      <Typography variant="h4" align="center" gutterBottom>
                        Add Workout
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="workout"
                        label="Your workout"
                        variant="outlined"
                        fullWidth
                        value={workout}
                        onChange={handleWorkoutChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="feeling"
                        label="How are you feeling?"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={feeling}
                        onChange={handleFeelingChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleWorkoutSubmit}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ width: "60%" }}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography variant="h5">Update Weight</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box pl="3%">
                  <Grid
                    container
                    spacing={2}
                    style={{
                      maxWidth: "550px",
                      padding: "20px",
                      borderRadius: "10px",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "white",
                    }}
                  >
                    <Grid item xs={12}>
                      <Typography variant="h4" align="center" gutterBottom>
                        New Weight
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="weight"
                        label="Your weight"
                        variant="outlined"
                        fullWidth
                        value={weight}
                        onChange={handleWeightChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleWeightSubmit}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
