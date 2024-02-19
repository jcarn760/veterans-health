import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';

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
      <Typography variant="h3" gutterBottom>
        
      </Typography>
      <Grid container spacing={3}>
        {exercises.map((exercise, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {exercise.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Difficulty: {exercise.difficulty}
                </Typography>
                <Typography variant="body2">
                  {exercise.instructions}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cardio;
