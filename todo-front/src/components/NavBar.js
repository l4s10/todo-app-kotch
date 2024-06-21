import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Koshy Studios Productions .|.
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Sobre nosotros</Button>
                <Button color="inherit">Contactanos</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
