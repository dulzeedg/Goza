import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Grid } from '@material-ui/core';
import Link from '@material-ui/core/Link';


export default function ButtonAppBar() {

    return  (
        <Grid>
            <Appbar>
                <Toolbar>
                    <IconButton>
                        <MenuRoundedIcon color="primary" />
                    </IconButton>
                    <ButtonGroup>
                        <Link>
                            <Button>Home</Button>
                        </Link>
                        <Link>
                            <Button>About</Button>
                        </Link>
                    </ButtonGroup>
                </Toolbar>
            </Appbar>
        </Grid>      
    )
}
