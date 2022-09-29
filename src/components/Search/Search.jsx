// MUI Imports:
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchItem from '../SearchItem/SearchItem';

export default function Search(){
    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    // Sends input string to saga function searchGif:
    const submitSearch = ()=> {
        dispatch({
            type: 'SAGA_SEARCH',
            payload: search
        })
    }
    // Import array of search results from redux reducer:
    const searchResults = useSelector(store=> store.searchResults)

    // console.log(searchResults) 
    // [{}{}]

    return(
        <>
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
                    onChange={(e) => setSearch(e.target.value)}
                    />
                <Button variant="contained" onClick={submitSearch}>Search</Button>
            </Box>
            <ul className="results">
                {/* <p> search results here:</p> */}
                {searchResults.map(gif => (
                    <SearchItem key={gif.id} gif={gif} />
                ))}
            </ul>
        </>
        
    )
}