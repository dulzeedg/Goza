// the layout component servers as a container acrosss all pages of the application
import React from 'react';
import { Box, Container } from '@material-ui/core';
import { Fragment } from 'react';

export default function Layout({children}) {
    return (
        <Box color="Succes.main">
            <Container>
                <Fragment>
                   {children}
                </Fragment>
            </Container>
        </Box>
    );
}