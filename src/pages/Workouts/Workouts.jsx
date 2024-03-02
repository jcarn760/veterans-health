import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box} from '@mui/material';
import CardioImg from "../../assets/Workouts/Cardio.jpg"
import PlyometricsImg from "../../assets/Workouts/Plyometrics.jpg"
import StrenghtImg from "../../assets/Workouts/Strenght.jpg"
import StretchingImg from "../../assets/Workouts/Stretching.jpg"

import { Lin, NavLink } from "react-router-dom";
export default function MultiActionAreaCard() {

const NavigateFunc = () => {


 
}

  return (
    <>
    <Typography gutterBottom variant="h2" component="div">
            Workouts
          </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, m: 2 }}>
    

    
    <Card sx={{ maxWidth: 335 }}>
      <CardActionArea >
      
      <NavLink to="/cardio" style={{ textDecoration: 'none' }}>
       
        <CardMedia
          component="img"
          height="140"
          image={CardioImg}
          alt="Cardio"
        />
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cardio
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Cardio exercises provide veterans with significant health benefits, including improved heart health, increased stamina, weight management, reduced risk of chronic diseases, enhanced mood and mental health, and better sleep quality. These activities support a healthier lifestyle, contributing to overall well-being and longevity. Starting with appropriate intensity levels and gradually increasing is key to maximizing benefits while minimizing risks.
          </Typography>
        </CardContent>
        </NavLink>
      </CardActionArea>
    
    </Card>
    <Card sx={{ maxWidth: 335 }}>
      <CardActionArea >
        
      <NavLink to="/strenght" style={{ textDecoration: 'none' }}>
       
        <CardMedia
          component="img"
          height="140"
          image={StrenghtImg}
          alt="Cardio"
        />
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Strenght
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Strength training offers veterans critical benefits like increased muscle mass, enhanced strength, improved bone density, better joint flexibility, weight management, reduced risk of injuries, and improved mental health. It's an essential component of a balanced fitness regimen, aiding in physical resilience and overall well-being. Starting with proper technique and gradually progressing is crucial for safety and effectiveness.
          </Typography>
        </CardContent>
        </NavLink>
      </CardActionArea>
    
    </Card>
    <Card sx={{ maxWidth: 335 }}>
      <CardActionArea >
        
      <NavLink to="/plyometrics" style={{ textDecoration: 'none' }}>
       
        <CardMedia
          component="img"
          height="140"
          image={PlyometricsImg}
          alt="Cardio"
        />
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Plyometrics
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Plyometrics offer veterans numerous benefits, including enhanced physical performance, injury prevention, better cardiovascular health, effective weight management, mental health improvements, stronger bones, and improved coordination and balance. These exercises are valuable for maintaining overall fitness, mental well-being, and quality of life, but should be started with professional guidance to ensure safety and effectiveness.
          </Typography>
        </CardContent>
        </NavLink>
      </CardActionArea>
    
    </Card>
    <Card sx={{ maxWidth: 335 }}>
      <CardActionArea >
        
      <NavLink to="/stretching" style={{ textDecoration: 'none' }}>
       
        <CardMedia
          component="img"
          height="140"
          image={StretchingImg}
          alt="Cardio"
        />
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Stretching
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Stretching provides veterans with benefits such as improved flexibility, enhanced range of motion, reduced muscle tension, decreased risk of injuries, better posture, and stress relief. It's crucial for maintaining overall mobility and physical health, complementing other forms of exercise for a well-rounded fitness routine. Starting with gentle stretches and progressively increasing intensity can ensure safety and effectiveness.
          </Typography>
        </CardContent>
        </NavLink>
      </CardActionArea>
    
    </Card>
    </Box>
    </>
    
    


  );
}