import React from 'react';
import { Typography, Link } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';

export default function Footer() {

  return (
    <Grid>
      <Typography variant="body1">
        &copy;{' '}
        <Link
          component="a"
          href="https://mightybit.com.ng"
          target="_blank"
        >
          MightyBit
        </Link>
        . 2021  
        <TwitterIcon color="primary" />
        <GitHubIcon color="primary"/>
      </Typography>
    </Grid>
  );
}