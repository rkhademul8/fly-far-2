import React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import banner from '../../image/banner/banner_img.png'


const Banner = () => {
    return (
        <Box>

            <Container>
                {/*------------- Banner part start ---------------*/}

                <section>
                    <img src={banner}></img>
                </section>

                {/*------------------ Banner part end -------------------*/}


            </Container>

        </Box>
    );
};

export default Banner;