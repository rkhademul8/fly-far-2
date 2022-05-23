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
import RemoveIcon from '@mui/icons-material/Remove';

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
                        <Box sx={{ display: 'flex', justifyContent: 'center', color: '#002441;' }}>
                            <RemoveIcon sx={{ marginTop: '16px' }} /> <p>Our Service</p>
                        </Box>
                        <h1>Solutions for the whole <br></br> travel ecosystem</h1>
                    </Box>

                    <Box className="travel-eco-card">

                        <Grid container spacing={8} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Grid item xs={12} md={5}>

                                <Card sx={{ maxWidth: 345, boxShadow: 3 }} className='eco-card'>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image={dash1}
                                    />

                                    {/* <img src={dash1} /> */}
                                    <CardContent className='eco-card-content'>
                                        <h4>For Travel Organizers</h4>
                                        <p>Get a user-friendly & customizable travel portal for your online travel agency. This will allow your OTA drive personalization, increase conversion, and tap into new markets.</p>

                                    </CardContent>
                                </Card>

                            </Grid>
                            <Grid item xs={12} md={5}>

                                <Card sx={{ maxWidth: 345, boxShadow: 3 }} className='eco-card'>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image={dash2}
                                    />

                                    {/* <img src={dash1} /> */}
                                    <CardContent className='eco-card-content'>
                                        <h4>For Travelers</h4>
                                        <p>Get a user-friendly & customizable travel portal for your online travel agency. This will allow your OTA drive personalization, increase conversion, and tap into new markets.</p>

                                    </CardContent>
                                </Card>

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