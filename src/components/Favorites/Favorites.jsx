import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoritesItem from "../FavoritesItem/FavoritesItem";

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
            <Grid container spacing={2}>
                {favoritesArray.map(fave => (
                    <Grid key={fave.id} item xs={8}>
                        <FavoritesItem key={fave.id} fave={fave} />
                    </Grid>
                ))}
            </Grid>

        </>
    );

}