// Import MUI stuff:
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Fab from '@mui/material/Fab';

import { useDispatch } from 'react-redux';
import './searchItem.css';

export default function SearchItem({ gif }){
    const dispactch = useDispatch();

    // Change image sizing tag here!
    const gifURL = gif.images.fixed_height_small.url;

    // just sending the URL we chose to display to add to the DB.
    const addToFavs = ()=>{
        dispatchEvent({
            type: 'SAGA_POST_FAV',
            payload: gifURL
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
                <img className="image" src={gifURL}/>
                <Fab size="small" color="secondary">
                    <FavoriteIcon 
                        onClick={addToFavs}
                    />
                </Fab>
            </Paper>
        </Box>
    )
}