import './Header.css';
import { Link, useLocation } from 'react-router-dom';
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







export default function Header() {



    return (
        <header className='App-header'>

            <AppBar position='static' color='secondary' className='headerComponent'>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography variant="h4">
                            Greatest Gifs
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>



    )

}