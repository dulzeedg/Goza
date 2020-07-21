import React from 'react';
import Grid from '@material-ui/core/Grid';
import Footer from '../Layouts/Footer';
import ButtonAppBar from '../Layouts/Appbar';
import Carousel from '../Layouts/Carousel';
import About from '../components/About';

export default function Home() {
    return (
        <React.Fragment>      
            <Grid>
                <ButtonAppBar />
                <Carousel />
                <About />
                <Footer /> 
            </Grid>
        </React.Fragment>
    ) 
}