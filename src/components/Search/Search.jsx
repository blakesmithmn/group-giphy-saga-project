// MUI Imports:
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { useState } from 'react';

export default function Search(){
    const [search, setSearch] = useState('');
    console.log(search);

    return(
        
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField 
                id="outlined-basic" 
                label="Outlined" 
                variant="outlined"
                value={search}
                onChange={e=> setSearch(e.target.value)}
                />
            <Button variant="contained">Contained</Button>
        </Box>
        
    )
}