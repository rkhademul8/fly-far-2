import React from 'react';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import banner from '../../image/banner/banner_img.png'

import './Banner.css'


const bgbanner = {
    backgroundImage: `url(${banner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: "10px",

}



const Banner = () => {
    return (
        <Box>

            <Container>
                {/*------------- Banner part start ---------------*/}

                <section style={bgbanner} className>
                    <Box className="banner">
                        <h1>One Platform,All <br></br> Travel Solutions.</h1>
                        <p>Bangladesh’s most comprehensive B2B portal for You. In publishing <br></br> and graphic design.</p>
                        <Button variant="contained">Sign Up Now</Button>
                    </Box>
                </section>

                {/*------------------ Banner part end -------------------*/}


            </Container>

        </Box>
    );
};

export default Banner;