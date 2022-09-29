import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Favorites() {

    const dispatch = useDispatch();
    const favoritesArray = useSelector(store => store.favorites);
    useEffect(() => {
        dispatch({ type: 'SAGA_FETCH_CATS' });
        dispatch({ type: 'SAGA_FETCH_FAVS' });
    }, [])

    return (
        <>
            <pre>{JSON.stringify(favoritesArray)}</pre>
            {favoritesArray.map(fave => (
                <div key={fave.id}>
                    <img src={fave.url} />
                </div>
            ))}

        </>
    );

}