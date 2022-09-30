import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import './CategoryForm.css'

// MUI imports
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function CategoryForm() {

    useEffect(() => {
        dispatch({ type: 'SAGA_FETCH_CATS' });
    }, [])

    const [categoryInput, setCategoryInput] = useState('');

    const categoriesArray = useSelector(store => store.categories);
    const dispatch = useDispatch();

    const submitNewCategory = () => {
        dispatch({type: 'SAGA_ADD_CATEGORY', payload: categoryInput});
        setCategoryInput('');
    }

    return (
        <section className="categoryForm">
            <TextField 
                    id="outlined-basic" 
                    placeholder="Add a Category"
                    variant="outlined"
                    value={categoryInput}
                    onChange={(e) => setCategoryInput(e.target.value)}
                    />
            <Button variant="contained" onClick={submitNewCategory}>Add</Button>
            <ul className="categoryFormList">
                {categoriesArray.map(category => {
                    return (
                        <li key={category.id}>{category.name}</li>
                    );
                })}
            </ul>
        </section>
    );
}