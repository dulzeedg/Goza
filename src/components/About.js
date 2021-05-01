import React from 'react';
import { Grid, Paper, Typography, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OwlCarousel from 'react-owl-carousel';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function About() {
    const classes = useStyles();

    return(
        <Grid item xs={12}>
            <Grid>
                <Typography variant="h3">About</Typography>
                <Paper className={classes.paper}>
                    <Typography variant="h5" >
                            Technologies used
                        </Typography>
                        <Typography variant="body2">
                            body2. Lorem ipsum dolor 
                            sit amet, consectetur adipisicing 
                            elit. Quos blanditiis tenetur
                            body2. Lorem ipsum dolor 
                            sit amet, consectetur adipisicing 
                            elit. Quos blanditiis tenetur
                        </Typography>
                   
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant="h5" >
                        Features
                    </Typography>
                    <Typography variant="body2">
                        body2. Lorem ipsum dolor 
                        sit amet, consectetur adipisicing 
                        elit. Quos blanditiis tenetur
                        body2. Lorem ipsum dolor 
                        sit amet, consectetur adipisicing 
                        elit. Quos blanditiis tenetur
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}