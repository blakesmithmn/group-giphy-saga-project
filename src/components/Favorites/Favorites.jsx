import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Favorites() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'SAGA_FETCH_CATS'});
    }, [])

    return (
        <>
        </>
    );

}