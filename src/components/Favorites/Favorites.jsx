import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoritesItem from "../FavoritesItem/FavoritesItem";
import './Favorites.css';

// MUI IMPORTS
import Grid from '@mui/material/Grid';

export default function Favorites() {

    const dispatch = useDispatch();
    const favoritesArray = useSelector(store => store.favorites);
    useEffect(() => {
        dispatch({ type: 'SAGA_FETCH_CATS' });
        dispatch({ type: 'SAGA_FETCH_FAVS' });
    }, [])

    return (
        <>
            <Grid container spacing={2} className='favoritesdisplay'>
                {favoritesArray.map(fave => (
                    <Grid key={fave.id} item xs={3}>
                        <FavoritesItem fave={fave} />
                    </Grid>
                ))}
            </Grid>

        </>
    );

}