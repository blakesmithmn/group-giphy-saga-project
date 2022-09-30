// Import MUI stuff:
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Fab from '@mui/material/Fab';

import { useDispatch, useSelector } from 'react-redux';
import './searchItem.css';
import { useState } from 'react';

export default function SearchItem({ gif }){
    const dispatch = useDispatch();
    const favorites = useSelector(store=> store.favorites);
    // Change image sizing tag here!
    const gifUrl = gif.images.fixed_height_small.url;

    const [favorite, setFavorite] = useState(false);

    // just sending the URL(string) we chose to display to add to the DB.
    const addToFavs = ()=>{
        dispatch({
            type: 'SAGA_POST_FAV',
            payload: {url: gifUrl}
        })
        setFavorite(true);
    }

    return(
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: 2,
                width: 178,
                height: 180,
                },
            }}
            >
            <Paper className="individualGif" elevation={3}>
                <img className="image" src={gifUrl}/>
                {!favorite ? 
                <Fab size="small" color="secondary" >
                    <FavoriteIcon 
                        onClick={addToFavs}
                    />
                </Fab> :
                <Fab size="small" disabled aria-label="like" >
                    <FavoriteIcon 
                        onClick={addToFavs}
                    />
                </Fab>
                }
            </Paper>
        </Box>
    )
}
