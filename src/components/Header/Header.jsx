import './Header.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";

//MUI IMPORTS
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ButtonGroup from '@mui/material/ButtonGroup';








export default function Header() {
    const history = useHistory();

    const navToSearch = () => {
        history.push('/search');
    }

    const navToFavs = () => {
        history.push('/favorites');
    }
    const navToCats = () => {
        history.push('/categories');
    }


    return (
        <header className='App-header'>

            <AppBar position='static' color='secondary' className='headerComponent'>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={6} textAlign='left'>
                                <Typography variant="h4" >
                                    Greatest Gifs
                                </Typography>
                            </Grid>
                            <Grid item xs={6} textAlign='right'>
                                <ButtonGroup variant='outlined' aria-label='outlined button group' className='navButtons' color='secondary'>
                                    <Button onClick={navToSearch}>Search</Button>
                                    <Button onClick={navToFavs}>Favorites</Button>
                                    <Button onClick={navToCats}>Categories</Button>
                                </ButtonGroup>

                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>



    )

}