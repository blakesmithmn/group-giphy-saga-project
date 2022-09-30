// MUI Imports:
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchItem from '../SearchItem/SearchItem';

import './search.css';

export default function Search(){
    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    // Sends input string to saga function searchGif:
    const submitSearch = ()=> {
        dispatch({
            type: 'SAGA_SEARCH',
            payload: search.query
        })
        setSearch('');
    }
    // Import array of search results from redux reducer:
    const searchResults = useSelector(store=> store.searchResults)
    console.log(search);
    console.log(searchResults) 
    // [{}{}]

    return(
        <>
            <form onSubmit={submitSearch}>
                <TextField 
                    id="outlined-basic"
                    size="small" 
                    label="Search" 
                    variant="outlined"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                <Button id="button" type="submit" variant="contained">Search</Button>
            </form>
            <ul className="results">
                {searchResults.map(gif => (
                    <SearchItem key={gif.id} gif={gif} />
                ))}
            </ul>
        </>
        
    )
}