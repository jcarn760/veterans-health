import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, Container, Divider,Box,Chip, Stack,capitalize } from '@mui/material';

const Cardio = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
      params: {type: 'cardio'},
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    };

    axios.request(options).then(response => {
      setExercises(response.data);
    }).catch(error => {
      console.error('There was an error!', error);
      <Typography variant="body2">
       Something happen
    </Typography>
    });
  }, []);

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Cardio Exercises
      </Typography>
      <Typography variant="body1" gutterBottom  pb={3}>
      Cardio exercises, like running or cycling, boost heart health, aid in weight control, and enhance mental well-being by reducing stress and improving sleep. Regular cardio activity strengthens the cardiovascular system, helps burn calories, and releases endorphins, elevating mood and energy levels efficiently.
      </Typography>
    <Divider/>
      <Grid container spacing={3} pt={3}>
        {exercises.map((exercise, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
              <Box sx={{p:2}}>
              <Typography variant="h5" component="div">
                  {exercise.name}
                </Typography>
              </Box>
              
            
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                { <Divider> Difficulty: {capitalize(exercise.difficulty)} </Divider> }
                </Typography>
                <Typography variant="body2" pb={2}>
                  {exercise.instructions}
                </Typography>
               <Divider>Additional Information</Divider>
              <Stack direction="row" spacing={2} pt={2}>
       
               <Chip label={capitalize(exercise.muscle)} size="small" />
               <Chip label={capitalize(exercise.difficulty)}  size="small" />
              </Stack>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cardio;
