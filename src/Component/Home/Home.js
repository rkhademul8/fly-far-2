import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import dash1 from '../../image/travel_eco/Dashboard_1.png'
import dash2 from '../../image/travel_eco/Dashboard_2.png'

import './Home.css'


const Home = () => {
    return (
        <Box>
            {/* component */}

            <Header></Header>
            <Banner></Banner>

            {/* component */}


            <Container>

                {/* travel ecosystem start here */}

                <section>
                    <Box className="travel-eco-header">
                        <h1>Solutions for the whole <br></br> travel ecosystem</h1>
                    </Box>

                    <Box className="travel-eco-card">

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>

                                <Card sx={{ maxWidth: 345 }} className='eco-card'>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image={dash1}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </Card>

                            </Grid>
                            <Grid item xs={12} md={6}>

                            </Grid>
                        </Grid>

                    </Box>
                </section>

                {/* travel ecosystem end here */}


            </Container>

        </Box>
    );
};

export default Home;