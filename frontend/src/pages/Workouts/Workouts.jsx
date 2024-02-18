import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box} from '@mui/material';
import CardioImg from "../../components/images/cards/Cardio.jpg"
import PlyometricsImg from "../../components/images/cards/Plyometrics.jpg"
import StrenghtImg from "../../components/images/cards/Strenght.jpg"
import StretchingImg from "../../components/images/cards/Stretching.jpg"

import { Lin, NavLink } from "react-router-dom";
export default function MultiActionAreaCard() {

const NavigateFunc = () => {


 
}

  return (
    <>
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
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        </NavLink>
      </CardActionArea>
    
    </Card>
    <Card sx={{ maxWidth: 335 }}>
      <CardActionArea >
        
      <NavLink to="/cardio" style={{ textDecoration: 'none' }}>
       
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
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        </NavLink>
      </CardActionArea>
    
    </Card>
    <Card sx={{ maxWidth: 335 }}>
      <CardActionArea >
        
      <NavLink to="/cardio" style={{ textDecoration: 'none' }}>
       
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
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        </NavLink>
      </CardActionArea>
    
    </Card>
    <Card sx={{ maxWidth: 335 }}>
      <CardActionArea >
        
      <NavLink to="/cardio" style={{ textDecoration: 'none' }}>
       
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
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        </NavLink>
      </CardActionArea>
    
    </Card>
    </Box>
    </>
    
    


  );
}