import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Grid from '@material-ui/core/Grid';

import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';

export default function Carousel() {
    
    return (
        <Grid>
            <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav
                dots
            >
                <div class="item"><img src={img1} /></div>
                <div class="item"><img src={img2} /></div>
                <div class="item"><img src={img3} /></div>
                <div class="item"><img src={img4} /></div>
                <div class="item"><img src={img5} /></div>
                <div class="item"><img src={img6} /></div>
            </OwlCarousel>
        </Grid>
    )
}