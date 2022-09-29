import { useSelector } from "react-redux";

// Mui for dropdown menu
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// This component will live inside of FavoritesItem
// The currently mapped gif object will pass in it's category Id
export default function CategoryDisplay({categoryId}) {

    const categoriesArray = useSelector(store => store.categories);

    return (
        // CURRENT CATEGORY WITH A DROP-DOWN TO CHANGE CATEGORY
        <h1>Current Category</h1>
        
    );
}