// Import MUI stuff:
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Fab from '@mui/material/Fab';

import { useDispatch } from 'react-redux';
import './searchItem.css';

export default function SearchItem({ gif }){
    const dispatch = useDispatch();

    // Change image sizing tag here!
    const gifUrl = gif.images.fixed_height_small.url;

    // just sending the URL(string) we chose to display to add to the DB.
    const addToFavs = ()=>{
        dispatch({
            type: 'SAGA_POST_FAV',
            payload: {url: gifUrl}
        })
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
                <Fab size="small" color="secondary">
                    <FavoriteIcon 
                        onClick={addToFavs}
                    />
                </Fab>
            </Paper>
        </Box>
    )
}